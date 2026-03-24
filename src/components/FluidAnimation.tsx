import React, { useEffect, useRef, useState } from 'react';

class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

class Pointer {
  constructor(canvas, options = {}) {
    const { scaleMin = 0.01, scaleMax = 10.0, pressureMax = 1.0, pressureDuration = 1000 } = options;

    this.canvas = canvas;
    this.opt = { scaleMin, scaleMax, pressureMax, pressureDuration };
    this.pressCheckInterval = 20;
    this.deltaPressure = this.opt.pressureMax / this.opt.pressureDuration * this.pressCheckInterval;

    this.position = new Vector2();
    this.zoomSpeed = 1.0;
    this.scale = 1.0;
    this.dollyStart = new Vector2();
    this.dollyEnd = new Vector2();
    this.dollyDelta = new Vector2();
    this.isPressing = false;
    this.pressure = 0.0;

    this.setupEventListeners();
  }

  get zoomScale() {
    return Math.pow(0.95, this.zoomSpeed);
  }

  setScale(val) {
    this.scale = clamp(val, this.opt.scaleMin, this.opt.scaleMax);
  }

  updatePosition(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    this.position.x = ((clientX - rect.left) * 2 - rect.width) / size;
    this.position.y = ((rect.height - (clientY - rect.top)) * 2 - rect.height) / size;
  }

  setupEventListeners() {
    const handleMove = (e) => {
      let x, y;
      if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      this.updatePosition(x, y);
    };

    const handleDown = (e) => {
      if (e instanceof MouseEvent && e.button !== 0) return;

      this.isPressing = true;
      if (e.touches) {
        this.updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }

      const intervalID = setInterval(() => {
        if (!this.isPressing || !this.setPressure(this.pressure + this.deltaPressure)) {
          clearInterval(intervalID);
        }
      }, this.pressCheckInterval);

      const pressingTest = setInterval(() => {
        if (this.isPressing) {
          const event = new CustomEvent('Pointer.pressing', { detail: this.pressure });
          this.canvas.dispatchEvent(event);
        } else {
          clearInterval(pressingTest);
        }
      }, this.pressCheckInterval);
    };

    const handleUp = (e) => {
      if (e instanceof MouseEvent && e.button !== 0) return;

      this.isPressing = false;
      const intervalID = setInterval(() => {
        if (this.isPressing || !this.setPressure(this.pressure - this.deltaPressure)) {
          const event = new CustomEvent('Pointer.pressingEnd', { detail: this.pressure });
          this.canvas.dispatchEvent(event);
          clearInterval(intervalID);
        } else {
          const event = new CustomEvent('Pointer.postpressing', { detail: this.pressure });
          this.canvas.dispatchEvent(event);
        }
      }, this.pressCheckInterval);
    };

    ['mousemove', 'touchmove'].forEach(evtName => {
      this.canvas.addEventListener(evtName, handleMove, false);
    });

    ['mousedown', 'touchstart'].forEach(evtName => {
      this.canvas.addEventListener(evtName, handleDown, false);
    });

    ['mouseup', 'touchend'].forEach(evtName => {
      this.canvas.addEventListener(evtName, handleUp, false);
    });
  }

  setPressure(val) {
    const valid = val <= this.opt.pressureMax && val >= 0.0;
    this.pressure = clamp(val, 0.0, this.opt.pressureMax);
    return valid;
  }
}

interface FluidAnimationProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  seed?: number | null;
  complexity?: number;
  mouseSpeed?: number;
  fixedOffset?: number;
  fluidSpeed?: number;
  baseColor?: number;
  blur?: number;
  morphSpeed?: number;
  style?: React.CSSProperties;
}

