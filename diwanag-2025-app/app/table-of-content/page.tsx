"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Artwork = {
  artTitle: string;
  author: string;
  "art-image": string;
  artDescription: string;
  chapter: string;
};

type ChapterArtworks = Record<string, Artwork[]>;

type TocItem = {
  title: string;
  path?: string;
  description?: string;
  artworks?: Array<{ title: string; path: string }>;
};

export default function TableOfContents() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<
    Record<number, boolean>
  >({});
  const [chapters, setChapters] = useState<ChapterArtworks>({});
  const router = useRouter();

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        // Group artworks by chapter
        const grouped: ChapterArtworks = {};
        data.forEach((art) => {
          if (!grouped[art.chapter]) grouped[art.chapter] = [];
          grouped[art.chapter].push(art);
        });
        setChapters(grouped);
      });
  }, []);

  // Unified TOC items for navigation and artwork display
  const tocItems = [
    {
      title: "Prologue",
      path: "/prologue",
      description: "",
      isClickable: true,
    },
    {
      title: "Chapter 1",
      path: "/chap-1",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 1"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-1/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 2",
      path: "/chap-2",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 2"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-2/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 3",
      path: "/chap-3",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 3"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-3/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 4",
      path: "/chap-4",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 4"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-4/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 5",
      path: "/chap-5",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 5"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-5/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 6",
      path: "/chap-6",
      description: "",
      isClickable: true,
      artworks:
        chapters["Chapter 6"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-6/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Epilogue",
      path: "/epilogue",
      description: "",
      isClickable: true,
      artworks:
        chapters["Epilogue"]?.map((art) => ({
          title: art.artTitle,
          path: `/epilogue/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },

    {
      title: "Contributors",
      path: "/staff",
      description: "",
      isClickable: true,
      artworks:
        chapters["Contributors"]?.map((art) => ({
          title: art.artTitle,
          path: `/staff`,
        })) || [],
    },
  ];

  const toggleToc = () => setIsTocOpen(!isTocOpen);

  const handleChapterClick = (item: TocItem) => {
    if (item.path) {
      router.push(item.path);
      setIsTocOpen(false);
    }
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setIsTocOpen(false);
  };

  // Handles toggling the expanded state of a chapter (arrow click)
  const handleExpandToggle = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={toggleToc}
        className="fixed top-8 left-8 z-[1000] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-accent)] text-[var(--bg-light)] text-xl hover:bg-[#4A3426] transition-opacity duration-200 cursor-pointer"
      >
        {isTocOpen ? (
          <svg width="24" height="24" fill="none">
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none">
            <rect
              x="4"
              y="6"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="11"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="16"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isTocOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50"
          onClick={toggleToc}
        />
      )}

      {/* Side Panel */}
      <aside
        className={`fixed top-0 left-0 z-[999] h-screen w-[350px] bg-[var(--bg-light)] p-8 transition-transform duration-300 ${
          isTocOpen ? "translate-x-0" : "-translate-x-[350px]"
        }`}
      >
        {/* Header */}
        <header
          className="main-text"
          onClick={() => {
            router.push("/");
            setIsTocOpen(false);
          }}
          style={{
            marginTop: "5rem",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
            justifyContent: "center",
            alignContent: "center",
            height: "auto",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          <h1
            className="main-title"
            style={{
              position: "relative",
              fontSize: "3rem",
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
        </header>

        <p className="mt-4 border-b border-[var(--accent-gold)]" />

        {/* TOC Items */}
        <nav className="flex flex-col gap-1 font-['averia-serif'] overflow-y-auto h-[calc(100%-8rem)] scrollbar-hidden">
          {tocItems.map((item, index) => (
            <div key={item.title}>
              {/* Chapter Header */}
              <div className="rounded-md p-3 text-[var(--text-accent)] hover:bg-black/5 transition mb-2">
                <div className="flex items-center justify-between mb-1">
                  <h3
                    onClick={() => handleChapterClick(item)}
                    className="m-0 text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {item.title}
                  </h3>
                  {/* Show arrow only for items with artworks */}
                  {item.artworks && item.artworks.length > 0 && (
                    <span
                      onClick={(e) => handleExpandToggle(index, e)}
                      className={`cursor-pointer transform transition-transform hover:opacity-80 ${
                        expandedChapters[index] ? "rotate-90" : ""
                      }`}
                    >
                      <svg width="18" height="18" fill="none">
                        <path
                          d="M7 5l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="ml-8 text-sm opacity-70">{item.description}</p>
              </div>

              {/* Artworks */}
              {expandedChapters[index] &&
                item.artworks &&
                item.artworks.length > 0 && (
                  <div className="ml-4 mb-2 rounded-r-md border-l-2 border-[var(--text-accent)] pl-4">
                    {item.artworks.map(
                      (
                        artwork: { title: string; path: string },
                        artIndex: number
                      ) => (
                        <div
                          key={artwork.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateTo(artwork.path);
                          }}
                          className="flex items-center gap-2 cursor-pointer rounded-md px-4 py-2 text-[var(--text-accent)] text-sm hover:bg-black/5 transition"
                        >
                          <span className="w-4 text-xs opacity-60">
                            {artIndex + 1}.
                          </span>
                          <span>{artwork.title}</span>
                        </div>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </nav>
        <p className="mt-4 border-b border-[var(--accent-gold)]" />
      </aside>

      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </>
  );
}
