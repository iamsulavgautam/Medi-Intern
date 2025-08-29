import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
}


const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 1500, suffix = "", className = "" }) => {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let observer: IntersectionObserver;
    let raf: number;

    const animate = () => {
      const step = (timestamp: number) => {
        if (!startTimestamp.current) startTimestamp.current = timestamp;
        const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
        const value = Math.floor(from + (to - from) * progress);
        setCount(value);
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      raf = requestAnimationFrame(step);
    };

    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(spanRef.current);

    return () => {
      observer && observer.disconnect();
      raf && cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, duration]);

  return (
    <span className={className} ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
