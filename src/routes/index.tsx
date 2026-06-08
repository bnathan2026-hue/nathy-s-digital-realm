import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Code2, Smartphone, Palette, Bot, Cog, MessageSquare,
  Github, Instagram, Facebook, Youtube, ArrowRight, ExternalLink,
  Sparkles, Menu, X, Send,
} from "lucide-react";
import heroPortrait from "@/assets/nathy-hero.jpg";
import projJarvis from "@/assets/project-jarvis.jpg";
import projGenz from "@/assets/project-genz.jpg";
import projMechora from "@/assets/project-mechora.jpg";
import projWeb from "@/assets/project-web.jpg";
import projDesign from "@/assets/project-design.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathy — Baraka Chrisant Nathan | Developer & Entrepreneur" },
      { name: "description", content: "Portfolio of Baraka Chrisant Nathan (Nathy) — developer, entrepreneur, AI specialist building websites, apps & AI products from Tanzania." },
      { property: "og:title", content: "Nathy — Developer, Entrepreneur & AI Specialist" },
      { property: "og:description", content: "Building websites, mobile apps, AI solutions and digital experiences from Tanzania." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/255712089324";

const TITLES = ["Entrepreneur", "Developer", "Tech Specialist", "Graphic Designer", "Content Creator", "AI Specialist"];

const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "Modern websites, landing pages, and web applications." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform and Android applications." },
  { icon: Palette, title: "Graphic Design", desc: "Social media graphics, posters, branding, and marketing materials." },
  { icon: Bot, title: "AI Integration", desc: "AI assistants, AI-powered tools, and intelligent workflows." },
  { icon: Cog, title: "Business Automation", desc: "Automation systems that save time and improve efficiency." },
  { icon: MessageSquare, title: "Chatbot Development", desc: "Custom chatbots and automated customer support systems." },
];

const PROJECTS = [
  { name: "J.A.R.V.I.S", tag: "AI Assistant", img: projJarvis, desc: "AI-powered assistant built to automate tasks and improve productivity." },
  { name: "Gen Z GPT", tag: "AI Chatbot", img: projGenz, desc: "A modern AI chatbot experience designed for today's generation." },
  { name: "MECHORA", tag: "Mobile App", img: projMechora, desc: "A mobile application focused on practical solutions and user experience." },
  { name: "Web Development Projects", tag: "Web", img: projWeb, desc: "A collection of websites and web applications built for different purposes." },
  { name: "Graphic Design Portfolio", tag: "Design", img: projDesign, desc: "Creative posters, social media graphics, branding, and promotional content." },
];

const SKILLS = ["HTML","CSS","JavaScript","TypeScript","Ionic","Capacitor","Graphic Design","Canva","Photoshop","AI Tools","ChatGPT","Gemini","Automation","Problem Solving","Tech Support","Digital Product Development"];

const JOURNEY = [
  "Started exploring technology at a young age.",
  "Built my first websites.",
  "Learned graphic design.",
  "Started creating content online.",
  "Developed AI-powered projects.",
  "Built mobile applications.",
  "Continued learning and improving every year.",
];

const MISSION_FOCUS = ["AI Products","Mobile Applications","Content Creation","Business Automation","Client Projects","Entrepreneurship"];

