"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [hoveredDoor, setHoveredDoor] = useState<number | null>(null);

  return (
    <main
      className="bg-light"
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "8rem",
        alignItems: "center",
        background: "var(--bg-light)",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* MAIN TEXT */}
      <div
        className="main-text"
        style={{
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "8rem",
        }}
      >
        <h1
          className="main-title"
          style={{
            position: "relative",
            fontSize: "5rem",
            color: "var(--text-accent)",
            lineHeight: 0.5,
            zIndex: 1,
            background: "transparent",
          }}
        >
          Tinipong Alaala
        </h1>

        <div
          className="title-divider"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            zIndex: 1,
          }}
        >
          <hr
            style={{
              flex: 2,
              border: "none",
              borderTop: "1px solid var(--bg-light)",
            }}
          />

          <hr
            style={{
              flex: 1,
              border: "none",
              borderTop: "1px solid var(--text-accent)",
            }}
          />
          <p
            className="subtitle"
            style={{
              fontFamily: "averia-serif",
              fontSize: "16px",
              color: "var(--text-accent)",
              marginTop: "0.5rem",
              fontWeight: "300",
              margin: 0,
            }}
          >
            An Art Folio
          </p>
        </div>
      </div>
      {/* MOUNTAIN AND DOORS */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Mountain */}
        <img
          src="/group-5.png"
          alt="Tinipong Alaala Mountain"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
          }}
        />

        {/* Doors */}
        <div
          className="doors-container"
          style={{
            width: "100%",
            position: "absolute",
            bottom: "56%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3rem",
            zIndex: 1, // Behind mountain
            padding: "0 2rem",
          }}
        >
          {/* Door 1 - Prologue */}
          <div
            className="door-wrapper"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3rem",
            }}
            onMouseEnter={() => setHoveredDoor(1)}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div
              className="door-label"
              style={{
                position: "absolute",
                top: hoveredDoor === 1 ? "-2.5rem" : "0",
                opacity: hoveredDoor === 1 ? 1 : 0,
                transition: "top 0.4s ease, opacity 0.4s ease",
                color: "var(--text-accent)",
                padding: "0.5rem 1rem",
                fontSize: "1.25rem",
                fontFamily: "Averia Serif Libre",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                zIndex: 10,
                fontWeight: "500",
              }}
            >
              Prologue
            </div>
            <img
              src="/group-12.png"
              alt="Prologue Door"
              className="door door-1"
              style={{
                height: "auto",
                cursor: "pointer",
                pointerEvents: "auto",
                transition: "transform 0.2s ease, filter 0.2s ease",
                maxWidth: "200px",
                width: "100%",
                transform: hoveredDoor === 1 ? "scale(1.05)" : "scale(1)",
                filter: hoveredDoor === 1 ? "brightness(1.1)" : "brightness(1)",
              }}
              onClick={() => router.push("/prologue")}
            />
          </div>

          {/* Door 2 - Artworks */}
          <div
            className="door-wrapper"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onMouseEnter={() => setHoveredDoor(2)}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div
              className="door-label"
              style={{
                position: "absolute",
                top: hoveredDoor === 2 ? "-2.5rem" : "0",
                opacity: hoveredDoor === 2 ? 1 : 0,
                transition: "top 0.4s ease, opacity 0.4s ease",
                color: "var(--text-accent)",
                padding: "0.5rem 1rem",
                fontSize: "1.25rem",
                fontFamily: "Averia Serif Libre",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                zIndex: 10,
                fontWeight: "500",
              }}
            >
              Artworks
            </div>
            <img
              src="/group-12.png"
              alt="Artworks Door"
              className="door door-2"
              style={{
                height: "auto",
                cursor: "pointer",
                pointerEvents: "auto",
                transition: "transform 0.2s ease, filter 0.2s ease",
                maxWidth: "200px",
                width: "100%",
                transform: hoveredDoor === 2 ? "scale(1.05)" : "scale(1)",
                filter: hoveredDoor === 2 ? "brightness(1.1)" : "brightness(1)",
              }}
              onClick={() => router.push("/chap-1")}
            />
          </div>

          {/* Door 3 - Epilogue */}
          <div
            className="door-wrapper"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3rem",
            }}
            onMouseEnter={() => setHoveredDoor(3)}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div
              className="door-label"
              style={{
                position: "absolute",
                top: hoveredDoor === 3 ? "-2.5rem" : "0",
                opacity: hoveredDoor === 3 ? 1 : 0,
                transition: "top 0.4s ease, opacity 0.4s ease",
                color: "var(--text-accent)",
                padding: "0.5rem 1rem",
                fontSize: "1.25rem",
                fontFamily: "Averia Serif Libre",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                zIndex: 10,
                fontWeight: "500",
              }}
            >
              Epilogue
            </div>
            <img
              src="/group-12.png"
              alt="Epilogue Door"
              className="door door-3"
              style={{
                height: "auto",
                cursor: "pointer",
                pointerEvents: "auto",
                transition: "transform 0.2s ease, filter 0.2s ease",
                maxWidth: "200px",
                width: "100%",
                transform: hoveredDoor === 3 ? "scale(1.05)" : "scale(1)",
                filter: hoveredDoor === 3 ? "brightness(1.1)" : "brightness(1)",
              }}
              onClick={() => router.push("/epilogue")}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Large Desktop */
        @media (min-width: 1500px) {
          .main-title {
            font-size: 5rem !important;
          }

          .doors-container {
            gap: 3rem !important;
            bottom: 64% !important;
          }

          .door {
            max-width: 120px !important;
          }
        }

        /* Desktop */
        @media (max-width: 1199px) and (min-width: 992px) {
          .main-title {
            font-size: 4.5rem !important;
          }

          .doors-container {
            gap: 2.5rem !important;
          }

          .door {
            max-width: 110px !important;
          }
        }

        /* Tablet */
        @media (max-width: 991px) and (min-width: 768px) {
          main {
            gap: 6rem !important;
            padding-top: 6rem !important;
          }

          .main-title {
            font-size: 3.5rem !important;
            line-height: 0.7 !important;
          }

          .subtitle {
            font-size: 14px !important;
          }

          .doors-container {
            gap: 2rem !important;
            bottom: 57% !important;
          }

          .door {
            max-width: 90px !important;
          }

          .door-wrapper:nth-child(1),
          .door-wrapper:nth-child(3) {
            margin-top: 2rem !important;
          }

          .door-label {
            font-size: 0.8rem !important;
            top: -2rem !important;
          }

          .door-wrapper:hover .door-label {
            top: -2rem !important;
          }
        }

        /* Mobile Large */
        @media (max-width: 767px) and (min-width: 576px) {
          main {
            gap: 4rem !important;
            padding-top: 4rem !important;
          }

          .main-title {
            font-size: 2.8rem !important;
            line-height: 0.8 !important;
          }

          .subtitle {
            font-size: 13px !important;
          }

          .title-divider {
            max-width: 400px !important;
          }

          .doors-container {
            gap: 1.5rem !important;
            bottom: 57% !important;
          }

          .door {
            max-width: 70px !important;
          }

          .door-wrapper:nth-child(1),
          .door-wrapper:nth-child(3) {
            margin-top: 1.5rem !important;
          }

          .door-label {
            font-size: 0.75rem !important;
            top: -1.8rem !important;
          }

          .door-wrapper:hover .door-label {
            top: -1.8rem !important;
          }
        }
        /* Mobile */
        @media (max-width: 575px) {
          main {
            gap: 3rem !important;
            padding-top: 3rem !important;
          }

          .main-title {
            font-size: 2.2rem !important;
            line-height: 1 !important;
          }

          .subtitle {
            font-size: 12px !important;
          }

          .title-divider {
            max-width: 300px !important;
            gap: 0.5rem !important;
          }

          .main-text {
            height: auto !important;
            min-height: 15vh !important;
          }

          .doors-container {
            gap: 1rem !important;
            bottom: 56% !important;
          }

          .door {
            max-width: 55px !important;
          }

          .door-wrapper:nth-child(1),
          .door-wrapper:nth-child(3) {
            margin-top: 1rem !important;
          }

          .door-label {
            font-size: 0.7rem !important;
            top: -1.5rem !important;
          }

          .door-wrapper:hover .door-label {
            top: -1.5rem !important;
          }
        }
        /* Mobile Small */
        @media (max-width: 400px) {
          .main-title {
            font-size: 1.8rem !important;
          }

          .doors-container {
            gap: 0.8rem !important;
            bottom: 56% !important;
          }

          .door {
            max-width: 45px !important;
          }

          .door-wrapper:nth-child(1),
          .door-wrapper:nth-child(3) {
            margin-top: 0.8rem !important;
          }

          .door-label {
            font-size: 0.65rem !important;
            top: -1.3rem !important;
          }

          .door-wrapper:hover .door-label {
            top: -1.3rem !important;
          }
        }

        /* Mobile Very Small */
        @media (max-width: 350px) {
          .main-title {
            font-size: 1.5rem !important;
          }

          .subtitle {
            font-size: 10px !important;
          }

          .doors-container {
            gap: 0.5rem !important;
            bottom: 60% !important;
          }

          .door {
            max-width: 40px !important;
          }

          .door-wrapper:nth-child(1),
          .door-wrapper:nth-child(3) {
            margin-top: 0.5rem !important;
          }

          .door-label {
            font-size: 0.6rem !important;
            top: -1.2rem !important;
          }

          .door-wrapper:hover .door-label {
            top: -1.2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
