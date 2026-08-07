import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import { appleEase } from "../lib/motion";
import {
  Mail as EmailIcon,
  Phone as PhoneIcon,
  MapPin as LocationIcon,
  Clock as ScheduleIcon,
  Send as SendIcon,
  CircleCheck as CheckCircleIcon,
  ChevronDown as ExpandMoreIcon,
} from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ACCESS_KEY = "fd5fa68e-ae1d-4ea6-9c2a-9d9450583d63";

const EMPTY_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
  projectType: "",
  budget: "",
  website: "",
};

const Contact = () => {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const seo = getPageSeo("contact", lang);
  const projectTypes = t("contact.projectTypes");
  const budgetRanges = t("contact.budgetRanges");
  const faqs = t("contact.faqs");
  const nextSteps = t("contact.nextSteps") || [];

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

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
        setFormData(EMPTY_FORM);
        setTimeout(() => setSubmitStatus("idle"), 6000);
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

  const channels = [
    {
      icon: EmailIcon,
      label: t("contact.labels.email"),
      value: "support@init.com.mx",
      href: "mailto:support@init.com.mx",
    },
    {
      icon: PhoneIcon,
      label: t("contact.labels.phone"),
      value: "55 4761 7977",
      href: "tel:+525547617977",
    },
    {
      icon: LocationIcon,
      label: t("contact.labels.office"),
      value: "Ciudad de México",
      href: "https://www.google.com/maps/search/Ciudad+L%C3%B3pez+Mateos+Estado+de+M%C3%A9xico",
    },
    {
      icon: ScheduleIcon,
      label: t("contact.labels.hours"),
      value: t("contact.hoursValue"),
      href: null,
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

      {/* Fit desk: form primary, context secondary */}
      <section className="layer-panel section-py pt-8 sm:pt-12 md:pt-14 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] gap-12 lg:gap-16 xl:gap-20 items-start">
            <Reveal inView variant="blur" className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">{t("contact.directEyebrow")}</p>
              <h2 className="display-section text-[clamp(1.5rem,3vw,2.15rem)] mb-5 text-balance">
                {t("contact.directTitle")}
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-10 max-w-md">
                {t("contact.honesty")}
              </p>

              <div className="section-title-rail mb-8" aria-hidden />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-5">
                {t("contact.nextEyebrow")}
              </p>
              <ol className="space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-heading text-[13px] text-primary font-medium tracking-[0.14em] pt-0.5 shrink-0 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold tracking-tight mb-1">{step.title}</p>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal inView variant="up" delay={0.08}>
              <div className="border border-on-surface/10 bg-surface-container/50 rounded-[var(--radius-exec)] p-5 sm:p-8 md:p-10">
                <h2 className="display-section text-[clamp(1.35rem,2.5vw,1.75rem)] mb-2">
                  {t("contact.formTitle")}
                </h2>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                  {t("contact.formSub")}
                </p>

                <AnimatePresence>
                  {submitStatus === "success" ? (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: appleEase }}
                      className="mb-6 border px-4 py-3 rounded-[var(--radius-exec)] flex items-start gap-2 text-[#0F5C2E]"
                      style={{
                        background: "var(--color-init-mint)",
                        borderColor: "rgba(30, 143, 65, 0.35)",
                      }}
                    >
                      <CheckCircleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden />
                      <span>{t("contact.success")}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {submitStatus === "error" && errors.submit ? (
                  <div
                    role="alert"
                    className="mb-6 bg-red-500/10 border border-red-500/30 text-red-700 px-4 py-3 rounded-[var(--radius-exec)]"
                  >
                    {errors.submit}
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5 relative" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      id="name"
                      label={t("contact.fields.name")}
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.placeholders.name")}
                      autoComplete="name"
                      error={errors.name}
                    />
                    <Field
                      id="email"
                      label={t("contact.fields.email")}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.placeholders.email")}
                      autoComplete="email"
                      error={errors.email}
                    />
                  </div>

                  <Field
                    id="subject"
                    label={t("contact.fields.subject")}
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact.placeholders.subject")}
                    autoComplete="off"
                    error={errors.subject}
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
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
                      <p id="message-error" role="alert" className="text-sm text-red-600 mt-1">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden>
                    <label htmlFor="website">Website</label>
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
                    className="w-full btn-primary py-3.5 disabled:opacity-50 min-h-11"
                  >
                    {isSubmitting ? (
                      t("contact.submitting")
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendIcon className="h-5 w-5" aria-hidden />
                        {t("contact.submit")}
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    {t("contact.formNote")}
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Channels — quiet meta strip, not icon-card stack */}
      <section className="layer-panel border-y border-on-surface/8 bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 py-8 sm:py-10">
          <Reveal inView variant="up">
            <p className="eyebrow mb-6">{t("contact.channelsEyebrow")}</p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                      {channel.label}
                    </span>
                    <span className="text-sm sm:text-[15px] text-on-surface leading-snug block">
                      {channel.value}
                    </span>
                  </>
                );
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="block hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ — editorial list, not glass cards */}
      <section className="layer-panel section-py bg-background/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-10 sm:mb-12">
            <p className="eyebrow mb-4">{t("contact.faqEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">{t("contact.faqTitle")}</h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl">
              {t("contact.faqSub")}
            </p>
          </Reveal>

          <div className="border-t border-on-surface/12">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q} className="border-b border-on-surface/12">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left min-h-11 group"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span className="font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors pr-2">
                      {faq.q}
                    </span>
                    <ExpandMoreIcon
                      className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: appleEase }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 sm:pb-6 text-on-surface-variant text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

function Field({ id, label, type, value, onChange, placeholder, autoComplete, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 mt-1">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Contact;
