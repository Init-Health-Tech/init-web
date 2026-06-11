import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import { getPageSeo } from "../data/seoData";
import { getFeaturedTeam } from "../data/teamData";
import { team as teamCopySite } from "../data/siteCopy";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const SHOW_INDIVIDUAL_MEMBER_PHOTOS = true;
const SHOW_TEAM_GROUP_PHOTO = true;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Team = () => {
  const featured = getFeaturedTeam();
  const seo = getPageSeo("team");

  const MemberCard = ({ member, index }) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 text-center group"
    >
      {SHOW_INDIVIDUAL_MEMBER_PHOTOS && member.image_url ? (
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden exec-chamfer border border-white/10">
          <img src={member.image_url} alt={member.name} className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
      ) : (
        <div className="w-48 h-48 bg-primary-container exec-chamfer mx-auto mb-6 flex items-center justify-center border border-primary/30">
          <PersonIcon className="h-20 w-20 text-white" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-on-surface mb-2">{member.name}</h3>
      <p className="font-semibold mb-4 text-primary">{member.position}</p>
      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{member.bio}</p>
      {member.quote && (
        <p className="text-sm text-on-surface italic mb-4 border-l-2 border-primary pl-3 text-left">
          "{member.quote}"
        </p>
      )}
      <div className="flex justify-center gap-3">
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-colors">
            <EmailIcon className="h-5 w-5" />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-colors">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <PageHeader title="Equipo" subtitle={teamCopySite.intro} />

      {SHOW_TEAM_GROUP_PHOTO && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center">
              <img
                src="/empleados-fotos/init-team.jpg"
                alt="Equipo INIT"
                className="w-full exec-chamfer shadow-lg border border-white/10 object-contain"
              />
              <p className="text-on-surface-variant mt-4 font-medium">{teamCopySite.foundersCaption}</p>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featured.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cómo operamos</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamCopySite.principles.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
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

      <section className="section-py gradient-bg relative overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-20 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold mb-8">Estándar INIT</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamCopySite.values.map((v, i) => (
                <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{v.t}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{v.d}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/contact" className="btn-primary inline-flex px-8 py-4">Iniciar conversación</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
