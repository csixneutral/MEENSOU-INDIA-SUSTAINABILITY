"use client";

import { useEffect, useRef, useState } from "react";

function format(value: number, decimals = 0) {
  if (decimals > 0) return value.toFixed(decimals);
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

export function CountUp({
  end,
  suffix = "",
  decimals = 0,
  label,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const full = `${decimals ? end.toFixed(decimals) : new Intl.NumberFormat("en-IN").format(end)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      <span className="sr-only">
        {full} {label}
      </span>
      <span aria-hidden="true">
        {format(value, decimals)}
        {suffix}
      </span>
    </span>
  );
}
