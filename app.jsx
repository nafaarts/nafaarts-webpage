/* Nafaarts Development — Landing Page App */
const { useState, useEffect, useRef } = React;

// Icons (simple line SVGs)
const Icon = {
  web: () =>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
      <path d="M8 22h8" />
      <path d="M12 18v4" />
    </svg>,

  mobile: () =>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </svg>,

  consult: () =>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M4.93 4.93l2.12 2.12" />
      <path d="M16.95 16.95l2.12 2.12" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.93 19.07l2.12-2.12" />
      <path d="M16.95 7.05l2.12-2.12" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>,

  arrow: () =>
    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>,

  arrowOut: () =>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>

};

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 80 : window.innerHeight - 80;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#" className="brand">
          <img src="assets/nafaarts-logo.png" alt="" className="brand-mark" />
          <div className="brand-name">Nafaarts</div>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </div>
    </nav>);

}

// Smooth, slower section-snap controller. Intercepts wheel events while the
// user is inside the Hero/Services/Process zone and animates the scroll with
// a ~1100ms easing curve. Beyond Process, native scrolling resumes so CTA &
// Footer behave normally.
function SnapScroller() {
  useEffect(() => {
    const getTargets = () => [
      document.querySelector(".hero"),
      document.querySelector("#services"),
      document.querySelector("#process"),
    ].filter(Boolean);

    let animating = false;
    let lastWheel = 0;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScrollTo = (y, dur = 1100) => {
      const startY = window.scrollY;
      const dy = y - startY;
      if (Math.abs(dy) < 2) return;
      const t0 = performance.now();
      animating = true;
      const step = (now) => {
        const elapsed = now - t0;
        const t = Math.min(elapsed / dur, 1);
        window.scrollTo(0, startY + dy * easeInOutCubic(t));
        if (t < 1) requestAnimationFrame(step);
        else setTimeout(() => { animating = false; }, 80);
      };
      requestAnimationFrame(step);
    };

    const currentIndex = (targets) => {
      const y = window.scrollY + 4;
      let idx = 0;
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].offsetTop <= y + 30) idx = i;
      }
      return idx;
    };

    const inSnapZone = (targets) => {
      const last = targets[targets.length - 1];
      const lastEnd = last.offsetTop + last.offsetHeight;
      // Active while the user is anywhere from page top through ~70% into the
      // last snap section. Past that, hand off to native scroll.
      return window.scrollY < lastEnd - 80;
    };

    const onWheel = (e) => {
      if (window.innerWidth <= 860) return;
      if (animating) { e.preventDefault(); return; }
      const targets = getTargets();
      if (targets.length === 0) return;
      if (!inSnapZone(targets)) return;
      const now = performance.now();
      if (now - lastWheel < 220) { e.preventDefault(); return; }
      lastWheel = now;
      const dir = e.deltaY > 0 ? 1 : -1;
      const cur = currentIndex(targets);
      let next = cur + dir;
      if (next >= targets.length) {
        // Past last snap target: scroll to the section AFTER the snap zone
        const after = document.querySelector("#contact");
        if (after) {
          e.preventDefault();
          smoothScrollTo(after.offsetTop, 1100);
        }
        return;
      }
      if (next < 0) next = 0;
      e.preventDefault();
      smoothScrollTo(targets[next].offsetTop, 1100);
    };

    const onKey = (e) => {
      if (window.innerWidth <= 860) return;
      const targets = getTargets();
      if (targets.length === 0 || !inSnapZone(targets)) return;
      if (animating) { e.preventDefault(); return; }
      const downKeys = ["ArrowDown", "PageDown", " "];
      const upKeys = ["ArrowUp", "PageUp"];
      let dir = 0;
      if (downKeys.includes(e.key)) dir = 1;
      else if (upKeys.includes(e.key)) dir = -1;
      else return;
      const cur = currentIndex(targets);
      let next = cur + dir;
      if (next < 0) next = 0;
      e.preventDefault();
      if (next >= targets.length) {
        const after = document.querySelector("#contact");
        if (after) smoothScrollTo(after.offsetTop, 1100);
        return;
      }
      smoothScrollTo(targets[next].offsetTop, 1100);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}

