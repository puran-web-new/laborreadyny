const serviceCards = [
  {
    label: "Client notice",
    title: "Our digital office is being upgraded",
    text: "We are preparing a cleaner, faster online experience for accounting, tax, document intake, and client service updates.",
  },
  {
    label: "What to expect",
    title: "A polished client-first portal experience",
    text: "The new NEXUS Platform will make it easier to understand services, request support, and stay informed while the full build is completed.",
  },
  {
    label: "Availability",
    title: "Business support remains active",
    text: "While the website is under construction, clients can still contact Puran Accounting & Tax Solution Lab directly for assistance.",
  },
];

export default function HomePage() {
  return (
    <main className="site" aria-labelledby="page-title">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="hero-card">
        <nav className="nav" aria-label="Site status">
          <strong>Puran Accounting & Tax Solution Lab</strong>
          <span>NEXUS Platform</span>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Website under construction</p>
            <h1 id="page-title">A sleeker client experience is coming soon.</h1>
            <p className="lead">
              We are building the new Puran Accounting & Tax Solution Lab NEXUS Platform,
              a modern landing page and dashboard experience for accounting, tax, and
              client service information.
            </p>
            <div className="actions">
              <a href="mailto:info@puranaccounting.com" className="button-primary">
                Contact the office
              </a>
              <span className="button-ghost">Please check back soon</span>
            </div>
          </div>

          <div className="preview" aria-label="Construction status preview">
            <div className="preview-top">
              <span />
              <span />
              <span />
              <strong>Build Status</strong>
            </div>
            <div className="status-card">
              <span>Client platform rebuild</span>
              <strong>In Progress</strong>
              <div className="progress"><i /></div>
            </div>
            <div className="preview-list">
              <article>
                <span>Landing page</span>
                <strong>Designing</strong>
              </article>
              <article>
                <span>Client dashboard</span>
                <strong>Preparing</strong>
              </article>
              <article>
                <span>Service content</span>
                <strong>Updating</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="info-grid" aria-label="Construction details">
        {serviceCards.map((card) => (
          <article key={card.title}>
            <p>{card.label}</p>
            <h2>{card.title}</h2>
            <span>{card.text}</span>
          </article>
        ))}
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; }
        body {
          font-family: Inter, Arial, sans-serif;
          background: #07080d;
          color: #ffffff;
        }
        a { color: inherit; text-decoration: none; }
        .site {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.5rem);
          background:
            radial-gradient(circle at 18% 14%, rgba(226, 181, 104, 0.22), transparent 30%),
            radial-gradient(circle at 82% 20%, rgba(90, 115, 255, 0.22), transparent 30%),
            linear-gradient(135deg, #07080d 0%, #101524 48%, #161f32 100%);
        }
        .site::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.26;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(circle at center, #000, transparent 76%);
        }
        .ambient {
          position: fixed;
          width: 26rem;
          height: 26rem;
          border-radius: 999px;
          filter: blur(18px);
          opacity: .22;
          animation: drift 12s ease-in-out infinite;
        }
        .ambient-one { left: -9rem; top: 8rem; background: #f5b95f; }
        .ambient-two { right: -10rem; bottom: 5rem; background: #6d7cff; animation-delay: -5s; }
        .hero-card,
        .info-grid {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hero-card {
          min-height: calc(100vh - 2rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 38px;
          padding: clamp(1.25rem, 4vw, 4rem);
          background: linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.045));
          box-shadow: 0 40px 120px rgba(0,0,0,.48), inset 0 1px 0 rgba(255,255,255,.16);
          backdrop-filter: blur(24px);
        }
        .nav {
          position: absolute;
          top: clamp(1rem, 2vw, 1.5rem);
          left: clamp(1rem, 3vw, 2rem);
          right: clamp(1rem, 3vw, 2rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(255,255,255,.86);
          font-size: .9rem;
        }
        .nav strong { letter-spacing: -.02em; }
        .nav span {
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 999px;
          padding: .55rem .8rem;
          color: #f7dba7;
          background: rgba(255,255,255,.06);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, .98fr);
          align-items: center;
          gap: clamp(2rem, 5vw, 5rem);
          padding-top: 4rem;
        }
        .eyebrow {
          display: inline-flex;
          margin: 0 0 1rem;
          border: 1px solid rgba(245,185,95,.34);
          border-radius: 999px;
          padding: .55rem .85rem;
          color: #f7dba7;
          background: rgba(245,185,95,.09);
          font-size: .76rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(3.2rem, 7.2vw, 7.8rem);
          line-height: .86;
          letter-spacing: -.08em;
        }
        .lead {
          margin: 1.45rem 0 0;
          max-width: 620px;
          color: rgba(235,239,248,.82);
          font-size: clamp(1.05rem, 1.8vw, 1.24rem);
          line-height: 1.72;
        }
        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          margin-top: 2rem;
        }
        .button-primary,
        .button-ghost {
          border-radius: 999px;
          padding: .92rem 1.18rem;
          font-weight: 800;
        }
        .button-primary {
          color: #141414;
          background: linear-gradient(135deg, #ffe2a7, #f5a85f);
          box-shadow: 0 18px 42px rgba(245,168,95,.28);
        }
        .button-ghost {
          color: rgba(255,255,255,.86);
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
        }
        .preview {
          transform: rotate(-3deg);
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 34px;
          padding: 1rem;
          background: linear-gradient(145deg, rgba(18,24,40,.9), rgba(18,24,40,.54));
          box-shadow: 0 36px 90px rgba(0,0,0,.46), inset 0 1px 0 rgba(255,255,255,.14);
          backdrop-filter: blur(22px);
          animation: float 7s ease-in-out infinite;
        }
        .preview-top {
          display: flex;
          align-items: center;
          gap: .45rem;
          padding: .7rem .8rem 1rem;
          color: rgba(235,239,248,.7);
          font-size: .74rem;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .preview-top span {
          width: .7rem;
          height: .7rem;
          border-radius: 999px;
          background: #fb7185;
        }
        .preview-top span:nth-child(2) { background: #f5b95f; }
        .preview-top span:nth-child(3) { background: #34d399; }
        .preview-top strong { margin-left: auto; }
        .status-card,
        .preview-list article,
        .info-grid article {
          border: 1px solid rgba(255,255,255,.12);
          background: linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.045));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        }
        .status-card {
          border-radius: 26px;
          padding: 1.25rem;
          background:
            radial-gradient(circle at 80% 20%, rgba(245,185,95,.32), transparent 40%),
            linear-gradient(145deg, rgba(32,45,72,.82), rgba(18,24,40,.72));
        }
        .status-card span,
        .preview-list span,
        .info-grid p {
          display: block;
          margin: 0;
          color: rgba(211,218,232,.72);
          font-size: .74rem;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .status-card strong {
          display: block;
          margin-top: .85rem;
          font-size: clamp(2.5rem, 5vw, 4.3rem);
          line-height: 1;
          letter-spacing: -.06em;
        }
        .progress {
          height: .62rem;
          margin-top: 1.35rem;
          border-radius: 999px;
          background: rgba(255,255,255,.12);
          overflow: hidden;
        }
        .progress i {
          display: block;
          width: 78%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #ffe2a7, #f5a85f);
          animation: glow 2.8s ease-in-out infinite;
        }
        .preview-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: .8rem;
          margin-top: .8rem;
        }
        .preview-list article {
          min-height: 112px;
          border-radius: 22px;
          padding: 1rem;
        }
        .preview-list strong {
          display: block;
          margin-top: 1rem;
          font-size: 1.02rem;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.25rem;
          padding-bottom: 1.25rem;
        }
        .info-grid article {
          border-radius: 28px;
          padding: clamp(1.2rem, 2.5vw, 1.8rem);
        }
        .info-grid h2 {
          margin: 1rem 0 .8rem;
          font-size: clamp(1.45rem, 2.5vw, 2.1rem);
          line-height: 1.02;
          letter-spacing: -.045em;
        }
        .info-grid span {
          color: rgba(235,239,248,.76);
          line-height: 1.65;
        }
        @keyframes drift {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(28px,-20px,0) scale(1.08); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-16px) rotate(-1deg); }
        }
        @keyframes glow {
          0%,100% { filter: brightness(1); }
          50% { filter: brightness(1.35); }
        }
        @media (max-width: 920px) {
          .hero-grid,
          .info-grid { grid-template-columns: 1fr; }
          .preview { max-width: 620px; width: 100%; margin: 0 auto; }
        }
        @media (max-width: 640px) {
          .site { padding: .75rem; }
          .hero-card { border-radius: 28px; padding: 1rem; }
          .nav { position: relative; inset: auto; flex-direction: column; align-items: flex-start; margin-bottom: 2rem; }
          .hero-grid { padding-top: 0; }
          h1 { font-size: clamp(2.8rem, 16vw, 4.4rem); }
          .preview { transform: none; }
          .preview-list { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ambient,
          .preview,
          .progress i { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
