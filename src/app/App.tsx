import { useRef } from "react";
import { Twitter, Mail, Instagram, Facebook, ArrowUpRight, ChevronDown, Linkedin, Phone, ExternalLink, Globe } from "lucide-react";

const LIME = "#D4FF4F";
const profileImg = "/images/W4.jpg";

const projects = [
  {
    id: 1,
    title: "BNPL App",
    desc: "Designed user flows, wireframes & prototypes for seamless payment experiences.",
    tag: "FinTech",
    type: "featured",
    highlights: ["User Flows", "Wireframing", "Prototyping"],
    image: "/images/FlexPay.png",
    stat: "150K+",
    statSub: "Transactions",
  },
  {
    id: 2,
    title: "Cleaning Services Website",
    desc: "Minimalistic, visually clean design with prominent calls to action for booking services.",
    tag: "Web Design",
    type: "featured",
    highlights: ["Responsive Design", "CTA Optimization", "Visual Hierarchy"],
    image: "/images/Cleaning Website.png",
    stat: "↑ 45%",
    statSub: "User Engagement",
  },
  {
    id: 3,
    title: "Optimise Solution Co.",
    desc: "Modern corporate website balancing brand identity with intuitive navigation for enterprise clients.",
    tag: "Corporate",
    type: "featured",
    highlights: ["Brand Design", "UX Research", "Development"],
    image: "/images/Software Company.png",
    stat: "8.5★",
    statSub: "Client Rating",
  },
  {
    id: 4,
    title: "Japan Visa Website",
    desc: "Japan-themed design applying UX best practices for culturally relevant and engaging aesthetics.",
    tag: "Travel",
    type: "featured",
    highlights: ["Cultural Design", "Localization", "User Testing"],
    image: "/images/Visa Company.png",
    stat: "4.9★",
    statSub: "User Satisfaction",
  },
  {
    id: 5,
    title: "Uniq Washroom Studio",
    desc: "User-friendly design with clear visual hierarchy to highlight portfolio and premium services.",
    tag: "Studio",
    type: "featured",
    highlights: ["Portfolio Design", "Brand Identity", "UI Components"],
    image: "/images/Bathroom Studio Website.png",
    stat: "12K+",
    statSub: "Monthly Visits",
  },
  {
    id: 6,
    title: "Travel Website",
    desc: "Engaging travel platform UI with intuitive booking flows and inspiring destination galleries.",
    tag: "Travel",
    type: "featured",
    highlights: ["Booking System", "Gallery Display", "User Experience"],
    image: "/images/Travel Website.png",
    stat: "↑ 35%",
    statSub: "Booking Rate",
  },
  {
    id: 7,
    title: "Restaurant Website",
    desc: "Mobile-responsive interfaces optimizing user journeys for menu browsing and reservations.",
    tag: "F&B",
    type: "featured",
    highlights: ["Mobile First", "Reservations", "Menu Design"],
    image: "/images/Resturent.png",
    stat: "200+",
    statSub: "Daily Bookings",
  },
  {
    id: 8,
    title: "Minimal Artist Gallery",
    desc: "Clean, minimalistic interface showcasing artwork with elegant simplicity and visual focus.",
    tag: "Gallery",
    type: "featured",
    highlights: ["Minimalist Design", "Gallery Layout", "Typography"],
    image: "/images/Artist Portfolio.png",
    stat: "10K+",
    statSub: "Monthly Visitors",
  },
  {
    id: 9,
    title: "Budget Management App",
    desc: "User-centred wireframes emphasising intuitive data presentation and expense tracking features.",
    tag: "Finance",
    type: "featured",
    highlights: ["Data Visualization", "Analytics", "User Research"],
    image: "/images/Budget Management App.png",
    stat: "5★",
    statSub: "App Rating",
  },
  {
    id: 10,
    title: "Microfinance Application",
    desc: "Responsive UI and interactive prototypes simplifying loan application workflows for users.",
    tag: "FinTech",
    type: "featured",
    highlights: ["Loan Application", "Form Design", "Accessibility"],
    image: "/src/assets/images/Microfinance.png",
    stat: "↑ 98%",
    statSub: "Accessibility Score",
  },
];

