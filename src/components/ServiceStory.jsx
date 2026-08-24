import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import ServiceIllustration from "./ServiceIllustration";
import { CircleCheck as CheckCircleIcon } from "lucide-react";

/**
 * Scroll chapter: big title alone first, then body + illustration
 * (illustration moves differently from the copy).
 */
const ServiceStory = ({
  service,
  index,
  artKind,
  Icon,
  imageRight = false,
  tone = "dev",
  Illustration,
}) => {
  const Art = Illustration || ServiceIllustration;
  const isMarketing = tone === "marketing";
  const accentText = isMarketing ? "text-secondary" : "text-primary";
  const accentBorder = isMarketing ? "border-secondary" : "border-primary";
  const badgeClass = isMarketing ? "icon-badge icon-badge-marketing" : "icon-badge";
  const iconClass = isMarketing
    ? "h-7 w-7 text-background"
    : "h-7 w-7 text-on-primary-container";
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 0.7, 0.58]);
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6],
    ["0vh", "-18vh", "-26vh"]
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.82, 0.95], [1, 1, 0.4]);

  const bodyOpacity = useTransform(scrollYProgress, [0.24, 0.42], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.24, 0.48], [56, 0]);

  const artOpacity = useTransform(scrollYProgress, [0.34, 0.55], [0, 1]);
  const artScale = useTransform(scrollYProgress, [0.34, 0.58], [1.14, 1]);
  const artX = useTransform(
    scrollYProgress,
    [0.34, 0.58],
    imageRight ? [80, 0] : [-80, 0]
  );
  const artRotate = useTransform(
    scrollYProgress,
    [0.34, 0.58],
    imageRight ? [5, 0] : [-5, 0]
  );

  if (reduce) {
    return (
      <article className="py-16 sm:py-24 max-w-container mx-auto px-4 sm:px-6 md:px-20">
        <div className={imageRight ? "text-right" : ""}>
          <p className={`font-heading text-[13px] ${accentText} font-medium tracking-[0.16em] mb-4`}>
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className={`display-hero text-[clamp(2.4rem,6vw,4.5rem)] mb-10 text-balance ${
              imageRight ? "ml-auto" : ""
            }`}
          >
            {service.title}
          </h2>
        </div>
        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${
            imageRight ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div className={imageRight ? "lg:col-start-2" : ""}>
            <Art kind={artKind} title={service.title} />
          </div>
          <ServiceCopy
            service={service}
            Icon={Icon}
            badgeClass={badgeClass}
            iconClass={iconClass}
            accentText={accentText}
            accentBorder={accentBorder}
          />
        </div>
      </article>
    );
  }

  return (
    <article ref={ref} className="relative h-[240vh] sm:h-[260vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Title layer — alone at the start; mirrored services align right */}
        <motion.div
          style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
          className={`absolute inset-x-0 top-0 bottom-0 z-20 flex items-center will-change-transform pointer-events-none ${
            imageRight ? "origin-right" : "origin-left"
          }`}
        >
          <div
            className={`max-w-container mx-auto w-full px-4 sm:px-6 md:px-20 ${
              imageRight ? "text-right" : ""
            }`}
          >
            <p className={`font-heading text-[13px] ${accentText} font-medium tracking-[0.16em] mb-3 sm:mb-5`}>
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              className={`display-hero text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.92] text-balance max-w-5xl ${
                imageRight ? "ml-auto" : ""
              }`}
            >
              {service.title}
            </h2>
          </div>
        </motion.div>

        {/* Content layer — arrives on scroll; art ≠ copy motion */}
        <div className="absolute inset-0 z-10 flex items-end sm:items-center pb-10 sm:pb-0 pt-[28vh] sm:pt-[30vh]">
          <div className="max-w-container mx-auto w-full px-4 sm:px-6 md:px-20">
            <div
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                imageRight ? "lg:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                style={{
                  opacity: artOpacity,
                  scale: artScale,
                  x: artX,
                  rotate: artRotate,
                }}
                className={`will-change-transform ${imageRight ? "lg:col-start-2" : ""}`}
              >
                <Art kind={artKind} title={service.title} />
              </motion.div>

              <motion.div
                style={{ opacity: bodyOpacity, y: bodyY }}
                className={`will-change-transform ${
                  imageRight ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <ServiceCopy
                  service={service}
                  Icon={Icon}
                  badgeClass={badgeClass}
                  iconClass={iconClass}
                  accentText={accentText}
                  accentBorder={accentBorder}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

function ServiceCopy({
  service,
  Icon,
  badgeClass = "icon-badge",
  iconClass = "h-7 w-7 text-on-primary-container",
  accentText = "text-primary",
  accentBorder = "border-primary",
}) {
  return (
    <div>
      {Icon ? (
        <div className={`${badgeClass} mb-5 sm:mb-6`}>
          <Icon className={iconClass} />
        </div>
      ) : null}
      <p className="text-base sm:text-lg text-on-surface mb-3 leading-relaxed">
        {service.intro}
      </p>
      <p className="text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
        {service.description}
      </p>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentText} mb-4`}>
        {service.featuresLabel}
      </p>
      <ul className="space-y-2.5 mb-8">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircleIcon className={`h-5 w-5 ${accentText} mt-0.5 flex-shrink-0`} />
            <span className="text-on-surface text-sm sm:text-base">{f}</span>
          </li>
        ))}
      </ul>
      <p className={`${accentText} font-medium border-l-2 ${accentBorder} pl-4 leading-relaxed`}>
        {service.result}
      </p>
    </div>
  );
}

export default ServiceStory;