// Fixed circular control in the bottom-left of the viewport.
// Behaviour: scrolls to the next section, then flips to a back-to-top control
// once the user is in the bottom 15% of the page.
function ScrollControl() {
  const [mode, setMode] = useState("next");

  useEffect(() => {
    const update = () => {
      const winH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const remaining = docH - winH - window.scrollY;
      setMode(remaining < winH * 0.4 ? "top" : "next");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScroll = (y, dur = 1100) => {
    const startY = window.scrollY;
    const dy = y - startY;
    const t0 = performance.now();
    const step = (now) => {
      const elapsed = now - t0;
      const t = Math.min(elapsed / dur, 1);
      window.scrollTo(0, startY + dy * easeInOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const onClick = () => {
    if (mode === "top") {
      animateScroll(0, 1300);
      return;
    }
    // Find first section whose top is below current viewport top
    const anchors = [
      document.querySelector(".hero"),
      document.querySelector("#services"),
      document.querySelector("#process"),
      document.querySelector("#contact"),
      document.querySelector(".footer"),
    ].filter(Boolean);
    const y = window.scrollY;
    for (const a of anchors) {
      if (a.offsetTop > y + 30) {
        animateScroll(a.offsetTop, 1100);
        return;
      }
    }
    // Fallback: scroll to bottom
    animateScroll(document.documentElement.scrollHeight, 1100);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`scroll-fab ${mode}`}
      aria-label={mode === "top" ? "Back to top" : "Next section"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {mode === "top" ? (
          <>
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </>
        ) : (
          <>
            <path d="M12 5v14" />
            <path d="M5 12l7 7 7-7" />
          </>
        )}
      </svg>
      <span className="scroll-fab-label">{mode === "top" ? "Top" : "Next"}</span>
    </button>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1 className="headline">
            We build <em>resilient</em> web &amp; mobile products from the western edge of Indonesia.
          </h1>
          <p className="lede">
            Nafaarts Development is a software studio and IT consultancy. We partner with founders, government, and enterprise teams to ship custom applications that survive scale — not slide decks.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Start a project <Icon.arrow />
            </a>
          </div>
          <div className="meta-row">
            <div className="stat">
              <span className="stat-num">48+</span>
              <span>Projects shipped</span>
            </div>
            <div className="sep"></div>
            <div className="stat">
              <span className="stat-num">08</span>
              <span>Years · since 2018</span>
            </div>
          </div>
        </div>
        <div className="hero-globe-slot" aria-hidden="true"></div>
      </div>
    </section>);

}

function FloatingGlobe() {
  const [globeStyle, setGlobeStyle] = useState("earth");
  const [accent, setAccent] = useState("#f8941f");
  const [label, setLabel] = useState({ x: 0, y: 0, visible: false });
  const wrapRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.detail) {
        if (e.detail.globeStyle) setGlobeStyle(e.detail.globeStyle);
        if (e.detail.accent) setAccent(e.detail.accent);
      }
    };
    window.addEventListener("__nafaarts_tweak", handler);
    return () => window.removeEventListener("__nafaarts_tweak", handler);
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastY = -1;
    let lastW = 0;
    let lastH = 0;
    const BASE = 1200;
    // Cache DOM lookups — querying every RAF frame is expensive
    const servicesEl = document.querySelector("#services");
    const processEl = document.querySelector("#process");
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const winH = window.innerHeight;
      const winW = window.innerWidth;
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

      if (scrollY === lastY && winW === lastW && winH === lastH) {
        rafId = requestAnimationFrame(update);
        return;
      }
      lastY = scrollY;
      lastW = winW;
      lastH = winH;

      const docH = document.documentElement.scrollHeight;
      const scrollMax = Math.max(1, docH - winH);
      const isMobile = winW <= 860;

      let size, left, top;

      if (isMobile) {
        // Three.js sphere fills ~74% of the canvas.
        // Target sphere diameter = 88% of viewport (5% padding each side → fully visible).
        // Canvas is larger (sphere/0.74), its transparent edges get viewport-clipped — ok.
        // Sphere target = 88% of viewport width (6% padding each side, fully visible).
        // Canvas = sphereDia / 0.74. Transparent canvas edges get viewport-clipped harmlessly.
        const sphereDia = winW * 0.88;
        size = sphereDia / 0.74;
        left = (winW - size) / 2;  // negative — transparent areas outside viewport
        top  = winH - size / 2;    // sphere center at viewport bottom → top half visible
      } else {
        // Desktop size anchors
        const initSize = Math.min(winH * 1.4, winW * 1.1, 1280);
        const svcSize  = initSize * 0.8;
        const midSize  = 1147;
        const endSize  = winW;

        // Desktop position anchors
        const initLeft = winW - initSize * 0.72;
        const initTop  = (winH - initSize) / 2;
        const svcLeft  = -(svcSize * 0.28);
        const svcTop   = (winH - svcSize) / 2;
        const midLeft  = winW - midSize * 0.85;
        const midTop   = winH - midSize + 50;
        const endLeft  = (winW - endSize) / 2;
        const endTop   = winH - endSize * 0.5;

        const phase1End = servicesEl ? Math.max(1, servicesEl.offsetTop) : scrollMax * 0.25;
        const phase2End = processEl  ? Math.max(1, processEl.offsetTop)  : scrollMax * 0.6;

        if (scrollY <= phase1End) {
          const raw = Math.max(0, Math.min(1, scrollY / phase1End));
          const p   = raw * raw * (3 - 2 * raw);
          size = initSize + (svcSize - initSize) * p;
          left = initLeft + (svcLeft - initLeft) * p;
          top  = initTop  + (svcTop  - initTop)  * p;
        } else if (scrollY <= phase2End) {
          const raw = Math.max(0, Math.min(1, (scrollY - phase1End) / Math.max(1, phase2End - phase1End)));
          const p   = raw * raw * (3 - 2 * raw);
          size = svcSize + (midSize - svcSize) * p;
          left = svcLeft + (midLeft - svcLeft) * p;
          top  = svcTop  + (midTop  - svcTop)  * p;
        } else {
          const raw = Math.max(0, Math.min(1, (scrollY - phase2End) / Math.max(1, scrollMax - phase2End)));
          const p   = raw * raw * (3 - 2 * raw);
          size = midSize + (endSize - midSize) * p;
          left = midLeft + (endLeft - midLeft) * p;
          top  = midTop  + (endTop  - midTop)  * p;
        }
      }

      const boostedScale = size / BASE;

      // Down-shift at Process section (desktop only)
      let sectionDownOffset = 0;
      if (!isMobile && processEl) {
        const pTop = processEl.offsetTop;
        const pH = processEl.offsetHeight;
        const rel = (scrollY - pTop + winH * 0.3) / (pH * 0.8);
        const t = Math.max(0, Math.min(1, rel));
        sectionDownOffset = winH * 0.468 * Math.sin(t * Math.PI);
      }

      el.style.transform = `translate3d(${left}px, ${top + sectionDownOffset}px, 0) scale(${boostedScale})`;

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <div ref={wrapRef} className="floating-globe">
        <Globe style={globeStyle} accent={accent} onLabel={setLabel} />
      </div>
      <div
        className="pin-label"
        style={{
          left: label.x + "px",
          top: label.y + "px",
          opacity: label.visible ? 1 : 0,
        }}
      >
        <span>Banda Aceh</span>
        <span className="lat-lon">5.5483°N · 95.3238°E</span>
      </div>
    </>);

}

// Sweeps a soft fade across the footer wordmark from left to right
// as it scrolls into view — animated CSS mask gradient.
function FadeInWordmark({ children }) {
  const elRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let last = -1;
    const update = () => {
      const el = elRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      // Generous range so the sweep completes well before the user reaches the bottom.
      const start = winH * 1.2;
      const end = winH * 0.65;
      const r = rect.top;
      let prog = (start - r) / Math.max(1, start - end);
      prog = Math.max(0, Math.min(1, prog));
      if (Math.abs(prog - last) > 0.005) {
        last = prog;
        setP(prog);
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Reveal from 0% to 150% with a 20% soft edge — ensures the wordmark is
  // fully opaque at p=1 (no residual fade at the right edge).
  const reveal = p * 150;
  const fade = Math.max(0, reveal - 20);
  const grad = `linear-gradient(to right, black 0%, black ${fade}%, transparent ${reveal}%)`;
  const maskStyle = { WebkitMaskImage: grad, maskImage: grad };

  return (
    <div ref={elRef} className="big-logo" style={maskStyle}>
      {children}
    </div>
  );
}

function Services() {
  const list = [
    {
      n: "01",
      icon: <Icon.web />,
      title: "Custom Web Applications",
      desc: "Production-grade dashboards, SaaS platforms, e-commerce, and internal tools. Built on TypeScript, React, and Postgres — designed to last beyond the launch sprint.",
      stack: ["Next.js", "TypeScript", "Postgres", "Tailwind", "Redis", "AWS"]
    },
    {
      n: "02",
      icon: <Icon.mobile />,
      title: "Mobile Applications",
      desc: "Native-feeling iOS and Android apps with React Native and Flutter. Offline-first architecture, smooth animations, and a release pipeline you can hand to your team.",
      stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      n: "03",
      icon: <Icon.consult />,
      title: "IT Consulting & Architecture",
      desc: "Technical due diligence, system design, cloud migration, and dedicated engineering teams. We help you decide what to build — and what not to.",
      stack: ["Architecture", "Cloud", "Audits", "Team Lead", "DevOps"]
    }];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="section-num">01 / Services</div>
          <h2 className="section-title" style={{ textAlign: "right", maxWidth: "100%", width: "100%" }}>
            Three disciplines, <em>one</em> studio. Engineering that doesn&apos;t leak.
          </h2>
        </div>
        <div className="services">
          {list.map((s) =>
            <div className="service" key={s.n}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="service-icon">{s.icon}</div>
                <span className="service-num">{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-stack">
                {s.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Process() {
  const [active, setActive] = useState(0);
  const steps = [
    { n: "01", title: "Discover", desc: "Workshops, stakeholder interviews, and competitive teardowns. We arrive curious and leave with a brief that maps real outcomes to product moves." },
    { n: "02", title: "Design", desc: "Hi-fi interaction design, clickable prototypes, and a vetted component system — so engineering starts on day one, not month three." },
    { n: "03", title: "Build", desc: "Two-week sprints, weekly demos, and shared boards. CI/CD from the first commit. You see exactly where the budget went." },
    { n: "04", title: "Operate", desc: "Production support, observability, and a retainer team. Most clients keep us on board long after launch — that's the win we optimize for." }];

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="process" className="section" style={{ paddingTop: "10%", justifyContent: "flex-start", paddingBottom: 0 }}>
      <div className="container">
        <div className="section-head" style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <div className="section-num">02 / Process</div>
          <h2 className="section-title" style={{ textAlign: "left", maxWidth: "100%", width: "100%" }}>
            A four-stage cadence.<br /> <em>No</em> mystery, no surprise invoices.
          </h2>
        </div>
        <div className="process">
          {steps.map((s, i) =>
            <div
              key={s.n}
              className={`step ${i === active ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}>

              <div className="step-num">{s.n} ──</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function CTAStrip() {
  return (
    <section id="contact" className="cta-strip">
      <div className="container cta-inner">
        <h2>
          Have a product in mind? <em>Let&apos;s</em> ship it together.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 280 }}>
          <a href="mailto:nafaarts.dev@gmail.com" className="btn btn-primary" style={{ justifyContent: "space-between" }}>
            nafaarts.dev@gmail.com <Icon.arrow />
          </a>
        </div>
      </div>
    </section>);

}

function BigLogo() {
  return (
    <svg
      className="big-logo"
      viewBox="0 0 1000 190"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text
        x="0"
        y="168"
        fontFamily="'Montserrat', ui-sans-serif, sans-serif"
        fontWeight="700"
        fontSize="190"
        fill="none"
        stroke="var(--line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        textLength="1000"
        lengthAdjust="spacingAndGlyphs"
      >
        Nafaarts
      </text>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <img src="assets/nafaarts-logo.png" alt="" className="brand-mark" />
              <div className="brand-name">Nafaarts</div>
            </div>
            <p className="footer-address">
              Banda Aceh, 23116<br />
              Nanggroe Aceh Darussalam · Indonesia
            </p>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:nafaarts.dev@gmail.com">nafaarts.dev@gmail.com</a></li>
              <li><a href="#">@nafaarts</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <BigLogo />
      </div>
      <div className="container" style={{ marginBottom: 20 }}>
        <div className="footer-bottom">
          <span>© 2026 Nafaarts Development</span>
          <a href="https://www.nafaarts.com" target="_blank" rel="noopener">www.nafaarts.com</a>
        </div>
      </div>
    </footer>);

}

function TweaksLayer() {
  if (typeof TweaksPanel === "undefined") return null;
  const [t, setTweak] = useTweaks(window.__NAFAARTS_TWEAKS__);

  // Broadcast tweaks to children
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("__nafaarts_tweak", { detail: t }));
  }, [t.accent, t.globeStyle]);

  // Apply accent to CSS
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty(
      "--accent-soft",
      t.accent + "24"
    );
  }, [t.accent]);

  return (
    <TweaksPanel>
      <TweakSection label="Brand accent">
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#f8941f", "#e8b558", "#7dd6c6", "#9ab8ff", "#e07a5f"]} />

      </TweakSection>
    </TweaksPanel>);

}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <CTAStrip />
      <Footer />
      <FloatingGlobe />
      <SnapScroller />
      <ScrollControl />
      <TweaksLayer />
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
