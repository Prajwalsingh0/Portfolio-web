const entries = [
  {
    year: "2026",
    tag: "NOW",
    title: "Graduated & entered industry",
    place: "Bengaluru",
    body: "B.Tech CSE complete. Software Development Trainee at KodNest Technologies, Bengaluru. Actively seeking full-time backend or full-stack roles.",
    accent: true,
  },
  {
    year: "2025",
    tag: "FINAL YEAR",
    title: "Final year & shipped production systems",
    place: "University",
    body: "Final year of B.Tech CSE. Shipped 3AM, Voting API, and Job-Tracker — real-time architecture, Spring Security, full CI/CD, and end-to-end test coverage.",
  },
  {
    year: "2024",
    tag: "ACADEMIC",
    title: "Core CS deepening",
    place: "University",
    body: "Third year focus on software engineering, data systems, and database design. First exposure to multi-tier architecture and SQL schema design.",
  },
  {
    year: "2023",
    tag: "ACADEMIC",
    title: "Core CS foundations in practice",
    place: "University",
    body: "Applied networking, database design, and Java systems through academic projects. Started thinking in systems, not just syntax.",
  },
  {
    year: "2022",
    tag: "START",
    title: "Started programming journey",
    place: "Self-taught/University",
    body: "DSA + core CS foundations. First programs in Java and C++. Began understanding how software systems actually work.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid-editorial mb-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-2">Section 03 · Chronology</div>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              A running <span className="italic">footer</span>
              <span className="text-signal">.</span>
            </h2>
          </div>
          <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <a
              href="/prajwal_singh_resume.pdf"
              download="Prajwal_Singh_Resume.pdf"
              className="bg-foreground px-4 py-2.5 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background hover:bg-signal"
            >
              Download Résumé ↓
            </a>
            <span className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              PDF · 180kb
            </span>
          </div>
        </div>

        <ol className="relative">
          {entries.map((e, i) => (
            <li
              key={i}
              className="group grid grid-cols-12 gap-4 border-t border-border py-8 transition-colors hover:bg-background"
            >
              <div className="col-span-3 md:col-span-2">
                <div className="font-display text-4xl leading-none md:text-5xl">
                  {e.year}
                </div>
                <div className={`mt-2 inline-block border px-2 py-0.5 font-mono-editorial text-[10px] uppercase tracking-[0.14em] ${e.accent ? "border-signal bg-signal text-accent-foreground" : "border-border text-muted-foreground"}`}>
                  {e.tag}
                </div>
              </div>
              <div className="col-span-9 md:col-span-7">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-2 max-w-prose text-sm text-muted-foreground">
                  {e.body}
                </p>
              </div>
              <div className="col-span-12 flex items-start justify-end text-right md:col-span-3">
                <span className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {e.place}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
