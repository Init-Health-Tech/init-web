import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import { getPageSeo } from "../data/seoData";
import { teamMembers } from "../data/teamData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

// ─── Fotos del equipo ───────────────────────────────────────────────────────
// Fotos individuales (cofundadores, consultora, becarios).
// Cambiar a false para ocultarlas y mostrar solo el ícono placeholder.
const SHOW_INDIVIDUAL_MEMBER_PHOTOS = true;

// Foto grupal de los 4 cofundadores (init-team.jpg).
// Cambiar a false para ocultar esa sección.
const SHOW_TEAM_GROUP_PHOTO = true;
// ─────────────────────────────────────────────────────────────────────────────

const ROLE_POSITION_KEY = {
  owner: "cofounder",
  senior: "senior",
  intern: "intern",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function MemberCard({ member, index, t }) {
  const positionKey = ROLE_POSITION_KEY[member.role] || "cofounder";
  const position = t(`team.positions.${positionKey}`);
  const loc = t(`team.members.${member.id}`) || {};
  const bio = loc.bio || member.bio;
  const technologies = loc.technologies || member.technologies || member.expertise;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-5 sm:p-6 text-center group transition-transform duration-300 hover:-translate-y-1"
    >
      {SHOW_INDIVIDUAL_MEMBER_PHOTOS && member.image_url ? (
        <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6 overflow-hidden exec-chamfer border border-white/10">
          <img
            src={member.image_url}
            alt={`${t("common.photoOf")} ${member.name}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-36 h-36 sm:w-48 sm:h-48 bg-primary-container exec-chamfer mx-auto mb-6 flex items-center justify-center border border-primary/30">
          <PersonIcon className="h-16 w-16 sm:h-20 sm:w-20 text-white" />
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-semibold text-on-surface mb-2">{member.name}</h3>
      <p className="font-semibold mb-4 text-primary">{position}</p>
      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{bio}</p>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{technologies}</p>
      <div className="flex justify-center gap-3">
        {member.email ? (
          <a
            href={`mailto:${member.email}`}
            className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <EmailIcon className="h-5 w-5" />
          </a>
        ) : null}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

const Team = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("team", lang);
  const owners = teamMembers.filter((m) => m.role === "owner");
  const seniors = teamMembers.filter((m) => m.role === "senior");
  const interns = teamMembers.filter((m) => m.role === "intern");
  const why = t("team.why");
  const values = t("team.values");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="reveal" />
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={t("team.title")}
        subtitle={t("team.subtitleSuffix")}
      />

      {SHOW_TEAM_GROUP_PHOTO ? (
        <section className="layer-panel py-12 bg-background/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center">
              <img
                src="/empleados-fotos/init-team.jpg"
                alt={t("team.foundersCaption")}
                loading="lazy"
                decoding="async"
                className="w-full exec-chamfer shadow-lg border border-white/10 object-contain"
              />
              <p className="text-on-surface-variant mt-4 font-medium">{t("team.foundersCaption")}</p>
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("team.foundersTitle")}</h2>
            <p className="text-on-surface-variant">{t("team.foundersSub")}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {owners.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

      {seniors.length > 0 ? (
        <section className="layer-panel section-py bg-surface-container-low">
          <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("team.consultingTitle")}</h2>
              <p className="text-on-surface-variant">{t("team.consultingSub")}</p>
            </motion.div>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {seniors.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} t={t} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {interns.length > 0 ? (
        <section className="layer-panel section-py bg-background">
          <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("team.talentTitle")}</h2>
              <p className="text-on-surface-variant">{t("team.talentSub")}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              {interns.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} t={t} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("team.whyTitle")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {why.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircleIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py gradient-bg relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t("team.valuesTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">{v.t}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBanner
        title={t("team.ctaTitle")}
        text={t("team.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
      />
    </div>
  );
};

export default Team;
