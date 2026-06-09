import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import { teamCopy, teamMembers } from "../data/teamData";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Team = () => {
  const owners = teamMembers.filter((m) => m.role === "owner");
  const seniors = teamMembers.filter((m) => m.role === "senior");
  const interns = teamMembers.filter((m) => m.role === "intern");

  const MemberCard = ({ member, index }) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 text-center group"
    >
      {member.image_url ? (
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl">
          <img
            src={member.image_url}
            alt={`Foto de ${member.name}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-48 h-48 bg-gradient-to-br from-primary-container to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <PersonIcon className="h-20 w-20 text-white" />
        </div>
      )}
      <h3 className="text-xl font-bold text-on-surface mb-2">{member.name}</h3>
      <p className="font-semibold mb-4 text-primary">{member.position}</p>
      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{member.bio}</p>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
        {member.technologies || member.expertise}
      </p>
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
      <PageHead
        title="Nuestro Equipo de Desarrollo y Consultoría"
        description={teamCopy.meta}
        path="/team"
      />
      <PageHeader
        title="Nuestro Equipo"
        subtitle={teamCopy.subtitle}
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center">
            <img
              src="/empleados-fotos/init-team.jpg"
              alt="Los 4 cofundadores de INIT"
              className="w-full rounded-2xl shadow-2xl border border-white/10 object-contain hover:scale-[1.01] transition-transform duration-500"
            />
            <p className="text-on-surface-variant mt-4 font-medium">Los 4 cofundadores de INIT</p>
          </motion.div>
        </div>
      </section>

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cofundadores</h2>
            <p className="text-on-surface-variant">Los líderes que guían nuestra visión y estrategia</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {owners.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {seniors.length > 0 && (
        <section className="section-py bg-surface-container-low">
          <div className="max-w-container mx-auto px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultoría</h2>
              <p className="text-on-surface-variant">Procesos de calidad, necesidades y seguimiento</p>
            </motion.div>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {seniors.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {interns.length > 0 && (
        <section className="section-py">
          <div className="max-w-container mx-auto px-6 md:px-20">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Talento Joven</h2>
              <p className="text-on-surface-variant">Los futuros líderes de la tecnología</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {interns.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué trabajar con nosotros?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Tiempo de respuesta", text: "Comunicación directa con el equipo que desarrolla tu proyecto." },
              { title: "Tamaño del equipo", text: teamCopy.size },
              { title: "Metodología", text: "Alcance definido y entregas iterativas desde el inicio." },
            ].map((item, i) => (
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
        <div className="orb w-64 h-64 bg-primary/10 blur-[80px] top-0 right-0" />
        <div className="max-w-container mx-auto px-6 md:px-20 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold mb-8">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Innovación", d: "Las mejores soluciones tecnológicas para nuestros clientes." },
                { t: "Excelencia", d: "Productos y servicios de la más alta calidad." },
                { t: "Colaboración", d: "Trabajo en equipo para resultados excepcionales." },
              ].map((v, i) => (
                <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{v.t}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
