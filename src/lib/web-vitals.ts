export interface Metric {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
  navigationType?: string;
  entries?: PerformanceEntry[];
}

const thresholds = {
  LCP: { good: 2500, needsImprovement: 4000 },
  FID: { good: 100, needsImprovement: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 },
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

export function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (!onPerfEntry) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const metric: Metric = {
            name: 'LCP',
            value: (entry as PerformanceEntry & { renderTime?: number; loadTime?: number }).renderTime ||
                   (entry as PerformanceEntry & { renderTime?: number; loadTime?: number }).loadTime ||
                   entry.startTime,
            id: entry.startTime.toString(),
            entries: [entry],
          };
          metric.rating = getRating('LCP', metric.value);
          onPerfEntry(metric);
        }

        if (entry.entryType === 'first-input') {
          const metric: Metric = {
            name: 'FID',
            value: (entry as PerformanceEntry & { processingDuration?: number }).processingDuration || 0,
            id: entry.startTime.toString(),
            entries: [entry],
          };
          metric.rating = getRating('FID', metric.value);
          onPerfEntry(metric);
        }

        if (entry.entryType === 'layout-shift' && !(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          const metric: Metric = {
            name: 'CLS',
            value: (entry as PerformanceEntry & { value?: number }).value || 0,
            id: entry.startTime.toString(),
            entries: [entry],
          };
          metric.rating = getRating('CLS', metric.value);
          onPerfEntry(metric);
        }

        if (entry.entryType === 'paint') {
          const metric: Metric = {
            name: entry.name === 'first-paint' ? 'FCP' : 'FP',
            value: entry.startTime,
            id: entry.name,
            entries: [entry],
          };
          if (metric.name === 'FCP') {
            metric.rating = getRating('FCP', metric.value);
            onPerfEntry(metric);
          }
        }

        if (entry.entryType === 'navigation') {
          const navTiming = entry as PerformanceNavigationTiming;
          const ttfb = navTiming.responseStart - navTiming.requestStart;
          const metric: Metric = {
            name: 'TTFB',
            value: ttfb,
            rating: getRating('TTFB', ttfb),
            id: 'ttfb',
            entries: [entry],
          };
          onPerfEntry(metric);
        }
      }
    });

    observer.observe({
      entryTypes: [
        'largest-contentful-paint',
        'first-input',
        'layout-shift',
        'paint',
        'navigation',
      ],
    });
  } catch (e) {
    console.warn('Web Vitals monitoring not supported:', e);
  }
}

export function sendWebVitalsToAnalytics(metric: Metric) {
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'web_vitals',
      event_label: metric.id || metric.name,
      non_interaction: true,
    });
  }

  const payload = JSON.stringify(metric);
  navigator.sendBeacon('/api/metrics', payload);
}

declare global {
  interface Window {
    gtag?: (command: string, event: string, params: Record<string, unknown>) => void;
  }
}
