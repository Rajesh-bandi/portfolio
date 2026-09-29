import { useEffect, useState } from "react";

const DURATION_MS = 1400;

export default function WelcomeScreen({ onWelcomeComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), DURATION_MS);
    const doneTimer = setTimeout(onWelcomeComplete, DURATION_MS + 450);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onWelcomeComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      style={{
        opacity: exiting ? 0 : 1,
        visibility: exiting ? "hidden" : "visible",
        transition: "opacity 0.45s ease",
      }}
    >
      <div className="animate-fade-up text-center">
        <div className="text-2xl sm:text-3xl font-semibold tracking-tight">Rajesh Bandi</div>
        <p className="mt-2 font-mono text-xs text-faint">backend · cloud · 2027</p>
        <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-edge">
          <div
            className="h-full w-full origin-left bg-dim"
            style={{
              animation: `loader-bar 1.4s cubic-bezier(0.22, 1, 0.36, 1) both`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