export default function FluidAnimation({
  width = "100vw",
  height = "100vh",
  backgroundColor = "black",
  seed = null,
  complexity = 10,
  mouseSpeed = 0.3,
  fixedOffset = 0.7,
  fluidSpeed = 0.07,
  baseColor = 0.6,
  blur = 0.47,
  morphSpeed = 0.1,
  style = {}
}: FluidAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointerRef = useRef<Pointer>(null);
  const [morphAmount, setMorphAmount] = useState(0);
  const [lastPressingT, setLastPressingT] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const actualSeed = seed || (new Date().getTime() % 100000);

    const pointer = new Pointer(canvas);
    pointerRef.current = pointer;

    const handlePressing = (e: Event) => {
      const nowInMs = Date.now();
      const dt = lastPressingT ? (nowInMs - lastPressingT) / 1000 : 0;
      setLastPressingT(nowInMs);
      setMorphAmount(prev => prev + dt * pointer.pressure * morphSpeed);
    };

    canvas.addEventListener('Pointer.pressing', handlePressing);

    const vertexShaderSource = `
      attribute vec2 position;
      void main () {
        gl_Position = vec4(position, 0, 1);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      #define SEED ${actualSeed}.579831

      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMorph;
      uniform vec2 uGrid;

      const int complexity = ${complexity};
      const float mouseSpeed = ${mouseSpeed};
      const float fixedOffset = ${fixedOffset};
      const float fluidSpeed = ${fluidSpeed};
      const float baseColor = ${baseColor};
      const float BLUR = ${blur};

      #define PI 3.14159

      float random(float x) {
        return fract(sin(x) * SEED);
      }
      float noise(float x) {
        float i = floor(x);
        float f = fract(x);
        return mix(random(i), random(i + 1.0), smoothstep(0.0, 1.0, f));
      }
      float noiseS(float x) {
        return noise(x) * 2.0 - 1.0;
      }

      void main() {
        vec2 p = (2.0 * gl_FragCoord.xy - uResolution) / min(uResolution.x, uResolution.y) * 0.7;
        float t = uTime * fluidSpeed + uMorph;
        float noiseTime = noise(t);
        float noiseSTime = noiseS(t);
        float noiseSTime1 = noiseS(t + 1.0);

        float blur = (BLUR + 0.14 * noiseSTime);
        for(int i=1; i <= complexity; i++) {
          p += blur / float(i) * sin(
              float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1))
            + fixedOffset;
        }
        for(int i=1; i <= complexity; i++) {
          p += blur / float(i) * cos(
              float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1))
            + fixedOffset;
        }
        p += uMouse * mouseSpeed;

        vec2 grid = uGrid * 2.0;
        gl_FragColor = vec4(
          baseColor * vec3(
            sin(grid * p + vec2(2.0 * noiseSTime, 3.0 * noiseSTime1)),
            sin(p.x + p.y + noiseSTime)
          )
          + baseColor,
          1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    const positionBuffer = gl.createBuffer();
    const positions = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1,  1,  1, -1
    ]);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'uResolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'uTime');
    const mouseUniformLocation = gl.getUniformLocation(program, 'uMouse');
    const morphUniformLocation = gl.getUniformLocation(program, 'uMorph');
    const gridUniformLocation = gl.getUniformLocation(program, 'uGrid');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let startTime = Date.now();
    let animationId: number;

    const render = () => {
      const currentTime = Date.now();
      const time = (currentTime - startTime) * 0.01;

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, time);
      gl.uniform2f(mouseUniformLocation, pointer.position.x, pointer.position.y);
      gl.uniform1f(morphUniformLocation, morphAmount);

      const ratio = 0.32;
      const gridX = canvas.height >= canvas.width ? 1 : canvas.width / canvas.height * ratio;
      const gridY = canvas.height >= canvas.width ? canvas.height / canvas.width * ratio : 1;
      gl.uniform2f(gridUniformLocation, gridX, gridY);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('Pointer.pressing', handlePressing);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [seed, complexity, mouseSpeed, fixedOffset, fluidSpeed, baseColor, blur, morphSpeed, lastPressingT]);

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor,
        overflow: 'hidden',
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}
