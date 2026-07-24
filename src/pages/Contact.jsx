import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import { getPageSeo } from "../data/seoData";
import { contact } from "../data/siteCopy";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BUDGET_RANGES = ["Menos de $50k USD", "$50k - $150k USD", "Más de $150k USD", "Prefiero no indicar"];
const WEB3FORMS_ACCESS_KEY = "fd5fa68e-ae1d-4ea6-9c2a-9d9450583d63";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "", projectType: "", budget: "", website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    if (submitStatus === "error") setSubmitStatus("idle");
  };

  const validate = () => {
    const next = {};
    if (!formData.name?.trim()) next.name = "El nombre es obligatorio.";
    if (!formData.email?.trim()) next.email = "El email es obligatorio.";
    else if (!EMAIL_REGEX.test(formData.email)) next.email = "Introduce un email válido.";
    if (!formData.subject?.trim()) next.subject = "El asunto es obligatorio.";
    if (!formData.message?.trim()) next.message = "El mensaje es obligatorio.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website?.trim()) return;
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          "Área de interés": formData.projectType || "(no indicada)",
          "Rango de inversión": formData.budget || "(no indicado)",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", projectType: "", budget: "", website: "" });
        setTimeout(() => setSubmitStatus("idle"), 8000);
      } else {
        setSubmitStatus("error");
        setErrors({ submit: data.message || "No se pudo enviar." });
      }
    } catch {
      setSubmitStatus("error");
      setErrors({ submit: "Error de conexión. Intenta de nuevo." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: EmailIcon, title: "Email", value: "support@init.com.mx", link: "mailto:support@init.com.mx" },
    { icon: PhoneIcon, title: "Teléfono", value: "+52 55 4761 7977", link: "tel:+525547617977" },
    { icon: LocationIcon, title: "Oficina", value: "Ciudad López Mateos", link: "#" },
    { icon: ScheduleIcon, title: "Horario", value: "Lun–vie 7:00–22:00", link: "#" },
  ];

  const seo = getPageSeo("contact");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <PageHeader eyebrow="Iniciar conversación" title={contact.title} subtitle={contact.subtitle} />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="eyebrow mb-4">Contacto directo</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 tracking-tight">{contact.contactInfoTitle}</h2>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="icon-badge flex-shrink-0">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{info.title}</h3>
                      <a href={info.link} className="text-on-surface-variant hover:text-secondary transition-colors">{info.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-6 tracking-tight">{contact.formTitle}</h2>
                {submitStatus === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-lg flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" /> {contact.successMessage}
                  </motion.div>
                )}
                {submitStatus === "error" && errors.submit && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 exec-chamfer">{errors.submit}</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "name", label: "Nombre *", type: "text", ph: "Tu nombre" },
                    { id: "email", label: "Email *", type: "email", ph: "tu@empresa.com" },
                    { id: "subject", label: "Asunto *", type: "text", ph: contact.subjectPlaceholder },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-semibold mb-2">{f.label}</label>
                      <input type={f.type} id={f.id} name={f.id} required value={formData[f.id]} onChange={handleChange}
                        className={`input-field ${errors[f.id] ? "border-red-500" : ""}`} placeholder={f.ph} />
                      {errors[f.id] && <p className="text-sm text-red-400 mt-1">{errors[f.id]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-2">Área de interés</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="input-field">
                      <option value="">Selecciona</option>
                      {contact.projectTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">Rango de inversión</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                      <option value="">Selecciona un rango</option>
                      {BUDGET_RANGES.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Mensaje *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                      className={`input-field resize-none ${errors.message ? "border-red-500" : ""}`} placeholder={contact.messagePlaceholder} />
                    {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>}
                  </div>
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden>
                    <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 disabled:opacity-50">
                    {isSubmitting ? (
                      contact.submitLoading
                    ) : (
                      <span className="flex items-center justify-center gap-2"><SendIcon className="h-5 w-5" /> {contact.submitButton}</span>
                    )}
                  </button>
                  <p className="text-xs text-on-surface-variant text-center">{contact.formNote}</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
