import { useState } from "react";
import { skills, skillCategories } from "@/content/profile";
import Reveal from "@/components/Reveal";
import { useInViewOnce } from "@/hooks/useScrollProgress";

// Only the icons referenced by content/profile.js — keeps the bundle lean.
const icons = import.meta.glob("@/assets/icons/*.{png,jpg}", { eager: true, query: "?url", import: "default" });
const iconFor = (name) => icons[`/src/assets/icons/${name}.png`];

const SkillTile = ({ skill, categoryLabel }) => {
  // Level bar fills from 0 when the tile first enters the viewport.
  const { ref, inView } = useInViewOnce();

  return (
    <div ref={ref} className="lift group bg-background p-5">
      <div className="flex items-center justify-between">
        <img
          src={iconFor(skill.icon)}
          alt=""
          className="h-7 w-7 object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
          loading="lazy"
        />
        <span className="font-mono text-xs text-faint">{skill.level}</span>
      </div>
      <div className="mt-4 text-sm font-medium">{skill.name}</div>
      {/* Level line — fills on first view */}
      <div className="mt-3 h-px w-full bg-edge">
        <div
          className="h-px bg-dim transition-all duration-1000 ease-out"
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        />
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-faint">{categoryLabel}</p>
    </div>
  );
};

export const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? skills : skills.filter((s) => s.category === active);
  // Pad the hairline grid so partial last rows close cleanly.
  const pads = visible.length % 4 === 0 ? 0 : 4 - (visible.length % 4);

  return (
    <section id="skills" className="section-block border-t border-edge">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">02 — Skills</p>
          <h2 className="mt-6 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I reach for, honestly rated.
          </h2>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-md border px-4 py-2 font-mono text-xs tracking-wide transition-all hover:-translate-y-px ${
                  active === cat.id
                    ? "border-ink bg-ink text-background"
                    : "border-edge text-dim hover:border-edge-strong hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skill tiles */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-edge bg-edge sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((skill) => (
            <SkillTile
              key={`${active}-${skill.name}`}
              skill={skill}
              categoryLabel={skillCategories.find((c) => c.id === skill.category)?.label}
            />
          ))}
          {Array.from({ length: pads }).map((_, i) => (
            <div key={`pad-${i}`} className="bg-background" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
};