/* ─── Decorative top-right concentric arcs ─── */
function GeometricDecor() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute top-0 right-0 pointer-events-none" style={{ opacity: 0.55 }}>
      {[28, 44, 60, 76, 92, 108, 124, 140, 156, 172].map((r, i) => (
        <circle key={i} cx="200" cy="0" r={r} stroke="#B8932A" strokeWidth="0.6" fill="none" />
      ))}
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 15) * (Math.PI / 2);
        return (
          <line key={i} x1="200" y1="0"
            x2={200 - 175 * Math.cos(angle)}
            y2={175 * Math.sin(angle)}
            stroke="#B8932A" strokeWidth="0.4" opacity="0.7"
          />
        );
      })}
    </svg>
  );
}

function StarIcon({ size = 12, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 9H20.5L15 13.3L17 20L12 16L7 20L9 13.3L3.5 9H10.5L12 2Z" />
    </svg>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project }: { project: typeof projects[0] }) {
  if (project.type === "featured") {
    return (
      <div className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl" style={{ background: "#161616", display: "flex", flexDirection: "column" }}>
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-900 to-black">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)" }} />
          <span className="absolute top-3 left-3" style={{ background: LIME, color: "#111", fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{project.tag}</span>
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-white" style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2, marginBottom: 8 }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.5, marginBottom: 10, flex: 1 }}>
            {project.desc}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights?.map((highlight) => (
              <div key={highlight} className="flex items-center gap-1.5">
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: LIME }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, fontWeight: 500 }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (project.type === "white") {
    return (
      <div className="rounded-2xl flex flex-col items-center justify-center p-4 text-center gap-2" style={{ background: "#ffffff", minHeight: 110 }}>
        <div style={{ fontSize: 24 }}>{project.emoji}</div>
        <p className="text-black" style={{ fontWeight: 700, fontSize: 12, lineHeight: 1.4 }}>{project.title}</p>
        <p className="text-black" style={{ fontSize: 10, lineHeight: 1.5, opacity: 0.55 }}>{project.desc}</p>
        <span style={{ background: "#f3f4f6", color: "#555", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>{project.tag}</span>
      </div>
    );
  }
  if (project.type === "lime") {
    return (
      <div className="rounded-2xl p-3 flex flex-col justify-between" style={{ background: LIME, minHeight: 110 }}>
        <div>
          <span style={{ background: "rgba(0,0,0,0.1)", color: "#111", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>{project.tag}</span>
          <p className="text-black mt-2" style={{ fontWeight: 700, fontSize: 12, lineHeight: 1.4 }}>{project.title}</p>
        </div>
        <div>
          <p className="text-black" style={{ fontSize: 10, lineHeight: 1.4, opacity: 0.6 }}>{project.desc}</p>
        </div>
      </div>
    );
  }
  if (project.type === "mockup") {
    return (
      <div className="rounded-2xl p-3 relative overflow-hidden" style={{ background: LIME, minHeight: 140 }}>
        <div className="absolute rounded-xl shadow-md px-3 py-2"
          style={{ background: "#fff", top: 10, left: 14, transform: "rotate(-7deg)", width: 120, zIndex: 1, fontSize: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 8, color: "#666", marginBottom: 2 }}>{project.tag} ▸</div>
          <div style={{ fontWeight: 800, fontSize: 10, color: "#111" }}>{project.title}</div>
        </div>
        <div className="absolute rounded-xl shadow-lg px-3 py-2"
          style={{ background: "#fff", bottom: 10, right: 8, width: 140, zIndex: 2, fontSize: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 8, color: "#555", marginBottom: 3 }}>Project Highlights</div>
          {["UX Research", "Wireframing", "Prototyping", "User Testing"].map((item) => (
            <div key={item} className="flex items-center gap-1" style={{ marginBottom: 2 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: 8, color: "#444" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // dark
  return (
    <div className="rounded-2xl p-4 flex items-center gap-3" style={{ background: "#1c1c1c", minHeight: 140 }}>
      <div className="flex-1">
        <div className="mt-1" style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 600 }}>{project.title}</div>
        <div className="mt-1" style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, lineHeight: 1.4 }}>{project.desc}</div>
      </div>
      <div className="flex-shrink-0 rounded-xl overflow-hidden border flex flex-col" style={{ width: 56, height: 92, borderColor: "#333", background: "#111" }}>
        <div className="flex justify-center pt-1.5 pb-1" style={{ background: "#111" }}>
          <div className="w-5 h-0.5 rounded-full" style={{ background: "#333" }} />
        </div>
        <div className="flex-1 flex flex-col px-1 pb-1">
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 5, marginBottom: 1 }}>{project.tag}</div>
          <div style={{ color: LIME, fontSize: 7, fontWeight: 700 }}>UI/UX</div>
          <svg width="48" height="28" viewBox="0 0 120 45" className="mt-1">
            <path d={chartPath} fill="none" stroke={LIME} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Label ─── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.9)", marginBottom: 5, letterSpacing: "0.03em" }}>
      {children}
    </p>
  );
}

/* ─── Main App ─── */
export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex items-center justify-center px-3 py-3" style={{ background: "#0a0a0a", fontFamily: "'Inter', sans-serif", maxHeight: '100vh', overflow: 'hidden' }}>
      <div className="w-full" style={{ maxWidth: 1200, maxHeight: 'calc(100vh - 24px)', overflowY: 'auto' }}>

        {/* ── Header ── */}
        <header className="relative flex items-center justify-center py-4 overflow-hidden" style={{ marginBottom: 12 }}>
          <GeometricDecor />
          <div className="flex items-center gap-4 relative z-10">
            <div style={{ height: 1, width: 80, background: "rgba(255,255,255,0.25)" }} />
            <h1 className="text-white" style={{ fontSize: 26, fontWeight: 600, letterSpacing: "0.04em" }}>
              Lakyangani Samindani
            </h1>
            <div style={{ height: 1, width: 80, background: "rgba(255,255,255,0.25)" }} />
          </div>
          {/* Contact strip */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-5 pb-1">
            {[
              { icon: Mail, text: "lakyanganisamindani291@gmail.com", href: "mailto:lakyanganisamindani291@gmail.com" },
              { icon: Phone, text: "+94741559291", href: "tel:+94741559291" },
              { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/lakyangani-samindani-323933267", external: true },
              { icon: Globe, text: "Behance", href: "https://www.behance.net/samindi291", external: true },
            ].map(({ icon: Icon, text, href, external }) => (
              <a key={text} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
                <Icon size={11} />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </header>

        {/* ── Main Content ── */}
        <div className="flex gap-4 items-start">

          {/* ── LEFT PANEL ── */}
          <div className="flex-shrink-0 flex flex-col gap-3" style={{ width: 262 }}>

            {/* Profile photo */}
            <div className="rounded-2xl overflow-hidden relative" style={{ background: "#111", height: 160 }}>
              <img src={profileImg} alt="Lakyangani Samindani" className="w-full h-full object-cover object-center" style={{ filter: "brightness(0.95)" }} />
            </div>

            {/* Hello card */}
            <div className="rounded-2xl px-4 py-3" style={{ background: LIME }}>
              <p className="text-black" style={{ fontSize: 17, lineHeight: 1.3 }}>
                Hello, I'm <span style={{ fontWeight: 800 }}>Lakyangani</span> 👋
              </p>
              <p className="text-black mt-1.5" style={{ fontSize: 11, lineHeight: 1.5, opacity: 0.7 }}>
                UI/UX Designer with a BSc (Hons) in Computing Science. I design intuitive, research-backed digital products from early wireframes to polished, dev-ready prototypes in Figma.
              </p>
            </div>

            {/* Scrollable info */}
            <div
              className="flex flex-col gap-4 px-1"
              style={{ overflowY: "auto", maxHeight: 360, scrollbarWidth: "none" }}
            >
              {/* Education */}
              <div>
                <Label>Education</Label>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>BSc (Hons) in Computer Science</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, lineHeight: 1.5 }}>
                  Informatics Institute of Technology (IIT),<br />affiliated with University of Westminster
                </p>
                <p style={{ color: LIME, fontSize: 11, fontWeight: 600, marginTop: 2 }}>Jan 2022 – Present</p>
              </div>

              {/* Experience */}
              <div>
                <Label>Experience</Label>
                {/* Job 1 */}
                <div className="mb-3">
                  <div className="flex justify-between items-start">
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>Optimise Solutions</p>
                    <span style={{ color: LIME, fontSize: 10, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 6 }}>Jul 24–Jul 25</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 3 }}>Intern UI/UX Designer</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, lineHeight: 1.5 }}>
                    Designed end-to-end UIs for web and mobile apps serving Sri Lankan and international clients. Delivered wireframes, user flows, and high-fidelity Figma prototypes with developer-ready handoff specs. Collaborated directly with developers to ensure pixel-accurate implementation.
                  </p>
                </div>
                {/* Job 2 */}
                <div>
                  <div className="flex justify-between items-start">
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>Freelance</p>
                    <span style={{ color: LIME, fontSize: 10, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 6 }}>Sep 24–Now</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 3 }}>UI/UX Designer</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, lineHeight: 1.5 }}>
                    Delivered custom web interfaces for startups and small businesses with a focus on usability and conversion. Produced wireframes, mockups, and interactive prototypes in Figma. Managed full client lifecycle — briefs, iterations, and final handoff.
                  </p>
                </div>
              </div>

              {/* UX Skills */}
              <div>
                <Label>UX Design</Label>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.6 }}>
                  User Research · Wireframing · Prototyping · User Flows · Information Architecture · Usability Testing · Journey Mapping · Accessibility
                </p>
              </div>

              {/* UI Skills */}
              <div>
                <Label>UI Design</Label>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.6 }}>
                  Design Systems · Visual Hierarchy · Responsive Design · Component Libraries · Auto Layout · Dev Handoff · Interaction Design
                </p>
              </div>

              {/* Tools */}
              <div>
                <Label>Tools &amp; Tech</Label>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.6 }}>
                  Figma · FigJam · Visily · InVision · Axure · HTML · CSS · JavaScript · React · Python · Java · MySQL · MongoDB · Picsart · Midjourney 
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="flex-1 flex flex-col gap-3 min-w-0" style={{ height: 'calc(100vh - 110px)' }}>

            {/* Featured Work */}
            <div className="rounded-2xl overflow-hidden flex flex-col flex-1 min-h-0" style={{ background: "#161616" }}>
              <div className="flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0">
                <div>
                  <span className="text-white" style={{ fontWeight: 700, fontSize: 16 }}>Featured Work</span>
                  <span className="ml-2" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>10 projects</span>
                </div>
                <a href="https://www.behance.net/samindi291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ color: LIME, fontWeight: 600, fontSize: 13 }}>
                  View All <ArrowUpRight size={14} strokeWidth={2.5} />
                </a>
              </div>

              {/* Scrollable project grid */}
              <div
                ref={scrollRef}
                className="px-4 pb-4 flex-1 overflow-y-auto min-h-0"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            </div>

            {/* Social / Resume bar */}
            <div className="rounded-2xl flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: "#161616" }}>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Mail, label: "Email", href: "mailto:lakyanganisamindani291@gmail.com" },
                  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lakyangani-samindani-323933267" },
                  { Icon: Instagram, label: "Instagram", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    className="flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-105"
                    style={{ width: 48, height: 48, background: "#222", color: "rgba(255,255,255,0.7)" }}>
                    <Icon size={20} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
              <a href="/resume.pdf" download="Lakyangani-Samindani-Resume.pdf"
                className="flex items-center gap-2 rounded-xl transition-all duration-200 hover:scale-105"
                style={{ background: "#fff", color: "#111", fontWeight: 700, fontSize: 15, paddingLeft: 28, paddingRight: 20, paddingTop: 13, paddingBottom: 13 }}>
                Resume <ArrowUpRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; height: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
      `}</style>
    </div>
  );
}
