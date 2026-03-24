interface GasSafeBadgeProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export default function GasSafeBadge({ size = 'medium', showText = true }: GasSafeBadgeProps) {
  const heightClasses = {
    small: 'h-16',
    medium: 'h-24',
    large: 'h-32'
  };

  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src="/gassafe-logo.webp"
        alt="Gas Safe Registered"
        className={`${heightClasses[size]} w-auto`}
      />
      {showText && (
        <div className={`text-center ${textSizes[size]}`}>
          <p className="font-bold text-slate-900">Gas Safe</p>
          <p className="text-slate-600">Registered</p>
        </div>
      )}
    </div>
  );
}
