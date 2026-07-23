import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ACCESS_KEY = "fd5fa68e-ae1d-4ea6-9c2a-9d9450583d63";

const Contact = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("contact", lang);
  const projectTypes = t("contact.projectTypes");
  const budgetRanges = t("contact.budgetRanges");
  const faqs = t("contact.faqs");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    website: "",
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
    if (!formData.name?.trim()) next.name = t("contact.errors.name");
    if (!formData.email?.trim()) next.email = t("contact.errors.email");
    else if (!EMAIL_REGEX.test(formData.email)) next.email = t("contact.errors.emailInvalid");
    if (!formData.subject?.trim()) next.subject = t("contact.errors.subject");
    if (!formData.message?.trim()) next.message = t("contact.errors.message");
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
    const notIndicated = lang === "en" ? "(not specified)" : "(no indicado)";
    const projectTypeKey = lang === "en" ? "Project type" : "Tipo de proyecto";
    const budgetKey = lang === "en" ? "Approximate budget" : "Presupuesto aproximado";
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
          [projectTypeKey]: formData.projectType || notIndicated,
          [budgetKey]: formData.budget || notIndicated,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "",
          budget: "",
          website: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrors({ submit: data.message || t("contact.errors.submit") });
      }
    } catch {
      setSubmitStatus("error");
      setErrors({ submit: t("contact.errors.connection") });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EmailIcon,
      title: t("contact.labels.email"),
      value: "support@init.com.mx",
      link: "mailto:support@init.com.mx",
    },
    {
      icon: PhoneIcon,
      title: t("contact.labels.phone"),
      value: "55 4761 7977",
      link: "tel:+525547617977",
    },
    {
      icon: LocationIcon,
      title: t("contact.labels.office"),
      value: "Ciudad López Mateos, Estado de México",
      link: "https://www.google.com/maps/search/Ciudad+L%C3%B3pez+Mateos+Estado+de+M%C3%A9xico",
    },
    {
      icon: ScheduleIcon,
      title: t("contact.labels.hours"),
      value: t("contact.hoursValue"),
      link: "#",
    },
  ];

  const textFields = [
    {
      id: "name",
      label: t("contact.fields.name"),
      type: "text",
      ph: t("contact.placeholders.name"),
      autoComplete: "name",
    },
    {
      id: "email",
      label: t("contact.fields.email"),
      type: "email",
      ph: t("contact.placeholders.email"),
      autoComplete: "email",
    },
    {
      id: "subject",
      label: t("contact.fields.subject"),
      type: "text",
      ph: t("contact.placeholders.subject"),
      autoComplete: "off",
    },
  ];

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="cinematicCut" />
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="layer-panel section-py pt-0 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="eyebrow mb-4">{t("contact.directEyebrow")}</p>
              <h2 className="display-title text-xl sm:text-2xl md:text-3xl mb-8">{t("contact.directTitle")}</h2>
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
                {t("contact.honesty")}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-5 sm:p-8 md:p-10">
                <h2 className="display-title text-xl sm:text-2xl mb-2">{t("contact.formTitle")}</h2>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">{t("contact.formSub")}</p>
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
                    {t("contact.success")}
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
                  {textFields.map((f) => (
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
                      {errors[f.id] ? (
                        <p id={`${f.id}-error`} role="alert" className="text-sm text-red-400 mt-1">
                          {errors[f.id]}
                        </p>
                      ) : null}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-2">
                      {t("contact.fields.projectType")}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">{t("contact.selectOption")}</option>
                      {projectTypes.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      {t("contact.fields.budget")}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">{t("contact.selectRange")}</option>
                      {budgetRanges.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      {t("contact.fields.message")}
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
                      placeholder={t("contact.placeholders.message")}
                    />
                    {errors.message ? (
                      <p id="message-error" role="alert" className="text-sm text-red-400 mt-1">
                        {errors.message}
                      </p>
                    ) : null}
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
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      t("contact.submitting")
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendIcon className="h-5 w-5" aria-hidden="true" />
                        {t("contact.submit")}
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    {t("contact.formNote")}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="eyebrow mb-4">{t("contact.faqEyebrow")}</p>
            <h2 className="display-title text-2xl sm:text-3xl mb-3">{t("contact.faqTitle")}</h2>
            <p className="text-on-surface-variant text-sm">{t("contact.faqSub")}</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="glass-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold hover:bg-white/5 transition-colors"
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
                  {openFaq === i ? (
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
                      <p className="px-4 sm:px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  ) : null}
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
