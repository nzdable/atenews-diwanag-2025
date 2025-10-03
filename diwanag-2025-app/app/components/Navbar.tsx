"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isDarkPage = pathname === "/epilogue" || pathname === "/staff";
  const isChapter1 = pathname === "/chap-1" || pathname === "/chap-2";
  const isChapter3 = pathname === "/chap-3" || pathname === "/chap-4";
  const isChapter3Artwork =
    pathname.startsWith("/chap-3/") || pathname.startsWith("/chap-4/");
  const isChapter5And6 = pathname === "/chap-5" || pathname === "/chap-6";
  const isChapter5And6Artwork =
    pathname.startsWith("/chap-5/") || pathname.startsWith("/chap-6/");

  return (
    <nav
      className="flex justify-end"
      aria-label="Main navigation"
      style={{
        background: isChapter1
          ? "#B79668"
          : isChapter3
          ? "#4871BA"
          : isChapter3Artwork
          ? "#4E79AE"
          : isChapter5And6
          ? "#070B12"
          : isChapter5And6Artwork
          ? "#05111C"
          : isDarkPage
          ? "#0B141D"
          : "var(--bg-light)",
        padding: "1rem 0",
        letterSpacing: "0.05em",
        position:
          isDarkPage ||
          isChapter1 ||
          isChapter3 ||
          isChapter3Artwork ||
          isChapter5And6 ||
          isChapter5And6Artwork
            ? "fixed"
            : "static",
        top:
          isDarkPage ||
          isChapter1 ||
          isChapter3 ||
          isChapter3Artwork ||
          isChapter5And6 ||
          isChapter5And6Artwork
            ? "0"
            : "auto",
        width: "100%",
        zIndex:
          isDarkPage ||
          isChapter1 ||
          isChapter3 ||
          isChapter3Artwork ||
          isChapter5And6 ||
          isChapter5And6Artwork
            ? "1000"
            : "auto",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "3rem",
          listStyle: "none",
          padding: "0 2rem",
          margin: 0,
          alignItems: "center",
          fontFamily: "Averia Serif Libre",
        }}
      >
        <li>
          <Link
            href="/landing"
            className="hover:border-b-2"
            style={{
              color: isChapter1
                ? "#4A3426"
                : isChapter3 ||
                  isChapter3Artwork ||
                  isChapter5And6 ||
                  isChapter5And6Artwork
                ? "var(--text-light)"
                : isDarkPage
                ? "#D4AF37"
                : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:border-b-2"
            style={{
              color: isChapter1
                ? "#4A3426"
                : isChapter3 ||
                  isChapter3Artwork ||
                  isChapter5And6 ||
                  isChapter5And6Artwork
                ? "var(--text-light)"
                : isDarkPage
                ? "#D4AF37"
                : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/staff"
            className="hover:border-b-2"
            style={{
              color: isChapter1
                ? "#4A3426"
                : isChapter3 ||
                  isChapter3Artwork ||
                  isChapter5And6 ||
                  isChapter5And6Artwork
                ? "var(--text-light)"
                : isDarkPage
                ? "#D4AF37"
                : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Staff
          </Link>
        </li>
      </ul>
    </nav>
  );
}
