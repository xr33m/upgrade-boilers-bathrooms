interface GasSafeInlineProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

export default function GasSafeInline({ className = '', size = 'sm' }: GasSafeInlineProps) {
  const sizeClasses = {
    xs: 'h-4',
    sm: 'h-5',
    md: 'h-6'
  };

  return (
    <img
      src="/gas-safe.webp"
      alt="Gas Safe Registered"
      className={`inline-block ${sizeClasses[size]} w-auto ${className}`}
    />
  );
}

export function GasSafeText({ children, className = '', size = 'sm' }: { children?: React.ReactNode; className?: string; size?: 'xs' | 'sm' | 'md' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <GasSafeInline size={size} />
      {children || 'Gas Safe registered'}
    </span>
  );
}
