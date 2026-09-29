import { useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/useScrollProgress";

// Animates a number from 0 to `to` the first time it scrolls into view.
export default function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1400 }) {
  const { ref, inView } = useInViewOnce();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(to * (1 - Math.pow(1 - p, 3))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}
