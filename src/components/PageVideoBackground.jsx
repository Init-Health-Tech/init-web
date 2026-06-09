import React, { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

const CLIPS = [
  { webm: "/hero-bg-1.webm", mp4: "/hero-bg-1.mp4" },
  { webm: "/hero-bg-2.webm", mp4: "/hero-bg-2.mp4" },
  { webm: "/hero-bg-3.webm", mp4: "/hero-bg-3.mp4" },
  { webm: "/hero-bg-4.webm", mp4: "/hero-bg-4.mp4" },
];

const getParallaxFactor = () =>
  window.matchMedia("(max-width: 767px)").matches ? 0.18 : 0.42;
const WEBM_MIME = 'video/webm; codecs="vp9"';

const PageVideoBackground = () => {
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const clipIndexRef = useRef(0);
  const readyRef = useRef(false);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const prefersWebm = useCallback(() => {
    if (typeof document === "undefined") return true;
    return document.createElement("video").canPlayType(WEBM_MIME) !== "";
  }, []);

  const clipSrc = useCallback(
    (index) => {
      const clip = CLIPS[index % CLIPS.length];
      return prefersWebm() ? clip.webm : clip.mp4;
    },
    [prefersWebm]
  );

  const loadClip = useCallback(
    (index, autoplay = false) => {
      const video = videoRef.current;
      if (!video) return;

      clipIndexRef.current = index % CLIPS.length;
      const src = clipSrc(clipIndexRef.current);
      if (video.getAttribute("src") === src) return;

      readyRef.current = false;
      video.setAttribute("src", src);
      video.load();
      if (autoplay) video.play().catch(() => {});
    },
    [clipSrc]
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const updateParallax = () => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(0, ${-window.scrollY * getParallaxFactor()}px, 0)`;
      }
      rafRef.current = null;
    };

    const onScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    const startLoad = () => loadClip(0);

    let idleId;
    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(startLoad, { timeout: 1500 });
    } else {
      idleId = setTimeout(startLoad, 300);
    }

    const onCanPlay = async () => {
      try {
        await video.play();
        readyRef.current = true;
      } catch {
        /* autoplay blocked */
      }
    };

    const onEnded = () => {
      loadClip(clipIndexRef.current + 1, true);
    };

    const onVis = () => {
      if (document.hidden) video.pause();
      else if (readyRef.current) video.play().catch(() => {});
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if ("requestIdleCallback" in window) cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [prefersReducedMotion, loadClip]);

  if (prefersReducedMotion) return null;

  return (
    <div className="page-video-bg" aria-hidden>
      <div ref={trackRef} className="page-video-bg__track">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          className="page-video-bg__video"
        />
      </div>
    </div>
  );
};

export default PageVideoBackground;
