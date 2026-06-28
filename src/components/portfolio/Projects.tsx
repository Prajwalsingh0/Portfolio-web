import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  n: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  problem: string;
  approach: string;
  stack: string[];
  features: string[];
  outcome: string;
  links: { github?: string; live?: string };
  differently?: string;
};

const projects: Project[] = [
  {
    id: "01",
    n: "Case № 01",
    title: "3AM — Ephemeral Late-Night Social Network",
    client: "Personal project",
    year: "2026",
    tags: ["Real-time", "Node.js", "WebSockets"],
    problem:
      "Modern online spaces are heavily archived and indexed. Users lack a secure, anonymous late-night platform to share thoughts that vanish before the rest of the world wakes up.",
    approach:
      "Architected an ephemeral, real-time social application that opens strictly between 1:00 AM and 6:00 AM in the user's local timezone. Chose Socket.io over raw WebSockets for built-in reconnection handling and room management, accepting the minor bundle overhead as worthwhile at this scale.",
    stack: ["Node.js", "Express.js", "Socket.io", "JavaScript", "HTML/CSS"],
    features: [
      "Transient late-night chatrooms active from 1 AM to 6 AM",
      "Complete database wipe at 6 AM local time",
      "Stateless anonymous session identifiers (souls)",
      "Private real-time whisper threads (3 replies max)",
      "Heartbeat indicator and exit ritual animations",
    ],
    outcome:
      "Maintained sub-15ms WebSocket broadcast latency with 500 simulated concurrent connections. Automated cron cleanup reclaimed 100% of allocated memory nightly — zero memory-leak footprint across 72-hour continuous test runs.",
    links: { github: "https://github.com/Prajwalsingh0/3am" },
    differently:
      "To scale horizontally beyond a single Node instance, I would decouple state management by introducing Redis. Utilizing Redis TTL (Time-To-Live) on keys would replace the cron-based deletion logic, allowing data to expire natively and making the server completely stateless for containerized clustering.",
  },
  {
    id: "02",
    n: "Case № 02",
    title: "Voting-app — Secure Voting API",
    client: "Open source",
    year: "2025",
    tags: ["Backend", "Java", "Spring Boot"],
    problem:
      "Digital voting systems require extremely strict verification, robust transaction safety to prevent double-voting, and reliable user authentication.",
    approach:
      "Engineered a secure REST API using Spring Boot. Secured endpoints using Spring Security with JWT stateless authentication. Used H2 in-memory database for testing to keep CI fast and deterministic, with PostgreSQL as the intended production target.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "H2 Database"],
    features: [
      "Stateless JWT-based authentication & authorization",
      "Role-based endpoint security (Admin, Voter)",
      "Transaction-bounded ballot validation preventing duplicate submissions",
      "Detailed audit logging of all casting actions",
    ],
    outcome:
      "Achieved 100% test coverage for concurrency scenarios using JUnit and Mockito — simultaneous double-vote attempts from the same account were correctly intercepted and rejected in all test cases.",
    links: { github: "https://github.com/Prajwalsingh0/voting-app" },
    differently:
      "In a large-scale system, relational databases can become bottlenecks during peaks. I would introduce a message broker like Apache Kafka to ingest votes asynchronously. This would decouple ingestion from database updates, providing backpressure handling and scaling ingestion throughput by orders of magnitude.",
  },
  {
    id: "03",
    n: "Case № 03",
    title: "Job-Tracker — Applicant Pipeline Dashboard",
    client: "Personal project",
    year: "2025",
    tags: ["Frontend", "TypeScript", "React"],
    problem:
      "Tracking job applications, upcoming interviews, and feedback notes across multiple sites leads to critical deadline slip-ups.",
    approach:
      "Created a responsive Kanban-style pipeline tracking application in React and TypeScript. Managed application state with React hooks and persisted data to localStorage for session continuity without a backend dependency.",
    stack: ["TypeScript", "React.js", "Tailwind CSS", "Vite"],
    features: [
      "Kanban drag-and-drop pipeline interface",
      "Dynamic CRUD operations for job entities",
      "Deadlines & interview reminder dashboard",
      "Responsive design with glassmorphic card UI and smooth drag transition",
    ],
    outcome:
      "Achieved a 99% Google Lighthouse performance rating by eliminating redundant component updates using React memory hooks (useMemo, useCallback). Strict TypeScript configuration prevented runtime undefined value crashes, resulting in zero client-side crashes.",
    links: { github: "https://github.com/Prajwalsingh0/Job-Tracker" },
    differently:
      "Relying purely on localStorage limits multi-device synchronization. I would integrate a headless database (like Supabase or Firebase) with a service worker to cache user transactions offline, syncing data back to the server once the connection is restored.",
  },
  {
    id: "04",
    n: "Case № 04",
    title: "Alumni Connection Portal",
    client: "Academic project",
    year: "2025",
    tags: ["Web design", "HTML", "CSS"],
    problem:
      "College students and alumni had no custom, dedicated space to coordinate reunion events, search job postings, and network.",
    approach:
      "Designed a semantic, highly responsive web portal emphasizing grid/flexbox layouts and interactive transitions for maximum accessibility.",
    stack: ["HTML5", "CSS3", "JavaScript", "Vanilla Web APIs"],
    features: [
      "Semantic multi-page responsive document structure",
      "Interactive event booking & directory pages",
      "Client-side form processing and validation",
      "CSS grid templates and clean visual flow",
    ],
    outcome:
      "Passed 100% WCAG 2.1 accessibility color contrast and screen-reader standards. The fluid grid layout successfully accommodated viewport sizes from 320px to 2560px without layout breaking, achieving sub-200ms DOM interactive times.",
    links: { github: "https://github.com/Prajwalsingh0/Alumni-Website" },
    differently:
      "Instead of writing standard vanilla JS and HTML, I would migrate the portal to a Static Site Generator (SSG) framework like Next.js or Astro. Generating alumni directories as static pages at build time would improve loading speeds, reduce server requests, and boost SEO rankings.",
  },
];

