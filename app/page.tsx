"use client";

import { useEffect, useRef } from "react";

const featureItems = [
  ["Client intake", "A cleaner way to prepare accounting, tax, and document requests."],
  ["Tax readiness", "Service details for individuals, families, and small businesses."],
  ["Document workflow", "Organized client document guidance is being prepared."],
  ["NEXUS dashboard", "A premium dashboard-style client experience is coming soon."],
  ["Business support", "Support remains active while the new site is under construction."],
  ["Secure presentation", "A polished client-facing platform built for trust and clarity."],
];

const statusItems = [
  ["Landing page", "Designing"],
  ["Client portal", "Preparing"],
  ["Service content", "Updating"],
  ["Contact flow", "Active"],
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
}

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const statusSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const width = scrollContainer.offsetWidth;
      const currentSection = Math.round(scrollContainer.scrollLeft / width);

      if (currentSection === 2 && statusSectionRef.current) {
        const section = statusSectionRef.current;
        const atTop = section.scrollTop === 0;
        const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) return;
      }

      if (currentSection === 3 && contactSectionRef.current) {
        const section = contactSectionRef.current;
        const atTop = section.scrollTop === 0;
        const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) return;
      }

      event.preventDefault();
      if (Math.abs(delta) <= 10) return;
      const target = delta > 0 ? Math.min(currentSection + 1, 3) : Math.max(currentSection - 1, 0);
      scrollContainer.scrollTo({ left: target * width, behavior: "smooth" });
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="template-root">
      <div className="liquid-metal" aria-hidden="true" />
      <div className="dark-mask" aria-hidden="true" />

      <nav className="floating-navbar" aria-label="Puran Accounting navigation">
        <button onClick={() => scrollToSection("home")} className="nav-logo" aria-label="Go to home">
          <span>N</span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollToSection("features")}>Features</button>
          <button onClick={() => scrollToSection("status")}>Status</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

        <a className="nav-cta" href="mailto:info@puranaccounting.com">Get notified</a>
      </nav>

      <div ref={scrollContainerRef} className="horizontal-scroll">
        <section id="home" className="panel hero-panel">
          <div className="hero-inner">
            <h1>
              <span>Puran.</span>{" "}
              <em>Accounting.</em>{" "}
              <span>NEXUS.</span>
            </h1>

            <p>
              Puran Accounting & Tax Solution Lab is building a sleek new NEXUS Platform for accounting,
              tax, client intake, document updates, and service information.
            </p>

            <div className="hero-actions">
              <a className="shiny-button" href="mailto:info@puranaccounting.com">contact the office</a>
              <span className="notice-pill">website under construction</span>
            </div>
          </div>
        </section>

        <section id="features" className="panel features-panel">
          <div className="section-shell">
            <span className="badge">Platform</span>
            <h2>Our Key Features</h2>
            <p className="section-lead">
              We are preparing the NEXUS Platform to give clients a cleaner, more professional way to view services,
              submit information, and stay updated while the full website is being completed.
            </p>

            <div className="feature-grid">
              {featureItems.map(([title, text]) => (
                <article key={title}>
                  <span className="check">✓</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="status" ref={statusSectionRef} className="panel scroll-panel status-panel">
          <div className="section-shell status-wrap">
            <div className="status-copy">
              <span className="badge">Construction notice</span>
              <h2>Client experience upgrade in progress.</h2>
              <p className="section-lead">
                This temporary landing page is active while the permanent Puran Accounting & Tax Solution Lab site
                and NEXUS dashboard are being prepared.
              </p>
            </div>

            <div className="bento-status">
              <div className="window-top"><i /><i /><i /><strong>NEXUS OS</strong></div>
              <div className="main-status-card">
                <span>Client platform rebuild</span>
                <strong>In Progress</strong>
                <div className="progress"><i /></div>
              </div>
              <div className="status-grid">
                {statusItems.map(([title, status], index) => (
                  <article key={title}>
                    <span>0{index + 1}</span>
                    <strong>{title}</strong>
                    <p>{status}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactSectionRef} className="panel scroll-panel contact-panel">
          <div className="section-shell contact-card">
            <div className="contact-copy">
              <span className="badge">Contact</span>
              <h2>Get in touch</h2>
              <p className="section-lead">
                Need assistance while the new platform is under construction? Contact Puran Accounting & Tax Solution Lab directly.
              </p>
              <div className="contact-info">
                <div><strong>Email</strong><span>info@puranaccounting.com</span></div>
                <div><strong>Website</strong><span>www.puranaccounting.com</span></div>
                <div><strong>Status</strong><span>NEXUS Platform coming soon</span></div>
              </div>
            </div>

            <form className="contact-form" action="mailto:info@puranaccounting.com" method="post">
              <label>Name<input name="name" type="text" /></label>
              <label>Email<input name="email" type="email" /></label>
              <label>Phone<input name="phone" type="tel" /></label>
              <label>Message<textarea name="message" rows={4} /></label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; background: #00042e; color: white; }
        body { font-family: Inter, Arial, sans-serif; overflow: hidden; }
        button, input, textarea { font: inherit; }
        button { cursor: pointer; border: 0; }
        a { color: inherit; text-decoration: none; }

        .template-root {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #00042e;
        }

        .liquid-metal {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            conic-gradient(from 140deg at 38% 42%, rgba(255,255,255,.05), rgba(91,77,199,.96), rgba(49,225,255,.62), rgba(255,94,222,.62), rgba(91,77,199,.9), rgba(255,255,255,.04)),
            radial-gradient(circle at 20% 18%, rgba(126,241,255,.36), transparent 30%),
            radial-gradient(circle at 82% 18%, rgba(255,92,230,.38), transparent 28%),
            linear-gradient(135deg, #00042e 0%, #071156 48%, #1b145d 100%);
          filter: saturate(1.2);
          animation: liquidShift 16s ease-in-out infinite alternate;
        }

        .dark-mask {
          position: fixed;
          inset: 0;
          z-index: 1;
          background: rgba(0,0,0,.5);
          pointer-events: none;
        }

        .template-root::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: .25;
          background-image: radial-gradient(rgba(255,255,255,.16) 1px, transparent 1px);
          background-size: 12px 12px;
        }

        .floating-navbar {
          position: fixed;
          left: 1rem;
          right: 1rem;
          top: 1rem;
          z-index: 50;
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border: 2px solid rgba(255,255,255,.10);
          border-radius: 1rem;
          padding: 1rem 1.4rem;
          background: rgba(255,255,255,.05);
          backdrop-filter: blur(10px);
        }

        .nav-logo {
          display: grid;
          place-items: center;
          width: 2rem;
          height: 2rem;
          border-radius: .75rem;
          color: #0b102e;
          background: linear-gradient(135deg, #fff, #91f9ff 48%, #ff8bec);
          font-weight: 900;
          box-shadow: 0 0 28px rgba(255,255,255,.35);
        }

        .nav-links { display: flex; align-items: center; gap: 2rem; }
        .nav-links button {
          color: rgba(229,231,235,.76);
          background: transparent;
          font-size: .92rem;
          text-shadow: 0 2px 6px rgba(0,0,0,.4);
        }
        .nav-links button:hover { color: white; }

        .nav-cta {
          border-radius: .55rem;
          padding: .6rem .9rem;
          background: #fff;
          color: #000;
          font-weight: 800;
          font-size: .86rem;
        }

        .horizontal-scroll {
          position: relative;
          z-index: 10;
          display: flex;
          width: 100%;
          height: 100vh;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .horizontal-scroll::-webkit-scrollbar { display: none; }

        .panel {
          min-width: 100%;
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.25rem 2rem;
        }

        .scroll-panel {
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-panel::-webkit-scrollbar { display: none; }

        .hero-inner {
          width: min(64rem, 100%);
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          margin: 0 0 2rem;
          color: white;
          font-size: clamp(3.8rem, 10vw, 8rem);
          line-height: .9;
          letter-spacing: -.075em;
          text-wrap: balance;
          text-shadow: 0 4px 22px rgba(0,0,0,.6);
        }
        h1 em { font-family: Georgia, serif; font-style: italic; font-weight: 400; }

        .hero-inner p, .section-lead {
          max-width: 44rem;
          margin: 0 auto;
          color: rgba(209,213,219,.9);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.75;
          text-shadow: 0 2px 10px rgba(0,0,0,.5);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .shiny-button {
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,.30);
          border-radius: .75rem;
          padding: .9rem 1.55rem;
          background: rgba(255,255,255,.18);
          color: white;
          text-transform: uppercase;
          font-weight: 900;
          font-size: .82rem;
          letter-spacing: .08em;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 30px rgba(255,255,255,.35), inset 0 0 20px rgba(255,255,255,.10);
          text-shadow: 0 2px 8px rgba(0,0,0,.8);
        }
        .shiny-button::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-120%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent);
          animation: shine 2.8s ease-in-out infinite;
        }

        .notice-pill, .badge {
          border: 1px solid rgba(255,255,255,.20);
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.88);
          backdrop-filter: blur(10px);
          text-shadow: 0 2px 8px rgba(0,0,0,.42);
        }
        .notice-pill { padding: .85rem 1rem; }
        .badge { display: inline-flex; padding: .45rem .75rem; font-size: .76rem; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; }

        .section-shell {
          width: min(80rem, 100%);
          margin: 0 auto;
        }

        .features-panel .section-shell {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .section-heading, .status-copy { max-width: 42rem; }
        h2 {
          margin: 1rem 0 .75rem;
          color: white;
          font-size: clamp(2.4rem, 5vw, 4.7rem);
          line-height: .95;
          letter-spacing: -.055em;
          text-shadow: 0 4px 22px rgba(0,0,0,.58);
        }
        .section-lead { margin: 0; }

        .feature-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem 2.5rem;
          padding-top: 3rem;
        }
        .feature-grid article {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }
        .check {
          flex: 0 0 1.1rem;
          margin-top: .25rem;
          color: white;
          font-weight: 900;
        }
        .feature-grid h3 { margin: 0; font-size: 1.05rem; color: white; }
        .feature-grid p { margin: .35rem 0 0; color: rgba(209,213,219,.82); font-size: .94rem; line-height: 1.6; }

        .status-wrap {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .bento-status, .contact-card {
          position: relative;
          border: 2px solid rgba(255,255,255,.10);
          border-radius: .8rem;
          background: rgba(255,255,255,.05);
          backdrop-filter: blur(12px);
          box-shadow: 0 32px 80px rgba(0,0,0,.35);
        }
        .bento-status { padding: .85rem; }
        .window-top { display: flex; align-items: center; gap: .45rem; padding: .7rem .8rem 1rem; color: rgba(229,231,235,.8); font-size: .78rem; text-transform: uppercase; letter-spacing: .1em; }
        .window-top i { width: .7rem; height: .7rem; border-radius: 999px; background: #fb7185; }
        .window-top i:nth-child(2) { background: #facc15; }
        .window-top i:nth-child(3) { background: #34d399; }
        .window-top strong { margin-left: auto; }
        .main-status-card, .status-grid article {
          border: 1px solid rgba(255,255,255,.12);
          border-radius: .8rem;
          background: rgba(255,255,255,.07);
        }
        .main-status-card { padding: 1.2rem; }
        .main-status-card span, .status-grid span { color: rgba(229,231,235,.72); font-size: .74rem; font-weight: 900; text-transform: uppercase; letter-spacing: .1em; }
        .main-status-card strong { display: block; margin-top: .75rem; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1; }
        .progress { height: .6rem; margin-top: 1.2rem; border-radius: 999px; overflow: hidden; background: rgba(255,255,255,.12); }
        .progress i { display: block; width: 78%; height: 100%; background: linear-gradient(90deg, #fff, #9ef7ff, #ff8bed); }
        .status-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .75rem; margin-top: .75rem; }
        .status-grid article { padding: 1rem; }
        .status-grid strong { display: block; margin-top: .55rem; }
        .status-grid p { margin: .3rem 0 0; color: rgba(209,213,219,.75); }

        .contact-card {
          display: grid;
          grid-template-columns: 1.5fr .85fr;
          gap: 1rem;
          padding: clamp(1.2rem, 3vw, 2rem);
        }
        .contact-info { display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; margin-top: 1.5rem; }
        .contact-info div { border-radius: .8rem; background: rgba(255,255,255,.08); padding: 1rem; }
        .contact-info strong, .contact-info span { display: block; }
        .contact-info span { margin-top: .35rem; color: rgba(209,213,219,.8); font-size: .85rem; }
        .contact-form { display: grid; gap: .9rem; border-left: 1px solid rgba(255,255,255,.12); padding-left: 1rem; }
        .contact-form label { display: grid; gap: .4rem; color: rgba(255,255,255,.86); font-size: .86rem; }
        .contact-form input, .contact-form textarea { width: 100%; border: 1px solid rgba(255,255,255,.18); border-radius: .45rem; background: rgba(255,255,255,.10); color: white; padding: .7rem .8rem; outline: none; }
        .contact-form button { border-radius: .55rem; padding: .75rem 1rem; background: #fff; color: #000; font-weight: 900; }

        @keyframes liquidShift { from { filter: hue-rotate(0deg) saturate(1.1); transform: scale(1); } to { filter: hue-rotate(24deg) saturate(1.35); transform: scale(1.06); } }
        @keyframes shine { 0%,35% { transform: translateX(-120%); } 70%,100% { transform: translateX(120%); } }

        @media (max-width: 980px) {
          body { overflow: auto; }
          .template-root { height: auto; min-height: 100vh; overflow: visible; }
          .horizontal-scroll { display: block; height: auto; overflow: visible; scroll-snap-type: none; }
          .panel { min-width: 0; min-height: 100vh; height: auto; scroll-snap-align: none; }
          .status-wrap, .contact-card { grid-template-columns: 1fr; }
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-form { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); padding-left: 0; padding-top: 1rem; }
        }
        @media (max-width: 680px) {
          .floating-navbar { padding: .75rem; }
          .nav-links { display: none; }
          .nav-cta { font-size: .78rem; padding: .55rem .7rem; }
          h1 { font-size: clamp(3rem, 18vw, 5rem); }
          .feature-grid, .status-grid, .contact-info { grid-template-columns: 1fr; }
          .panel { padding-left: 1rem; padding-right: 1rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .liquid-metal, .shiny-button::after { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
