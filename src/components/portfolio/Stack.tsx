const groups = [
  {
    n: "A",
    title: "Languages",
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    n: "B",
    title: "Backend Development",
    items: ["Spring Boot", "Spring Security", "JUnit", "JDBC", "REST APIs", "Node.js", "Express.js", "Socket.io"],
  },
  {
    n: "C",
    title: "Database & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB Atlas", "Mongoose ", "Git / GitHub", "CI/CD", "Railway/Render/Vercel"],
  },
  {
    n: "D",
    title: "CS Foundations",
    items: ["DSA", "Systems design", "OOP", "DBMS", "Computer Networks", "Web Security (JWT)"],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid-editorial mb-10 items-end">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-2">Section 02 · Instruments</div>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              The <span className="italic text-muted-foreground">toolkit</span>
              <span className="text-signal">.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm text-muted-foreground md:col-span-6 md:justify-self-end">
            Pragmatic stack. Chosen for legibility, longevity, and the ability
            to ship without apologizing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative bg-background p-6 transition-colors hover:bg-secondary/50 md:p-8"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <span className="font-display text-5xl text-muted-foreground/50 transition-colors group-hover:text-signal">
                  {g.n}
                </span>
                <span className="eyebrow">{g.title}</span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center justify-between border-b border-border/60 pb-2 text-sm"
                  >
                    <span>{it}</span>
                    <span className="font-mono-editorial text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      ●
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
