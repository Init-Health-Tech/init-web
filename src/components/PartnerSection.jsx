import React from "react";
import { ExternalLink as OpenInNewIcon } from "lucide-react";
import ClientLogo from "./ClientLogo";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";
import TiltCard from "./TiltCard";
import { partners } from "../data/partnersData";
import { useLanguage } from "../i18n/LanguageContext";

const PartnerSection = () => {
  const { t, L } = useLanguage();

  return (
    <section className="layer-panel section-py bg-surface-container-low border-y border-on-surface/10">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <Reveal inView variant="blur" className="text-center mb-12 sm:mb-16">
          <p className="eyebrow mb-4">{t("home.partnerEyebrow")}</p>
          <h2 className="display-section mb-4">{t("home.partnerTitle")}</h2>
          <p className="text-on-surface-variant text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            {t("home.partnerSub")}
          </p>
        </Reveal>

        <Stagger
          inView
          className="flex flex-col items-center gap-8 max-w-2xl mx-auto"
          stagger={0.2}
          delayChildren={0.14}
          style={{ perspective: 1100 }}
        >
          {partners.map((partner) => (
            <StaggerItem key={partner.id} variant="flip" className="w-full">
              <TiltCard
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card block w-full p-6 sm:p-8 md:p-10 text-center group hover:border-primary/30"
                maxTilt={5}
              >
                <div className="flex justify-center mb-6">
                  <ClientLogo client={partner} size="2xl" className="partner-konnex-logo" />
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">{L(partner.description)}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors">
                  {t("common.visitKonnex")}
                  <OpenInNewIcon className="h-4 w-4" />
                </span>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default PartnerSection;
