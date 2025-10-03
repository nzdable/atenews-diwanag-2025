"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function ProloguePage() {
  const router = useRouter();
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F1E8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/diwanag prologue 3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 2rem 2rem 2rem",
          boxSizing: "border-box",
        }}
      >
        {/* Prologue Title */}
        <div>
          <h1
            style={{
              fontSize: "5rem",
              color: "#8B4513",
              fontStyle: "italic",
              margin: 0,
              marginLeft: "7.5rem",
              marginBottom: "2rem",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Prologue
          </h1>
        </div>

        {/* Text Content in Two Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            maxWidth: "1200px",
            alignSelf: "center",
            flex: 1,
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <p
              style={{
                color: "#5D4037",
                fontSize: "17px",
                lineHeight: "1.8",
                fontFamily: "averif-serif",
                margin: 0,
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  float: "left",
                  fontSize: "3.5rem",
                  lineHeight: "2.5rem",
                  paddingRight: "0.5rem",
                  paddingTop: "0.2rem",
                  color: "#8B4513",
                  fontWeight: "bold",
                }}
              >
                B
              </span>
              uried within the shadowed recesses of our beings lies a vast trove
              of memories—some unvarnished, others forged—each imbued with the
              boundless tales of our daily lives. These memories coalesce into a
              mosaic, piecing together the moments that define our very
              existence. They beckon us to immortalize these surviving fragments
              of bygone eras.
            </p>

            <p
              style={{
                color: "#5D4037",
                fontSize: "17px",
                lineHeight: "1.8",
                fontFamily: "averif-serif",
                margin: 0,
                textAlign: "justify",
              }}
            >
              Amongst us, many carry the imprints of one another upon our
              souls—a remnant from a life lived together, a love shared so
              deeply it lingered forever. Be that as it may, it is crucial to
              understand that our individual tales do not unfold in isolation.
              We are, in essence, repositories of memory; we drag about hither
              and thither, accruing more and more as we go, losing a few,
              dropping some, but never entirely losing them.
            </p>
          </div>

          {/* Right Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <p
              style={{
                color: "#5D4037",
                fontSize: "17px",
                lineHeight: "1.8",
                fontFamily: "averif-serif",
                margin: 0,
                textAlign: "justify",
              }}
            >
              The specter of forgetting looms large, and there is much wisdom to
              be acquired from our history—if only we allow it to reveal itself
              to us. It demands a formidable strength to hold fast to those
              fragments that mold our identities, for it is through remembrance
              that we rediscover one another in this vast expanse of existence.
            </p>

            <p
              style={{
                color: "#5D4037",
                fontSize: "17px",
                lineHeight: "1.8",
                fontFamily: "averif-serif",
                margin: 0,
                textAlign: "justify",
              }}
            >
              This Diwanag 2025: Tinipong Alaala—let us, in this hallowed
              moment, enshrine these surviving vestiges of yore. Now more than
              ever, may the wisdom of the past humanize us as we roam the
              labyrinth of memories and connections.
            </p>
          </div>
        </div>

        {/* Editor Credit */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "4rem",
            textAlign: "right",
          }}
        >
          <p
            style={{
              color: "#E8E8E8",
              fontSize: "20px",
              fontFamily: "averif-serif",
              fontWeight: "500",
            }}
          >
            Elliot Dimasuhid
          </p>
          <p
            style={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "averif-serif",
              fontStyle: "italic",
            }}
          >
            Associate Editor & Art Editor For Cartoon
          </p>
          <p
            style={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "averif-serif",
              margin: 0,
            }}
          >
            AY 2024-2025
          </p>
        </div>

        {/* Navigation Button */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button
            onClick={() => router.push("/chap-1")}
            style={{
              backgroundColor: "var(--accent-brown-dark)",
              color: "var(--text-light)",
              padding: "0.5rem 1rem",
              fontSize: "1.2rem",
              minWidth: "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4A3426";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(74, 52, 38, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--accent-brown-dark)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(74, 52, 38, 0.3)";
            }}
          >
            Begin Chapter 1 →
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent)",
          borderRadius: "50%",
          zIndex: 2,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "60px",
          height: "60px",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent)",
          borderRadius: "50%",
          zIndex: 2,
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          main > div:last-child > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          main > div:last-child {
            padding: 2rem 1.5rem !important;
          }

          main > div:last-child > div:first-child h1 {
            font-size: 3rem !important;
          }

          main > div:last-child > div:last-child {
            position: static !important;
            margin-top: 2rem !important;
            align-self: center !important;
          }
        }
      `}</style>
    </main>
  );
}