const ProjectRow = ({ p, open, onToggle }: { p: Project; open: boolean; onToggle: () => void }) => {
  return (
    <article className="border-b border-border">
      <button
        onClick={onToggle}
        className="group grid w-full grid-cols-12 items-baseline gap-4 px-6 py-6 text-left transition-colors hover:bg-secondary/60 md:px-10"
      >
        <div className="col-span-2 md:col-span-1">
          <span className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {p.id}
          </span>
        </div>
        <div className="col-span-10 md:col-span-6">
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-4xl">
            <span className="text-signal">✦ </span>
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
        </div>
        <div className="col-span-6 hidden md:col-span-3 md:block">
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="border border-border px-2 py-0.5 font-mono-editorial text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-6 text-right md:col-span-2">
          <span className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {p.year}
          </span>
          <span
            className={`ml-3 inline-block h-6 w-6 border border-border text-center leading-6 transition-transform ${open ? "rotate-45 bg-foreground text-background" : ""}`}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-6 px-6 pb-10 md:px-10">
              <div className="col-span-12 md:col-span-1" />
              <div className="col-span-12 md:col-span-5">
                <div className="eyebrow mb-2">Problem</div>
                <p className="text-pretty text-base text-foreground/85">{p.problem}</p>

                <div className="eyebrow mb-2 mt-6">Approach</div>
                <p className="text-pretty text-base text-foreground/85">{p.approach}</p>

                <div className="mt-6 flex gap-3">
                  {p.links.live && (
                    <a href={p.links.live} className="bg-foreground px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background hover:bg-signal">
                      Live →
                    </a>
                  )}
                  {p.links.github && (
                    <a href={p.links.github} className="border border-border px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] hover:border-foreground">
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow mb-2">Key features</div>
                <ul className="space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 inline-block h-[1px] w-3 shrink-0 bg-signal" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="border border-foreground/20 px-2 py-1 font-mono-editorial text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="eyebrow mb-2 mt-6">Outcome</div>
                <p className="font-display text-xl leading-tight">{p.outcome}</p>
              </div>

              {p.differently && (
                <>
                  <div className="col-span-12 md:col-span-1" />
                  <div className="col-span-12 md:col-span-11 border-t border-border/40 pt-6 mt-2">
                    <div className="eyebrow mb-2">What I'd do differently</div>
                    <p className="text-pretty text-sm text-muted-foreground font-mono-editorial leading-relaxed">{p.differently}</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const Projects = () => {
  const [open, setOpen] = useState<string | null>("01");
  return (
    <section id="work" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border px-6 py-6 md:px-10">
          <div>
            <div className="eyebrow mb-2">Section 01 · Commissioned work</div>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              Case studies<span className="text-signal">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Four selected projects, read like features. Tap any entry to expand
            the full write-up.
          </p>
        </div>

        <div>
          {projects.map((p) => (
            <ProjectRow
              key={p.id}
              p={p}
              open={open === p.id}
              onToggle={() => setOpen(open === p.id ? null : p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
