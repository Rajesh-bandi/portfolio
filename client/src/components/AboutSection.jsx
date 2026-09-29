import { about, certifications, identity } from "@/content/profile";
import Reveal from "@/components/Reveal";
import { useInViewOnce } from "@/hooks/useScrollProgress";

// Timeline: the vertical line draws downward and entries slide in, staggered,
// the first time the block enters the viewport.
const TimelineDraw = ({ entries }) => {
  const { ref, inView } = useInViewOnce("0px 0px -10% 0px");

  return (
    <div ref={ref} className={`timeline-draw ${inView ? "is-inview" : ""}`}>
      <p className="eyebrow">Timeline</p>
      <div className="relative mt-6">
        <span className="timeline-line absolute left-[5px] top-3 h-[calc(100%-2rem)] w-px bg-edge" />
        {entries.map((entry) => (
          <div key={entry.title} className="timeline-entry relative pb-10 pl-8 last:pb-0">
            <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-edge-strong bg-background" />
            <p className="font-mono text-xs text-faint">{entry.period}</p>
            <p className="mt-1.5 font-medium">{entry.title}</p>
            <p className="mt-1 text-sm text-dim">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Photo with hover scale + shine sweep. The photo's alpha-faded bottom edge
// already blends it into the page.
const PhotoFrame = () => {
  return (
    <figure>
      <div className="photo-frame">
        <img
          src={identity.portraitCutout}
          alt={identity.name}
          className="w-full"
          style={{
            filter: "var(--photo-filter)",
            maskImage: "linear-gradient(to bottom, black 78%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent)",
          }}
        />
      </div>
      <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        {identity.name} — {identity.location}
      </figcaption>
    </figure>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-block border-t border-edge">
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Left: narrative */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">01 — About</p>
              <h2 className="mt-6 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                {about.title}
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-dim">
                {about.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Certifications — featured first */}
            <Reveal delay={120}>
              <div className="mt-10 max-w-xl">
                <p className="eyebrow">Certifications — Escbash Labs</p>
                <div className="mt-5 divide-y divide-edge border border-edge">
                  {certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lift group flex items-baseline justify-between gap-4 bg-background px-5 py-4 transition-colors hover:bg-raised"
                    >
                      <div>
                        <p className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                          {cert.name}
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                          {cert.issuer} · {cert.issued}
                          {cert.credentialId ? ` · ${cert.credentialId}` : ""}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-ink">
                        verify ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10">
                <p className="eyebrow">What I work with</p>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {about.strengths.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 text-sm text-dim">
                      <span className="mt-1.5 h-px w-4 flex-shrink-0 bg-edge-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: photo + timeline */}
          <div className="lg:col-span-2">
            <Reveal className="mb-14 mt-2 max-w-sm">
              <PhotoFrame />
            </Reveal>

            <TimelineDraw entries={about.timeline} />
          </div>
        </div>
      </div>
    </section>
  );
};
