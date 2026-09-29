import { useEffect, useRef, useState } from "react";
import { identity, heroFacts, heroTerminal } from "@/content/profile";
import CountUp from "@/components/CountUp";

// Letter-by-letter name reveal with a blinking caret at the end.
const NameReveal = ({ name }) => (
  <h1
    className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
    aria-label={name}
  >
    {[...name].map((ch, i) => (
      <span
        key={i}
        className="letter"
        aria-hidden="true"
        style={{ animationDelay: `${0.25 + i * 0.04}s` }}
      >
        {ch === " " ? "\u00A0" : ch}
      </span>
    ))}
    <span className="hero-caret" aria-hidden="true" />
  </h1>
);

// Numeric facts count up on first paint; non-numeric stay static.
const FactValue = ({ value }) => {
  const m = value.match(/^(\d+(?:\.\d+)?)(\+?)$/);
  if (!m) return <>{value}</>;
  return (
    <CountUp
      to={parseFloat(m[1])}
      decimals={m[1].includes(".") ? 1 : 0}
      suffix={m[2]}
    />
  );
};

// One command: types character-by-character, then drops its output lines in.
// `done` freezes it fully rendered. onDone fires only after the last output.
const TerminalCommand = ({ cmd, outs, done, lineDelay, onDone }) => {
  const [typed, setTyped] = useState(done ? cmd : "");
  const [shown, setShown] = useState(done ? outs.length : 0);
  const timer = useRef(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  // Typing phase.
  useEffect(() => {
    if (done) return;
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(cmd.slice(0, i));
      if (i < cmd.length) timer.current = setTimeout(tick, 34);
    };
    timer.current = setTimeout(tick, 280);
    return () => clearTimeout(timer.current);
  }, [cmd, done]);

  // Output phase — starts once typing completes; ends by reporting done.
  useEffect(() => {
    if (done || typed !== cmd) return;
    if (outs.length === 0) {
      timer.current = setTimeout(() => onDoneRef.current(), 240);
      return () => clearTimeout(timer.current);
    }
    let n = 0;
    const step = () => {
      n += 1;
      setShown(n);
      if (n < outs.length) {
        timer.current = setTimeout(step, lineDelay);
      } else {
        timer.current = setTimeout(() => onDoneRef.current(), 480);
      }
    };
    timer.current = setTimeout(step, lineDelay);
    return () => clearTimeout(timer.current);
  }, [done, typed, cmd, outs.length, lineDelay]);

  return (
    <>
      <div className="term-line">
        <span className="term-prompt">~$</span>
        <span className="term-cmd">
          {typed}
          {!done && typed !== cmd && <span className="term-caret" />}
        </span>
      </div>
      {outs.slice(0, shown).map((line, i) => (
        <div
          key={i}
          className={`term-line term-out ${line.kind === "ok" ? "term-ok" : ""}`}
        >
          {line.text}
        </div>
      ))}
    </>
  );
};

// Group the flat log into [{cmd, outs}] pairs — outputs belong to the
// command above them.
const groupCommands = (lines) => {
  const entries = [];
  let cur = null;
  for (const line of lines) {
    if (line.kind === "cmd") {
      cur = { cmd: line.text, outs: [] };
      entries.push(cur);
    } else if (cur) {
      cur.outs.push(line);
    }
  }
  return entries;
};

// Desktop-only terminal card. Plays the deploy log once, holds, replays.
// Reduced motion: render the finished log statically, no timers.
const HeroTerminal = () => {
  const entries = groupCommands(heroTerminal.lines);
  const [idx, setIdx] = useState(0);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (idx < entries.length) return;
    const t = setTimeout(() => {
      setIdx(0);
      setLoop((v) => v + 1);
    }, 4200);
    return () => clearTimeout(t);
  }, [idx, entries.length]);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Entries before idx render complete; the entry at idx is live.
  let budget = reduced ? entries.length : idx;
  const rendered = [];
  for (const entry of entries) {
    if (budget > 0) {
      rendered.push({ ...entry, done: true });
      budget -= 1;
    } else {
      rendered.push({ ...entry, done: false });
      break;
    }
  }

  return (
    <div key={loop} className="term-window animate-fade-up" aria-hidden="true">
      <div className="term-titlebar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title font-mono">{heroTerminal.title}</span>
      </div>
      <div className="term-body">
        {rendered.map((entry, i) => (
          <TerminalCommand
            key={`${loop}-${i}`}
            cmd={entry.cmd}
            outs={entry.outs}
            done={entry.done}
            lineDelay={340}
            onDone={() => setIdx((v) => v + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="section-shell relative z-10 grid w-full items-center gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)]">
        {/* Left — identity, facts, actions */}
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <img
              src={identity.avatar}
              alt=""
              className="h-10 w-10 rounded-full border border-edge-strong object-cover"
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.08s" }}>
            <NameReveal name={identity.name} />
          </div>

          <p
            className="animate-fade-up mt-3 text-xl text-dim sm:text-2xl"
            style={{ animationDelay: "0.16s" }}
          >
            {identity.role}
          </p>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
            style={{ animationDelay: "0.24s" }}
          >
            {identity.tagline}
          </p>

          {/* Fact grid — hairline dividers, mono labels, no icons */}
          <div
            className="animate-fade-up mt-12 grid max-w-xl grid-cols-2 gap-px border border-edge bg-edge sm:grid-cols-4"
            style={{ animationDelay: "0.32s" }}
          >
            {heroFacts.map((fact) => (
              <div key={fact.label} className="lift bg-background px-4 py-4">
                <div className="text-lg font-semibold tracking-tight">
                  <FactValue value={fact.value} />
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              View work
            </a>
            <a
              href={identity.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-edge-strong px-6 py-3 text-sm font-medium text-dim transition-colors hover:border-dim hover:text-ink"
            >
              Resume
            </a>
            {identity.available && (
              <span className="inline-flex items-center gap-2 font-mono text-xs text-faint">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                open to internships
              </span>
            )}
          </div>
        </div>

        {/* Right — live deploy terminal (desktop only) */}
        <div className="hidden lg:block">
          <HeroTerminal />
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            scroll
          </span>
          <span className="block h-8 w-px animate-pulse-dot bg-edge-strong" />
        </div>
      </div>
    </section>
  );
};
