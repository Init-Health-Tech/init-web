import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import { getPageSeo } from "../data/seoData";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROJECT_TYPES = ["Aplicación web", "Sistema empresarial", "Consultoría", "ERPinit", "initlogistics", "Otro"];
const BUDGET_RANGES = ["Menos de $50k MXN", "$50k - $150k MXN", "Más de $150k MXN", "Prefiero no indicar"];
const WEB3FORMS_ACCESS_KEY = "fd5fa68e-ae1d-4ea6-9c2a-9d9450583d63";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "", projectType: "", budget: "", website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

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
          "Tipo de proyecto": formData.projectType || "(no indicado)",
          "Presupuesto aproximado": formData.budget || "(no indicado)",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", projectType: "", budget: "", website: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
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
    { icon: PhoneIcon, title: "Teléfono", value: "55 4761 7977", link: "tel:+525547617977" },
    { icon: LocationIcon, title: "Oficina", value: "Ciudad López Mateos, Estado de México", link: "https://www.google.com/maps/search/Ciudad+L%C3%B3pez+Mateos+Estado+de+M%C3%A9xico" },
    { icon: ScheduleIcon, title: "Horario", value: "Lun–vie 7:00–22:00 (hora México central)", link: "#" },
  ];

  const faqs = [
    {
      q: "¿Esto es para cotizar un proyecto?",
      a: "No. Es para evaluar si podemos ayudar de verdad. Si el encaje no está, te lo decimos — no armamos una propuesta solo por vender.",
    },
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Una app web enfocada: suele ser 4–8 semanas. Sistemas más complejos: 3–6 meses. Lo definimos juntos solo si hay fit — con plazos claros desde el inicio.",
    },
    {
      q: "¿Qué pasa después del lanzamiento?",
      a: "Seguimos. Soporte y evolución del sistema, en español, con el mismo equipo que lo construyó.",
    },
    {
      q: "¿Trabajan con cualquier empresa?",
      a: "No. Priorizamos proyectos donde podemos aportar. Si tu reto no es lo nuestro, preferimos decirlo a forzar un contrato.",
    },
    {
      q: "¿Con qué tecnologías trabajan?",
      a: "React, Node.js, Python, Django, AWS y más — elegidas por el problema, no por moda. El detalle lo vemos según tu caso.",
    },
    {
      q: "¿Solo en Estado de México?",
      a: "Estamos en Ciudad López Mateos. Trabajamos remoto en México y LATAM.",
    },
    {
      q: "¿Tienen productos listos?",
      a: "Sí: ERPinit e initlogistics (incluye trazabilidad RFID). También desarrollamos 100% a medida — siempre tras evaluar si encaja.",
    },
  ];

  const seo = getPageSeo("contact");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="cinematicCut" />
      <PageHeader
        eyebrow="Evaluación"
        title="Primero vemos si podemos ayudar"
        subtitle="No es una cotización. Es una conversación para determinar si hay fit — y si no lo hay, te lo diremos sin venderte nada."
      />

      <section className="layer-panel section-py pt-0 bg-background/80">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="eyebrow mb-4">Directo</p>
              <h2 className="display-title text-2xl md:text-3xl mb-8">Cómo encontrarnos</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="icon-badge flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 tracking-tight">{info.title}</h3>
                      <a href={info.link} className="text-on-surface-variant hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-sm text-on-surface-variant leading-relaxed max-w-sm">
                Somos consultora, no una línea de ventas. Si el proyecto no encaja
                con lo que hacemos bien, la respuesta honesta es no — y preferimos
                eso a un mal engagement.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-8 md:p-10">
                <h2 className="display-title text-2xl mb-2">Lo esencial para evaluar</h2>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Con eso basta para ver si tiene sentido seguir.
                </p>
                {submitStatus === "success" && (
                  <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 border px-4 py-3 rounded-[var(--radius-exec)] flex items-center text-[#0F5C2E]"
                    style={{
                      background: "var(--color-init-mint)",
                      borderColor: "rgba(30, 143, 65, 0.35)",
                    }}
                  >
                    <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />
                    Mensaje recibido. Lo revisamos y te respondemos — incluso si la respuesta es que no encajamos.
                  </motion.div>
                )}
                {submitStatus === "error" && errors.submit && (
                  <div
                    role="alert"
                    className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-[var(--radius-exec)]"
                  >
                    {errors.submit}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {[
                    { id: "name", label: "Nombre *", type: "text", ph: "Tu nombre", autoComplete: "name" },
                    { id: "email", label: "Email *", type: "email", ph: "tu@empresa.com", autoComplete: "email" },
                    { id: "subject", label: "Asunto *", type: "text", ph: "De qué trata tu reto", autoComplete: "off" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-semibold mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        required
                        value={formData[f.id]}
                        onChange={handleChange}
                        autoComplete={f.autoComplete}
                        aria-invalid={errors[f.id] ? "true" : "false"}
                        aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
                        className={`input-field ${errors[f.id] ? "border-red-500" : ""}`}
                        placeholder={f.ph}
                      />
                      {errors[f.id] && (
                        <p id={`${f.id}-error`} role="alert" className="text-sm text-red-400 mt-1">
                          {errors[f.id]}
                        </p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-2">
                      Tipo de proyecto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona una opción</option>
                      {PROJECT_TYPES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      Presupuesto aproximado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona un rango</option>
                      {BUDGET_RANGES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`input-field resize-none ${errors.message ? "border-red-500" : ""}`}
                      placeholder="Qué duele hoy en tu operación y qué te gustaría cambiar..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-sm text-red-400 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="website">No llenar este campo</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3.5 disabled:opacity-50">
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendIcon className="h-5 w-5" aria-hidden="true" />
                        Enviar para evaluar
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    Sin compromiso de venta. Solo claridad sobre si podemos ayudar.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="eyebrow mb-4">Antes de escribir</p>
            <h2 className="display-title text-3xl mb-3">Preguntas frecuentes</h2>
            <p className="text-on-surface-variant text-sm">Lo esencial. El resto, en la conversación.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="glass-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-white/5 transition-colors"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                >
                  {faq.q}
                  <ExpandMoreIcon
                    className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ml-3 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
