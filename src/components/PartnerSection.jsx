import React from "react";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import ClientLogo from "./ClientLogo";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { partners } from "../data/partnersData";
import { partner as partnerCopy } from "../data/siteCopy";

const PartnerSection = () => (
  <section className="layer-reveal section-py border-y border-outline section-glow section-glow--center">
    <div className="max-w-container mx-auto px-6 md:px-10">
      <Reveal className="text-center mb-12">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">{partnerCopy.label}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{partnerCopy.title}</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {partnerCopy.description}
        </p>
      </Reveal>

      <Stagger className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {partners.map((partner) => (
          <StaggerItem key={partner.id} className="w-full">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card w-full p-8 md:p-10 text-center group hover:border-primary/30 transition-colors block"
            >
              <div className="flex justify-center mb-6">
                <ClientLogo client={partner} size="2xl" className="partner-konnex-logo" />
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4">{partner.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors">
                Visitar konnex.com.mx
                <OpenInNewIcon className="h-4 w-4" />
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default PartnerSection;
