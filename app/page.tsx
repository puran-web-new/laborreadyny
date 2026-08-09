"use client";

const features = [
  ["Client intake", "A cleaner path for accounting, tax, document upload, and support requests."],
  ["Tax readiness", "Service information is being organized for individuals, families, and businesses."],
  ["NEXUS dashboard", "A premium dashboard-style client experience is being prepared."],
  ["Document workflow", "Future tools will make client document preparation easier to understand."],
  ["Business support", "Clients can still contact the office while the site is under construction."],
  ["Secure experience", "A polished public-facing platform is being built with professional presentation."],
];

const updates = ["Landing page", "Client dashboard", "Service content", "Contact flow"];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomePage() {
  return (
    <main className="v0-page" id="home" aria-labelledby="page-title">
      <div className="liquid-bg" aria-hidden="true" />
      <div className="dark-overlay" aria-hidden="true" />
      <div className="chrome-arrow" aria-hidden="true">↗</div>
      <div className="chrome-star" aria-hidden="true">✦</div>

      <nav className="floating-nav" aria-label="Puran Accounting navigation">
        <button onClick={() => scrollToSection("home")} className="brand" aria-label="Go to top">
          <span className="brand-icon">N</span>
          <span>Puran Accounting</span>
        </button>
        <div className="nav-links">
          <button onClick={() => scrollToSection("features")}>Updates</button>
          <button onClick={() => scrollToSection("platform")}>Platform</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
        <a className="nav-cta" href="mailto:info@puranaccounting.com">Get notified</a>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Website under construction</p>
          <h1 id="page-title">
            <span>Puran.</span> <em>Accounting.</em> <span>NEXUS.</span>
          </h1>
          <p className="lead">
            Puran Accounting & Tax Solution Lab is building a sleek new NEXUS Platform for accounting,
            tax, client intake, document updates, and service information. Please check back soon.
          </p>
          <div className="hero-actions">
            <a className="shiny-button" href="mailto:info@puranaccounting.com">Contact the office</a>
            <span className="status-pill">New client experience in progress</span>
          </div>
        </div>

        <div className="status-console" aria-label="NEXUS construction status">
          <div className="console-top">
            <i /><i /><i />
            <strong>NEXUS build status</strong>
          </div>
          <div className="console-main">
            <span>Client platform rebuild</span>
            <strong>In Progress</strong>
            <div className="progress"><i /></div>
          </div>
          <div className="console-grid">
            {updates.map((item, index) => (
              <article key={item}>
                <small>0{index + 1}</small>
                <strong>{item}</strong>
                <span>{index < 2 ? "Designing" : "Preparing"}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section" id="features" aria-label="Platform updates">
        <div className="section-copy">
          <span className="badge">Platform</span>
          <h2>What clients should know while we build.</h2>
          <p>
            This temporary landing page confirms the new Puran Accounting & Tax Solution Lab website is under
            construction. Client support remains active while the NEXUS Platform is being prepared.
          </p>
        </div>
        <div className="feature-grid" id="platform">
          {features.map(([title, text]) => (
            <article key={title}>
              <span className="check">✓</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-card" id="contact" aria-label="Contact Puran Accounting">
        <div>
          <span className="badge">Contact</span>
          <h2>Need help before the launch?</h2>
          <p>
            Contact Puran Accounting & Tax Solution Lab directly while the new NEXUS Platform is under construction.
          </p>
        </div>
        <a className="contact-button" href="mailto:info@puranaccounting.com">Email the office</a>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, body { margin: 0; min-height: 100%; }
        body { background: #00042e; color: #fff; font-family: Inter, Arial, sans-serif; }
        button, a { font: inherit; }
        button { border: 0; cursor: pointer; }
        a { color: inherit; text-decoration: none; }
        .v0-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          padding: 6.5rem clamp(1rem, 2vw, 1.5rem) 1.5rem;
          background: #00042e;
        }
        .liquid-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            conic-gradient(from 160deg at 28% 42%, rgba(255,255,255,.04), rgba(107,84,255,.72), rgba(0,230,255,.44), rgba(255,82,215,.62), rgba(255,255,255,.04)),
            radial-gradient(circle at 18% 12%, rgba(102,232,255,.34), transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(255,111,225,.36), transparent 28%),
            linear-gradient(135deg, #00042e 0%, #06104b 48%, #160f55 100%);
          filter: saturate(1.25);
          animation: liquidShift 14s ease-in-out infinite alternate;
        }
        .dark-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,.18) 52%, rgba(0,0,0,.58) 100%),
            rgba(0,0,0,.46);
          pointer-events: none;
        }
        .v0-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: .22;
          background-image: radial-gradient(rgba(255,255,255,.2) 1px, transparent 1px);
          background-size: 14px 14px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }
        .floating-nav {
          position: fixed;
          left: 1rem;
          right: 1rem;
          top: 1rem;
          z-index: 50;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border: 2px solid rgba(255,255,255,.10);
          border-radius: 1.35rem;
          padding: .9rem 1.1rem;
          background: rgba(255,255,255,.055);
          backdrop-filter: blur(14px);
          box-shadow: 0 22px 70px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.14);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: .72rem;
          color: #fff;
          background: transparent;
          font-weight: 800;
          text-shadow: 0 2px 8px rgba(0,0,0,.42);
        }
        .brand-icon {
          display: grid;
          place-items: center;
          width: 2rem;
          height: 2rem;
          border-radius: .72rem;
          background: linear-gradient(135deg, #fff, #aaf8ff 48%, #ff8cea);
          color: #070a2e;
          box-shadow: 0 0 30px rgba(255,255,255,.4);
        }
        .nav-links { display: flex; align-items: center; gap: 1.7rem; }
        .nav-links button {
          color: rgba(229,231,235,.78);
          background: transparent;
          font-size: .9rem;
          text-shadow: 0 2px 6px rgba(0,0,0,.42);
          transition: color .2s ease;
        }
        .nav-links button:hover { color: #fff; }
        .nav-cta {
          border-radius: .72rem;
          padding: .65rem .95rem;
          color: #060712;
          background: #fff;
          font-size: .86rem;
          font-weight: 800;
          box-shadow: 0 12px 34px rgba(255,255,255,.18);
        }
        .hero-section, .feature-section, .contact-card {
          position: relative;
          z-index: 10;
          width: min(1180px, 100%);
          margin: 0 auto;
        }
        .hero-section {
          min-height: calc(100vh - 8rem);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, .88fr);
          align-items: center;
          gap: clamp(2rem, 6vw, 5rem);
          padding: clamp(2rem, 5vw, 5rem) 0;
        }
        .hero-copy { text-align: left; }
        .eyebrow, .badge, .status-pill {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          border: 1px solid rgba(255,255,255,.20);
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.88);
          backdrop-filter: blur(10px);
          text-shadow: 0 2px 8px rgba(0,0,0,.42);
        }
        .eyebrow, .badge { padding: .55rem .85rem; font-size: .76rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
        h1 {
          margin: 1.2rem 0 0;
          max-width: 820px;
          color: #fff;
          font-size: clamp(4rem, 10vw, 9rem);
          line-height: .86;
          letter-spacing: -.09em;
          text-wrap: balance;
          text-shadow: 0 4px 26px rgba(0,0,0,.58);
        }
        h1 em { font-family: Georgia, serif; font-weight: 400; }
        .lead {
          margin: 1.55rem 0 0;
          max-width: 680px;
          color: rgba(229,231,235,.82);
          font-size: clamp(1.05rem, 2vw, 1.24rem);
          line-height: 1.75;
          text-shadow: 0 2px 10px rgba(0,0,0,.5);
        }
        .hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; margin-top: 2.2rem; }
        .shiny-button {
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,.30);
          border-radius: .9rem;
          padding: 1rem 1.35rem;
          background: rgba(255,255,255,.18);
          color: #fff;
          font-size: .86rem;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 34px rgba(255,255,255,.32), inset 0 0 20px rgba(255,255,255,.10);
          text-shadow: 0 2px 8px rgba(0,0,0,.8);
        }
        .shiny-button::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-120%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.68), transparent);
          animation: shine 2.6s ease-in-out infinite;
        }
        .status-pill { padding: .9rem 1rem; color: rgba(229,231,235,.86); }
        .status-console {
          border: 2px solid rgba(255,255,255,.12);
          border-radius: 1.6rem;
          padding: 1rem;
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(14px);
          box-shadow: 0 36px 90px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.12);
          transform: rotate(-2deg);
          animation: float 7s ease-in-out infinite;
        }
        .console-top { display: flex; align-items: center; gap: .45rem; padding: .7rem .8rem 1rem; color: rgba(229,231,235,.76); font-size: .74rem; letter-spacing: .12em; text-transform: uppercase; }
        .console-top i { width: .72rem; height: .72rem; border-radius: 999px; background: #fb7185; }
        .console-top i:nth-child(2) { background: #facc15; }
        .console-top i:nth-child(3) { background: #34d399; }
        .console-top strong { margin-left: auto; }
        .console-main, .console-grid article, .feature-grid article, .contact-card {
          border: 2px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(12px);
        }
        .console-main { border-radius: 1.2rem; padding: 1.25rem; }
        .console-main span, .console-grid small { color: rgba(229,231,235,.7); font-size: .72rem; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
        .console-main strong { display: block; margin-top: .75rem; font-size: clamp(2.3rem, 5vw, 3.8rem); line-height: 1; letter-spacing: -.06em; text-shadow: 0 4px 20px rgba(0,0,0,.6); }
        .progress { height: .65rem; margin-top: 1.25rem; overflow: hidden; border-radius: 999px; background: rgba(255,255,255,.13); }
        .progress i { display: block; width: 78%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #fff, #86f6ff, #ff87e8); box-shadow: 0 0 24px rgba(255,255,255,.5); }
        .console-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .8rem; margin-top: .8rem; }
        .console-grid article { border-radius: 1rem; padding: 1rem; min-height: 116px; }
        .console-grid strong { display: block; margin-top: .7rem; font-size: 1.05rem; }
        .console-grid span { display: block; margin-top: .35rem; color: rgba(229,231,235,.68); font-size: .84rem; }
        .chrome-arrow, .chrome-star {
          position: fixed;
          z-index: 4;
          display: grid;
          place-items: center;
          color: #fff;
          pointer-events: none;
          text-shadow: 0 0 22px rgba(134,246,255,.8), 0 0 40px rgba(255,135,232,.65);
          opacity: .78;
        }
        .chrome-arrow { right: 7vw; top: 18vh; font-size: clamp(5rem, 12vw, 11rem); transform: rotate(-10deg); }
        .chrome-star { left: 7vw; bottom: 10vh; font-size: clamp(4rem, 10vw, 8rem); }
        .feature-section { display: grid; grid-template-columns: .78fr 1.22fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; padding: 5rem 0; }
        .section-copy h2, .contact-card h2 { margin: 1rem 0 0; font-size: clamp(2.25rem, 5vw, 4.5rem); line-height: .95; letter-spacing: -.06em; text-shadow: 0 4px 22px rgba(0,0,0,.58); }
        .section-copy p, .contact-card p { color: rgba(229,231,235,.75); line-height: 1.72; font-size: 1.04rem; text-shadow: 0 2px 10px rgba(0,0,0,.45); }
        .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .feature-grid article { display: flex; gap: 1rem; border-radius: 1rem; padding: 1.1rem; }
        .check { display: grid; place-items: center; flex: 0 0 1.5rem; height: 1.5rem; border-radius: 999px; background: rgba(255,255,255,.14); font-weight: 900; }
        .feature-grid h3 { margin: 0; font-size: 1.04rem; }
        .feature-grid p { margin: .35rem 0 0; color: rgba(229,231,235,.68); font-size: .92rem; line-height: 1.55; }
        .contact-card { display: flex; justify-content: space-between; gap: 2rem; align-items: center; border-radius: 1.4rem; padding: clamp(1.4rem, 4vw, 2.4rem); margin-bottom: 1.5rem; }
        .contact-button { flex: 0 0 auto; border-radius: .85rem; padding: .95rem 1.2rem; background: #fff; color: #080a24; font-weight: 900; }
        @keyframes liquidShift { 0% { filter: hue-rotate(0deg) saturate(1.15); transform: scale(1); } 100% { filter: hue-rotate(28deg) saturate(1.35); transform: scale(1.06); } }
        @keyframes shine { 0%, 35% { transform: translateX(-120%); } 70%, 100% { transform: translateX(120%); } }
        @keyframes float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-16px) rotate(-1deg); } }
        @media (max-width: 900px) {
          .hero-section, .feature-section { grid-template-columns: 1fr; }
          .status-console { transform: none; }
          .nav-links { display: none; }
          .chrome-arrow, .chrome-star { opacity: .34; }
        }
        @media (max-width: 620px) {
          .v0-page { padding-top: 5.8rem; }
          .floating-nav { padding: .75rem; }
          .brand span:last-child { display: none; }
          .nav-cta { font-size: .78rem; padding: .6rem .75rem; }
          h1 { font-size: clamp(3.1rem, 18vw, 5.2rem); }
          .hero-section { padding-top: 2rem; }
          .console-grid, .feature-grid { grid-template-columns: 1fr; }
          .contact-card { flex-direction: column; align-items: flex-start; }
        }
        @media (prefers-reduced-motion: reduce) {
          .liquid-bg, .shiny-button::after, .status-console { animation: none !important; }
          html { scroll-behavior: auto; }
        }
      `}</style>
    </main>
  );
}