const SOCIALS = [
  { name: "TikTok", url: "https://www.tiktok.com/@aurascope_nathy", icon: TikTokIcon },
  { name: "Instagram", url: "https://www.instagram.com/aurascope_nathy", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61589842194459", icon: Facebook },
  { name: "Threads", url: "https://www.threads.com/@aurascope_nathy", icon: ThreadsIcon },
  { name: "Rumble", url: "https://rumble.com/user/aurascope_nathy", icon: RumbleIcon },
  { name: "YouTube", url: "https://www.youtube.com/@AuraScope_Nathy", icon: Youtube },
  { name: "GitHub", url: "#", icon: Github },
];

const STATS = [
  { label: "Projects Shipped", value: 25 },
  { label: "Happy Clients", value: 40 },
  { label: "Years Building", value: 5 },
  { label: "AI Tools Built", value: 12 },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.34a8.16 8.16 0 0 0 4.77 1.52V6.41a4.85 4.85 0 0 1-1.84-.27z"/></svg>);
}
function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.757-.504-.586-1.282-.883-2.314-.89h-.029c-.831 0-1.959.227-2.679 1.301L7.32 6.926c.969-1.439 2.535-2.232 4.521-2.232h.043c3.355.025 5.354 2.04 5.55 5.554.111.046.222.097.331.151 1.55.732 2.687 1.836 3.288 3.193.83 1.881.85 4.95-1.488 7.252-1.776 1.726-3.92 2.494-6.85 2.494z"/></svg>);
}
function RumbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.6 11.2L4.4 1.3C3.2.6 1.7 1.4 1.7 2.8v18.4c0 1.4 1.5 2.2 2.7 1.5l17.2-9.2c1.2-.6 1.2-2.3 0-2.3z"/></svg>);
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("reveal"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now(); const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.floor(p * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}+</span>;
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const dur = 8 + Math.random() * 10;
        return (
          <span key={i} className="absolute rounded-full bg-primary/40 animate-float"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%`,
              animationDelay: `${delay}s`, animationDuration: `${dur}s`,
              boxShadow: "0 0 12px oklch(0.72 0.2 245 / 60%)" }} />
        );
      })}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"],
    ["Skills", "#skills"], ["Journey", "#journey"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-4 md:px-6 ${scrolled ? "" : ""}`}>
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold">N</div>
            <span className="font-semibold tracking-tight">Nathy</span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className="transition-colors hover:text-foreground">{l}</a></li>
            ))}
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_oklch(0.72_0.2_245/50%)] md:inline-flex">
            Hire Me
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {links.map(([l, h]) => (
                <li key={h}><a onClick={() => setOpen(false)} href={h} className="block py-1">{l}</a></li>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">Hire Me</a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TITLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="order-2 md:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Available for projects · Tanzania</span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Baraka <span className="text-gradient">Chrisant</span> Nathan
          </h1>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">AKA Nathy</p>
          <div className="mt-6 h-10 overflow-hidden md:h-12">
            <div key={idx} className="reveal text-2xl font-semibold md:text-3xl">
              <span className="text-gradient">{TITLES[idx]}</span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Building websites, mobile apps, AI solutions, automation systems, and digital experiences from Tanzania.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.72_0.2_245/60%)]">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-all hover:border-primary/40">
              Contact Me <Send className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-4">
                <div className="text-2xl font-bold text-gradient md:text-3xl"><Counter to={s.value} /></div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-purple-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] glass-card glow-border">
              <img src={heroPortrait} alt="Baraka Chrisant Nathan portrait" width={1024} height={1024}
                   className="h-auto w-full" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Currently building</div>
                  <div className="text-xs text-muted-foreground">AI products & client work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-6 opacity-0">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-primary" />{eyebrow}
          </div>
          <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 glass-card rounded-3xl p-8 text-lg leading-relaxed text-muted-foreground">
          I am <span className="text-foreground font-semibold">Baraka Chrisant Nathan</span>, also known as Nathy. I am passionate about technology, entrepreneurship, innovation, and creating practical digital solutions. My work spans web development, mobile applications, graphic design, AI integration, business automation, chatbots, and content creation. I enjoy turning ideas into real products that solve problems and create value.
        </div>
        <div className="glass-card rounded-3xl p-8">
          <div className="text-sm text-muted-foreground">Based in</div>
          <div className="mt-1 text-2xl font-bold">Tanzania 🇹🇿</div>
          <div className="mt-6 text-sm text-muted-foreground">Roles</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Founder","Developer","Designer","Creator"].map((r) => (
              <span key={r} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="Services">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="group glass-card glass-card-hover rounded-2xl p-6"
               style={{ animationDelay: `${i * 60}ms` }}>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 transition-transform group-hover:scale-110">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.name} className="group glass-card glass-card-hover overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768}
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs">{p.tag}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Tools">
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <span key={s} className="glass-card rounded-full px-5 py-2.5 text-sm transition-all hover:border-primary/50 hover:text-primary hover:-translate-y-0.5">
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="The path" title="My Journey">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2" />
        <ol className="space-y-8">
          {JOURNEY.map((step, i) => (
            <li key={i} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div]:col-start-2" : ""}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                <div className="glass-card rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-primary">Step 0{i + 1}</div>
                  <p className="mt-2 text-base">{step}</p>
                </div>
              </div>
              <span className="absolute left-4 top-5 -translate-x-1/2 md:left-1/2">
                <span className="block h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Mission() {
  return (
    <Section id="mission" eyebrow="Why I build" title="Current Mission">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="glass-card rounded-3xl p-8 md:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            My mission is to build impactful software products, help businesses grow through technology, create innovative AI solutions, grow a global audience, and become a recognized entrepreneur and technology leader.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">Current focus</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {MISSION_FOCUS.map((f) => (
              <div key={f} className="glass-card rounded-xl p-3 text-sm">{f}</div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function YouTubeSection() {
  return (
    <Section id="youtube" eyebrow="Watch" title="Latest Content">
      <div className="grid gap-6 lg:grid-cols-3">
        <a href="https://www.youtube.com/@AuraScope_Nathy" target="_blank" rel="noreferrer"
           className="glass-card glass-card-hover rounded-3xl p-8 lg:col-span-1">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-500/15 ring-1 ring-red-500/30">
            <Youtube className="h-7 w-7 text-red-400" />
          </div>
          <h3 className="mt-5 text-2xl font-bold">AuraScope Nathy</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tech, AI, and behind-the-scenes of building digital products.</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">Visit channel <ArrowRight className="h-4 w-4" /></span>
        </a>
        <div className="overflow-hidden rounded-3xl glass-card lg:col-span-2">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=AuraScope_Nathy"
              title="Latest videos from AuraScope Nathy"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Socials() {
  return (
    <Section id="socials" eyebrow="Follow along" title="Find Me Online">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {SOCIALS.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
             className="group glass-card glass-card-hover flex flex-col items-center gap-3 rounded-2xl p-6 text-center">
            <s.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium">{s.name}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Something Amazing">
      <div className="glass-card relative overflow-hidden rounded-3xl p-10 md:p-16 text-center">
        <div className="absolute -top-32 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Interested in working together, discussing a project, or just saying hello? Reach out through WhatsApp.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"
           className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.2_245/45%)] transition-transform hover:scale-105">
          <MessageSquare className="h-5 w-5" />
          Message Me on WhatsApp
        </a>
        <div className="mt-4 text-sm text-muted-foreground">+255 712 089 324</div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <div className="text-lg font-semibold">Baraka Chrisant Nathan <span className="text-muted-foreground">(Nathy)</span></div>
        <div className="mt-1 text-sm text-muted-foreground">Developer · Entrepreneur · Tech Specialist · AI Specialist</div>
        <div className="mt-4 text-xs text-muted-foreground">© 2026 All Rights Reserved.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Particles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Journey />
        <Mission />
        <YouTubeSection />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
