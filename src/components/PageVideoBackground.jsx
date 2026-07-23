import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Apple-style scroll-scrubbed video background.
 * Pass `clip` to pick which asset (one per page).
 */
export const VIDEO_CLIPS = {
  cinematic: "/video/apple-cinematic.mp4", // Home — ARRI cinematic
  cinematicCut: "/video/apple-cinematic-cut.mp4", // Contact — cut-edited cinematic
  reveal: "/video/apple-reveal.mp4", // Portfolio / Team — Vision Pro reveal
  minimal: "/video/apple-minimal.mp4", // Solutions — clean product
  systems: "/video/apple-systems.mp4", // Services — system-building
};

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

const PageVideoBackground = ({ clip = "cinematic" }) => {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const durationRef = useRef(12);
  const rafRef = useRef(null);
  const src = VIDEO_CLIPS[clip] || VIDEO_CLIPS.cinematic;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        durationRef.current = video.duration;
      }
      try {
        video.currentTime = 0.001;
      } catch {
        /* ignore */
      }
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.load();

    const applyScroll = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = clamp(window.scrollY / maxScroll, 0, 0.9999);
      const duration = durationRef.current || 12;
      const t = clamp(progress * duration, 0, Math.max(0, duration - 0.05));

      if (Math.abs((video.currentTime || 0) - t) > 0.03) {
        try {
          video.currentTime = t;
        } catch {
          /* seek not ready */
        }
      }

      const track = rootRef.current?.querySelector(".page-video-bg__track");
      if (track) {
        const y = -window.scrollY * 0.06;
        const scale = 1.05 + progress * 0.05;
        track.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      }

      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(applyScroll);
      }
    };

    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [prefersReducedMotion, src]);

  if (prefersReducedMotion) return null;

  return (
    <div className="page-video-bg" aria-hidden ref={rootRef}>
      <div className="page-video-bg__veil" />
      <div className="page-video-bg__track">
        <video
          key={src}
          ref={videoRef}
          className="page-video-bg__video"
          src={src}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>
    </div>
  );
};

export default PageVideoBackground;
