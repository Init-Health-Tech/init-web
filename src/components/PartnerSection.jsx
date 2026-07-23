import React from "react";
import { motion } from "framer-motion";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import ClientLogo from "./ClientLogo";
import { partners } from "../data/partnersData";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PartnerSection = () => (
  <section className="layer-panel section-py bg-surface-container-low border-y border-white/10">
    <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16">
      <motion.div {...fadeUp} className="text-center mb-14">
        <p className="eyebrow mb-4">Alianza</p>
        <h2 className="display-title text-3xl md:text-4xl mb-4">Nuestro partner</h2>
        <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">
          No trabajamos solos. Socios que elevan el estándar — no que lo diluyen.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {partners.map((partner, i) => (
          <motion.a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-card w-full p-8 md:p-10 text-center group hover:border-primary/30 transition-colors"
          >
            <div className="flex justify-center mb-6">
              <ClientLogo client={partner} size="2xl" className="partner-konnex-logo" />
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-4">{partner.description}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors">
              Visitar konnex.com.mx
              <OpenInNewIcon className="h-4 w-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSection;
