import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";

type Achievement = {
  id: string;
  title: string;
  issuer: string;
  university: string;
  result: string;
  issued: string;
  expires?: string;
  credentialId: string;
  pdfPath: string;
  download: string;
  color: string; // accent gradient color pair
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hidevs",
    title: "Cod-A-Fest 3.0",
    issuer: "LYNQUP PRIVATE LIMITED",
    university: "Lovely Professional University",
    result: "🏆 Won the Hackathon",
    issued: "Feb 2026",
    credentialId: "CAF3-2026-071",
    pdfPath: "/HiDevs-Cod-A-Fest-3.0.pdf",
    download: "HiDevs-Cod-A-Fest-3.0-Certificate.pdf",
    color: "#f59e0b, #ef4444",
  },
  {
    id: "d4community",
    title: "Hackathon — Runner Up",
    issuer: "D4 Community",
    university: "CGC University Mohali",
    result: "🥈 Secured Runner Up",
    issued: "Mar 2026",
    credentialId: "HNW03D4-2026-03-47702542",
    pdfPath: "/Alok-Kumar-HNW03D42026-certificate.pdf",
    download: "Alok-Kumar-HNW03D4-Certificate.pdf",
    color: "#a3e635, #059669",
  },
  {
    id: "iiit-nagpur",
    title: "Hackathon",
    issuer: "Training and Placement Cell, IIIT Nagpur",
    university: "IIIT Nagpur",
    result: "🥉 Secured 3rd Position",
    issued: "Sep 2025",
    expires: "Sep 2025",
    credentialId: "—",
    pdfPath: "/iiit-nagpur.pdf",
    download: "IIIT-Nagpur-Hackathon-Certificate.pdf",
    color: "#818cf8, #6366f1",
  },
];

export default function AchievementsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-14 md:px-20">
      <AnimatePresence>
        {/* Heading */}
        <FadeUp key="ach-heading" duration={0.6}>
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">
              Achievements &amp; Certifications
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              Hackathons competed and recognized — here&apos;s proof of work.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <FadeUp key="ach-grid" duration={0.6} delay={0.2}>
          <div className="ach-grid">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="ach-card">
                {/* Top accent bar */}
                <div
                  className="ach-bar"
                  style={{
                    background: `linear-gradient(90deg, ${ach.color})`,
                  }}
                />

                {/* PDF Thumbnail */}
                <div className="ach-thumb-wrapper">
                  <iframe
                    src={`${ach.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={`${ach.title} Certificate`}
                    className="ach-iframe"
                  />
                  <div className="ach-thumb-overlay" />
                </div>

                {/* Info */}
                <div className="ach-body">
                  <div className="ach-result">{ach.result}</div>

                  <div className="ach-title">{ach.title}</div>

                  <div className="ach-row">
                    {/* University */}
                    <span className="ach-tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ach-tag-icon">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      {ach.university}
                    </span>
                  </div>

                  <div className="ach-row">
                    {/* Issuer */}
                    <span className="ach-tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ach-tag-icon">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      {ach.issuer}
                    </span>
                  </div>

                  <div className="ach-meta-row">
                    <span className="ach-meta-item">
                      <span className="ach-meta-label">Issued</span>
                      <span className="ach-meta-value">{ach.issued}</span>
                    </span>
                    {ach.expires && (
                      <span className="ach-meta-item">
                        <span className="ach-meta-label">Expires</span>
                        <span className="ach-meta-value">{ach.expires}</span>
                      </span>
                    )}
                  </div>

                  {ach.credentialId !== "—" && (
                    <p className="ach-credential">
                      ID:{" "}
                      <span className="ach-credential-value">
                        {ach.credentialId}
                      </span>
                    </p>
                  )}

                  {/* Download */}
                  <a
                    href={ach.pdfPath}
                    download={ach.download}
                    className="ach-download-btn"
                    style={{
                      background: `linear-gradient(135deg, ${ach.color})`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ach-btn-icon"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </AnimatePresence>

      <style jsx>{`
        /* ── Grid ─────────────────────────────── */
        .ach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .ach-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ach-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Card ─────────────────────────────── */
        .ach-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(10px);
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ach-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        /* ── Accent top bar ───────────────────── */
        .ach-bar {
          height: 4px;
          width: 100%;
          flex-shrink: 0;
        }

        /* ── PDF Thumbnail ────────────────────── */
        .ach-thumb-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          background: #fff;
          overflow: hidden;
          flex-shrink: 0;
        }

        .ach-iframe {
          width: 130%;
          height: 130%;
          border: none;
          display: block;
          transform: scale(0.77);
          transform-origin: top left;
          pointer-events: none;
        }

        .ach-thumb-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          /* subtle bottom fade so card body transitions smoothly */
          background: linear-gradient(
            to bottom,
            transparent 70%,
            rgba(0, 0, 0, 0.08) 100%
          );
        }

        /* ── Body ─────────────────────────────── */
        .ach-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1.1rem 1.1rem 1.2rem;
          flex: 1;
        }

        .ach-result {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #e4e4e7;
        }

        .ach-title {
          font-size: 1rem;
          font-weight: 700;
          color: inherit;
          line-height: 1.3;
        }

        .ach-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .ach-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 500;
          color: #a1a1aa;
          line-height: 1.4;
        }

        .ach-tag-icon {
          width: 0.85rem;
          height: 0.85rem;
          flex-shrink: 0;
          opacity: 0.7;
        }

        .ach-meta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.1rem;
        }

        .ach-meta-item {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .ach-meta-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #71717a;
          font-weight: 600;
        }

        .ach-meta-value {
          font-size: 0.78rem;
          font-weight: 600;
          color: #d4d4d8;
        }

        .ach-credential {
          font-size: 0.68rem;
          color: #71717a;
          margin: 0;
          word-break: break-all;
        }

        .ach-credential-value {
          color: #a1a1aa;
          font-weight: 600;
        }

        /* ── Download Button ──────────────────── */
        .ach-download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-top: auto;
          padding: 0.55rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .ach-download-btn:hover {
          transform: translateY(-1px);
          opacity: 0.9;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .ach-download-btn:active {
          transform: translateY(0);
        }

        .ach-btn-icon {
          width: 0.9rem;
          height: 0.9rem;
        }
      `}</style>
    </section>
  );
}
