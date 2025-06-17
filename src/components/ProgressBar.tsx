import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  duration?: number;
  className?: string;
}

export default function ProgressBar({ progress, duration = 1000, className }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);

    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className={`bg-sand overflow-hidden ${className || ''}`}>
      <div
        className="bg-[#8884d8] h-full transition-all"
        style={{
          width: `${animatedProgress}%`,
          transitionDuration: `${duration}ms`,
        }}
      />
    </div>
  );
}
