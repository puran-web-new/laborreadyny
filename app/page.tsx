export default function HomePage() {
  return (
    <main className="nexus-shell" aria-labelledby="nexus-title">
      <div className="nexus-orb nexus-orb-one" aria-hidden="true" />
      <div className="nexus-orb nexus-orb-two" aria-hidden="true" />

      <section className="nexus-hero">
        <div className="nexus-copy">
          <span className="nexus-eyebrow">Puran Accounting & Tax Solution Lab</span>
          <h1 id="nexus-title">NEXUS Platform is under construction.</h1>
          <p>
            Puran Accounting & Tax Solution Lab NEXUS Platform is being refined into a sleek,
            animated, and executive-ready dashboard built for clarity, performance, and a
            first-class user experience. Please check back soon.
          </p>
          <div className="nexus-status">Professional launch page active</div>
        </div>

        <div className="nexus-dashboard" aria-label="Animated NEXUS dashboard preview">
          <div className="nexus-topbar">
            <span />
            <span />
            <span />
            <strong>NEXUS preview</strong>
          </div>
          <div className="nexus-grid">
            <article className="nexus-card nexus-card-wide">
              <span>Launch readiness</span>
              <strong>86%</strong>
              <div className="nexus-progress"><i /></div>
            </article>
            <article className="nexus-card">
              <span>Design polish</span>
              <strong>Premium</strong>
              <div className="nexus-pulse" />
            </article>
            <article className="nexus-card">
              <span>Review status</span>
              <strong>Active</strong>
              <div className="nexus-dots"><i /><i /><i /></div>
            </article>
            <article className="nexus-chart">
              <div className="nexus-chart-head">
                <span>Experience quality</span>
                <strong>Trending up</strong>
              </div>
              <div className="nexus-bars" aria-hidden="true">
                <i style={{ height: "36%" }} />
                <i style={{ height: "58%" }} />
                <i style={{ height: "44%" }} />
                <i style={{ height: "76%" }} />
                <i style={{ height: "64%" }} />
                <i style={{ height: "92%" }} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; }
        body {
          font-family: Inter, Arial, sans-serif;
          color: #fff;
          background: #050b18;
        }
        .nexus-shell {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 4rem 1.25rem;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 190, 69, 0.18), transparent 34%),
            radial-gradient(circle at 84% 24%, rgba(80, 146, 255, 0.22), transparent 38%),
            linear-gradient(135deg, #050b18 0%, #071426 48%, #10294a 100%);
        }
        .nexus-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.34;
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 72%);
        }
        .nexus-orb {
          position: absolute;
          width: 22rem;
          height: 22rem;
          border-radius: 999px;
          filter: blur(18px);
          opacity: 0.22;
          animation: nexus-orbit 12s ease-in-out infinite;
        }
        .nexus-orb-one { left: -7rem; top: 8rem; background: #ff9f1c; }
        .nexus-orb-two { right: -7rem; bottom: 6rem; background: #3b82f6; animation-delay: -5s; }
        .nexus-hero {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .nexus-copy { max-width: 650px; }
        .nexus-eyebrow, .nexus-status {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          border: 1px solid rgba(255, 190, 69, 0.35);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffcf72;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }
        .nexus-eyebrow { margin-bottom: 1.15rem; padding: 0.5rem 0.85rem; }
        .nexus-status { margin-top: 2rem; padding: 0.7rem 1rem; color: #dff7ec; border-color: rgba(52, 211, 153, 0.34); }
        .nexus-eyebrow::before, .nexus-status::before {
          content: '';
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: #34d399;
          box-shadow: 0 0 18px rgba(52, 211, 153, 0.85);
          animation: nexus-ping 1.6s ease-in-out infinite;
        }
        h1 {
          margin: 0;
          font-size: clamp(3rem, 7vw, 6.9rem);
          line-height: 0.92;
          letter-spacing: -0.07em;
          text-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
        }
        p {
          margin: 1.5rem 0 0;
          max-width: 590px;
          color: rgba(226, 232, 240, 0.86);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.65;
        }
        .nexus-dashboard {
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 32px;
          padding: 1rem;
          background: linear-gradient(140deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06)), rgba(8, 21, 41, 0.72);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.44), inset 0 1px 0 rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(22px);
          animation: nexus-float 7s ease-in-out infinite;
        }
        .nexus-dashboard::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 190, 69, 0.8), transparent 38%, rgba(70, 148, 255, 0.75));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .nexus-topbar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 0.9rem 1.1rem;
          color: rgba(226, 232, 240, 0.78);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .nexus-topbar span { width: 0.72rem; height: 0.72rem; border-radius: 999px; background: #ff6b35; }
        .nexus-topbar span:nth-child(2) { background: #ffcf72; }
        .nexus-topbar span:nth-child(3) { background: #34d399; }
        .nexus-topbar strong { margin-left: auto; font-size: 0.72rem; }
        .nexus-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
        .nexus-card, .nexus-chart {
          min-height: 150px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 1.15rem;
          background: linear-gradient(145deg, rgba(15, 34, 62, 0.92), rgba(13, 25, 48, 0.76));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .nexus-card-wide { grid-column: span 2; background: radial-gradient(circle at 84% 20%, rgba(255, 190, 69, 0.32), transparent 38%), linear-gradient(145deg, rgba(23, 45, 78, 0.96), rgba(13, 25, 48, 0.78)); }
        .nexus-card span, .nexus-chart-head span { display: block; color: rgba(203, 213, 225, 0.72); font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
        .nexus-card strong { display: block; margin-top: 0.85rem; color: #fff; font-size: clamp(1.55rem, 3vw, 2.45rem); line-height: 1; }
        .nexus-progress { height: 0.58rem; margin-top: 1.45rem; border-radius: 999px; background: rgba(255, 255, 255, 0.12); overflow: hidden; }
        .nexus-progress i { display: block; width: 86%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #ffcf72, #ff6b35); box-shadow: 0 0 22px rgba(255, 155, 53, 0.6); animation: nexus-glow 2.8s ease-in-out infinite; }
        .nexus-pulse { height: 52px; margin-top: 1.2rem; background: linear-gradient(90deg, transparent, rgba(255, 190, 69, 0.95), transparent); clip-path: polygon(0 62%, 14% 62%, 22% 32%, 32% 78%, 45% 45%, 57% 45%, 66% 22%, 77% 68%, 100% 68%); animation: nexus-scan 2.4s linear infinite; }
        .nexus-dots { display: flex; gap: 0.65rem; margin-top: 1.55rem; }
        .nexus-dots i { width: 0.85rem; height: 0.85rem; border-radius: 999px; background: #34d399; box-shadow: 0 0 20px rgba(52, 211, 153, 0.75); animation: nexus-ping 1.4s ease-in-out infinite; }
        .nexus-dots i:nth-child(2) { animation-delay: 0.2s; }
        .nexus-dots i:nth-child(3) { animation-delay: 0.4s; }
        .nexus-chart { grid-column: 1 / -1; min-height: 240px; }
        .nexus-chart-head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .nexus-chart-head strong { color: #ffcf72; font-size: 0.86rem; }
        .nexus-bars { height: 150px; display: flex; align-items: end; gap: 0.85rem; margin-top: 1.8rem; padding: 0 0.35rem; }
        .nexus-bars i { flex: 1; min-width: 24px; border-radius: 999px 999px 0 0; background: linear-gradient(180deg, #ffcf72, #ff6b35 62%, rgba(255, 107, 53, 0.22)); box-shadow: 0 0 28px rgba(255, 143, 53, 0.34); animation: nexus-rise 2.8s ease-in-out infinite; }
        .nexus-bars i:nth-child(2) { animation-delay: 0.15s; }
        .nexus-bars i:nth-child(3) { animation-delay: 0.3s; }
        .nexus-bars i:nth-child(4) { animation-delay: 0.45s; }
        .nexus-bars i:nth-child(5) { animation-delay: 0.6s; }
        .nexus-bars i:nth-child(6) { animation-delay: 0.75s; }
        @keyframes nexus-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes nexus-orbit { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(28px, -22px, 0) scale(1.08); } }
        @keyframes nexus-ping { 0%, 100% { transform: scale(1); opacity: 0.75; } 50% { transform: scale(1.35); opacity: 1; } }
        @keyframes nexus-glow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.35); } }
        @keyframes nexus-scan { 0% { opacity: 0.45; transform: translateX(-14px); } 50% { opacity: 1; } 100% { opacity: 0.45; transform: translateX(14px); } }
        @keyframes nexus-rise { 0%, 100% { transform: scaleY(0.92); filter: brightness(0.95); } 50% { transform: scaleY(1.04); filter: brightness(1.25); } }
        @media (max-width: 960px) { .nexus-hero { grid-template-columns: 1fr; } .nexus-dashboard { max-width: 680px; width: 100%; margin: 0 auto; } }
        @media (max-width: 640px) { .nexus-shell { padding: 3rem 1rem; } h1 { font-size: clamp(2.55rem, 16vw, 4rem); } .nexus-grid { grid-template-columns: 1fr; } .nexus-card-wide, .nexus-chart { grid-column: auto; } .nexus-chart-head { align-items: flex-start; flex-direction: column; } }
        @media (prefers-reduced-motion: reduce) { .nexus-orb, .nexus-dashboard, .nexus-eyebrow::before, .nexus-status::before, .nexus-progress i, .nexus-pulse, .nexus-dots i, .nexus-bars i { animation: none !important; } }
      `}</style>
    </main>
  );
}
