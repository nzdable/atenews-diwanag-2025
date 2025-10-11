"use client";
import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

export default function PageLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const waitForAllResources = async () => {
      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, { once: true });
        });
      }

      await new Promise((resolve) => setTimeout(resolve, 100));

      const images = Array.from(document.querySelectorAll("img"));
      const imagePromises = images.map((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          const onLoad = () => {
            cleanup();
            resolve(true);
          };
          const onError = () => {
            console.warn(`Failed to load image: ${img.src}`);
            cleanup();
            resolve(false);
          };
          const cleanup = () => {
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onError);
          };

          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onError, { once: true });

          setTimeout(() => {
            cleanup();
            resolve(false);
          }, 10000);
        });
      });

      const elementsWithBgImages = Array.from(
        document.querySelectorAll("[style*='background-image'], [class*='bg-']")
      );

      const bgImagePromises = elementsWithBgImages.map((element) => {
        const style = window.getComputedStyle(element);
        const bgImage = style.backgroundImage;

        const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (!match || bgImage === "none") {
          return Promise.resolve();
        }

        const imageUrl = match[1];

        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => {
            console.warn(`Failed to load background image: ${imageUrl}`);
            resolve(false);
          };
          img.src = imageUrl;

          setTimeout(() => resolve(false), 10000);
        });
      });

      await Promise.all([...imagePromises, ...bgImagePromises]);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false);
    };

    waitForAllResources();
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation isLoading={isLoading} />}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
