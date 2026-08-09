const capabilities = [
  "Tax intake command center",
  "Client document pipeline",
  "Accounting workflow visibility",
  "Secure launch-ready experience",
];

const metrics = [
  { label: "Client workflows", value: "24/7" },
  { label: "Launch readiness", value: "92%" },
  { label: "Experience tier", value: "NEXUS" },
];

export default function HomePage() {
  return (
    <main className="nexus-page" aria-labelledby="nexus-title">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Puran Accounting & Tax Solution Lab</p>
          <h1 id="nexus-title">
            NEXUS Platform for modern accounting, tax, and client operations.
          </h1>
          <p className="hero-text">
            A premium digital command center is being built to streamline client intake,
            tax workflows, document readiness, and business service visibility in one
            polished dashboard experience.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="mailto:info@puranaccounting.com" className="primary-action">Request early access</a>
            <span className="launch-chip">Launching soon</span>
          </div>
        </div>

        <div className="orbital-stage" aria-label="NEXUS dashboard preview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="glass-dashboard">
            <div className="dash-top">
              <span />
              <span />
              <span />
              <strong>NEXUS OS</strong>
            </div>
            <div className="dash-main-card">
              <span>Readiness index</span>
              <strong>92%</strong>
              <div className="meter"><i /></div>
            </div>
            <div className="mini-grid">
              <article>
                <span>Tax queue</span>
                <strong>Active</strong>
              </article>
              <article>
                <span>Documents</span>
                <strong>Synced</strong>
              </article>
              <article>
                <span>Client portal</span>
                <strong>Preview</strong>
              </article>
            </div>
            <div className="wave-card">
              <div className="wave-head">
                <span>Workflow velocity</span>
                <strong>Optimized</strong>
              </div>
              <div className="bars" aria-hidden="true">
                <i style={{ height: "38%" }} />
                <i style={{ height: "64%" }} />
                <i style={{ height: "48%" }} />
                <i style={{ height: "82%" }} />
                <i style={{ height: "72%" }} />
                <i style={{ height: "96%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid" aria-label="Platform information">
        <div className="section-heading">
          <p className="eyebrow">What is coming</p>
          <h2>A landing page and dashboard built for trust, clarity, and premium presentation.</h2>
        </div>
        <div className="feature-grid">
          {capabilities.map((item, index) => (
            <article className="feature-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                Designed for a refined client experience with clean visibility, modern motion,
                and professional accounting-focused messaging.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="metric-strip" aria-label="NEXUS status metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; }
        body { font-family: Inter, Arial, sans-serif; background: #030712; color: white; }
        a { color: inherit; text-decoration: none; }
        .nexus-page {
          min-height: 100vh;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.5rem);
          background:
            radial-gradient(circle at 18% 16%, rgba(253, 186, 116, 0.22), transparent 32%),
            radial-gradient(circle at 84% 12%, rgba(59, 130, 246, 0.26), transparent 34%),
            radial-gradient(circle at 50% 92%, rgba(16, 185, 129, 0.16), transparent 30%),
            linear-gradient(135deg, #030712 0%, #07111f 48%, #0f2747 100%);
        }
        .nexus-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.38;
          background-image:
            linear-gradient(rgba(255,255,255,0.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.075) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 74%);
        }
        .hero-panel {
          min-height: calc(100vh - 2rem);
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(390px, 1fr);
          align-items: center;
          gap: clamp(2rem, 6vw, 6rem);
          width: min(1240px, 100%);
          margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 42px;
          padding: clamp(2rem, 5vw, 5rem);
          background: linear-gradient(140deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035));
          box-shadow: 0 36px 120px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.16);
          backdrop-filter: blur(22px);
        }
        .hero-panel::after {
          content: '';
          position: absolute;
          inset: 1.25rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 32px;
          pointer-events: none;
        }
        .hero-copy, .orbital-stage, .content-grid, .metric-strip { position: relative; z-index: 1; }
        .eyebrow {
          display: inline-flex;
          width: fit-content;
          margin: 0 0 1rem;
          padding: 0.55rem 0.85rem;
          border: 1px solid rgba(251, 191, 36, 0.34);
          border-radius: 999px;
          color: #fde68a;
          background: rgba(251, 191, 36, 0.08);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        h1 {
          margin: 0;
          font-size: clamp(3.15rem, 7vw, 7.35rem);
          line-height: 0.88;
          letter-spacing: -0.08em;
          max-width: 820px;
        }
        .hero-text {
          margin: 1.5rem 0 0;
          max-width: 620px;
          color: rgba(226,232,240,0.86);
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.75;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .primary-action, .launch-chip {
          border-radius: 999px;
          padding: 0.9rem 1.2rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .primary-action {
          color: #101827;
          background: linear-gradient(135deg, #fde68a, #fb923c);
          box-shadow: 0 20px 44px rgba(251,146,60,0.26);
        }
        .launch-chip {
          color: rgba(226,232,240,0.9);
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.07);
        }
        .orbital-stage {
          min-height: 650px;
          display: grid;
          place-items: center;
        }
        .orbit {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 46% 54% 52% 48%;
          animation: spin 18s linear infinite;
        }
        .orbit-one { width: min(520px, 92vw); height: min(520px, 92vw); }
        .orbit-two { width: min(660px, 110vw); height: min(420px, 72vw); animation-direction: reverse; opacity: 0.72; }
        .glass-dashboard {
          width: min(520px, 100%);
          transform: rotate(-4deg);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 34px;
          padding: 1rem;
          background: linear-gradient(145deg, rgba(15,23,42,0.88), rgba(15,23,42,0.54));
          box-shadow: 0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.16);
          backdrop-filter: blur(24px);
          animation: float 7s ease-in-out infinite;
        }
        .dash-top {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.7rem 0.8rem 1rem;
          color: rgba(226,232,240,0.72);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .dash-top span { width: 0.7rem; height: 0.7rem; border-radius: 999px; background: #fb7185; }
        .dash-top span:nth-child(2) { background: #fbbf24; }
        .dash-top span:nth-child(3) { background: #34d399; }
        .dash-top strong { margin-left: auto; }
        .dash-main-card, .mini-grid article, .wave-card, .feature-card, .metric-strip article {
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .dash-main-card {
          border-radius: 26px;
          padding: 1.25rem;
          background:
            radial-gradient(circle at 80% 20%, rgba(251,191,36,0.34), transparent 40%),
            linear-gradient(145deg, rgba(30,64,105,0.66), rgba(15,23,42,0.72));
        }
        .dash-main-card span, .mini-grid span, .wave-head span, .feature-card span, .metric-strip span {
          display: block;
          color: rgba(203,213,225,0.72);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .dash-main-card strong {
          display: block;
          margin-top: 0.8rem;
          font-size: 3.4rem;
          line-height: 1;
        }
        .meter { height: 0.62rem; margin-top: 1.2rem; border-radius: 999px; background: rgba(255,255,255,0.12); overflow: hidden; }
        .meter i { display: block; width: 92%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #fef3c7, #fb923c); animation: glow 2.8s ease-in-out infinite; }
        .mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-top: 0.8rem; }
        .mini-grid article { min-height: 112px; border-radius: 22px; padding: 1rem; }
        .mini-grid strong { display: block; margin-top: 1rem; font-size: 1.05rem; }
        .wave-card { margin-top: 0.8rem; border-radius: 26px; padding: 1.15rem; }
        .wave-head { display: flex; justify-content: space-between; gap: 1rem; }
        .wave-head strong { color: #fde68a; font-size: 0.86rem; }
        .bars { height: 140px; display: flex; align-items: end; gap: 0.75rem; margin-top: 1.5rem; }
        .bars i { flex: 1; border-radius: 999px 999px 0 0; background: linear-gradient(180deg, #fde68a, #fb923c); animation: rise 2.8s ease-in-out infinite; }
        .bars i:nth-child(2) { animation-delay: .15s; } .bars i:nth-child(3) { animation-delay: .3s; } .bars i:nth-child(4) { animation-delay: .45s; } .bars i:nth-child(5) { animation-delay: .6s; } .bars i:nth-child(6) { animation-delay: .75s; }
        .content-grid, .metric-strip {
          width: min(1240px, 100%);
          margin: 1.25rem auto 0;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 1.25rem;
        }
        .section-heading, .feature-card {
          border-radius: 30px;
          padding: clamp(1.35rem, 3vw, 2rem);
          border: 1px solid rgba(255,255,255,0.11);
          background: rgba(255,255,255,0.055);
        }
        .section-heading h2 { margin: 0; font-size: clamp(2rem, 4vw, 4rem); line-height: 0.98; letter-spacing: -0.05em; }
        .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .feature-card h3 { margin: 1.1rem 0 0.6rem; font-size: 1.25rem; }
        .feature-card p { margin: 0; color: rgba(226,232,240,0.72); font-size: 0.96rem; line-height: 1.6; }
        .metric-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding-bottom: 1.25rem; }
        .metric-strip article { border-radius: 26px; padding: 1.4rem; }
        .metric-strip strong { display: block; font-size: clamp(2rem, 5vw, 4rem); line-height: 1; letter-spacing: -0.06em; }
        .metric-strip span { margin-top: 0.7rem; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-18px) rotate(-2deg); } }
        @keyframes glow { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.35); } }
        @keyframes rise { 0%,100% { transform: scaleY(.92); } 50% { transform: scaleY(1.05); } }
        @media (max-width: 980px) {
          .hero-panel, .content-grid { grid-template-columns: 1fr; }
          .orbital-stage { min-height: 560px; }
        }
        @media (max-width: 680px) {
          .nexus-page { padding: 0.75rem; }
          .hero-panel { border-radius: 30px; padding: 2rem 1rem; }
          .hero-panel::after { display: none; }
          h1 { font-size: clamp(2.7rem, 16vw, 4.2rem); }
          .orbital-stage { min-height: auto; padding: 3rem 0 1rem; }
          .glass-dashboard { transform: none; }
          .mini-grid, .feature-grid, .metric-strip { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit, .glass-dashboard, .meter i, .bars i { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
