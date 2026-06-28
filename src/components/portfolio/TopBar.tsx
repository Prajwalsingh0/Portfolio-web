import { useEffect, useState } from "react";

const nav = [
  { label: "Index", href: "#top", n: "00" },
  { label: "Work", href: "#work", n: "01" },
  { label: "Stack", href: "#stack", n: "02" },
  { label: "Timeline", href: "#timeline", n: "03" },
  { label: "Commission", href: "#commission", n: "04" },
];

const TopBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", { 
          hour: "2-digit", 
          minute: "2-digit", 
          timeZone: "Asia/Kolkata" 
        }) + " · Bhopal, India",
      );
    };
    tick();
    const i = setInterval(tick, 30_000);
    return () => clearInterval(i);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg leading-none">Index</span>
          <span className="eyebrow hidden sm:inline">№ 001 · CSE · Portfolio</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-signal">{item.n}</span>
              <span className="mx-1.5 opacity-40">/</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            {time}
          </span>
          <a
            href="#commission"
            className="group relative inline-flex items-center gap-2 bg-foreground px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-signal"
          >
            <span className="h-1.5 w-1.5 animate-pulse bg-signal group-hover:bg-background" />
            Available
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
