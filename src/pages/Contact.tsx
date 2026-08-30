import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { CONTACT } from "../data/portfolio";
import { Typewriter } from "../components/Typewriter";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      if (!accessKey) {
        throw new Error("Missing Web3Forms access key");
      }

      const formDataToSubmit = new FormData();

      formDataToSubmit.append("access_key", accessKey);
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("subject", formData.subject);
      formDataToSubmit.append("message", formData.message);
      formDataToSubmit.append("from_name", "Nadin Fink Portfolio");
      formDataToSubmit.append("replyto", formData.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch {
      setErrors((previousErrors) => ({
        ...previousErrors,
        message:
          "The message could not be sent Please try again or contact me by email",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nadinfink",
      href: CONTACT.social.linkedin,
    },

    {
      icon: MapPin,
      label: "Location",
      value: CONTACT.address,
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-bg-page">
     

      {/* Opening */}
      <section className="relative overflow-hidden border-b border-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Hero text */}
            <div className="lg:col-span-7">
              <div className="mb-10 md:mb-14">
                <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                  <span className="mr-2 text-accent-500">[</span>

                  <Typewriter
                    text="LET'S CONNECT"
                    delay={70}
                    loop={false}
                    className="text-primary-400"
                  />

                  <span className="terminal-cursor ml-1" />

                  <span className="ml-2 text-accent-500">]</span>
                </div>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.35,
                  duration: 0.7,
                }}
                className="max-w-5xl"
              >
                <h1 className="font-sans text-4xl font-semibold leading-[1.08] text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
                  Let&apos;s create something meaningful{" "}
                  <span className="text-primary-400">together</span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
                  I&apos;m open to UX UI and web design opportunities as well as
                  thoughtful collaborations and digital projects
                </p>
              </motion.div>
            </div>

            {/* Hero portrait */}
            <motion.div
              initial={{
                opacity: 0,
                x: 32,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.55,
                duration: 0.75,
              }}
              className="lg:col-span-5 lg:self-start"
            >
              <div className="group mx-auto flex max-w-md flex-col overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated shadow-card lg:h-[430px] lg:max-w-none xl:h-[450px]">
                <div className="aspect-[4/5] overflow-hidden lg:min-h-0 lg:flex-1 lg:aspect-auto">
                  <img
                    src="/images/contact-portrait.webp"
                    alt="Portrait of Nadin Fink"
                    className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="shrink-0 border-t border-neutral-700 px-6 py-4 sm:px-8">
                  <p className="font-mono text-sm leading-relaxed text-neutral-400">
                    UX UI Design · Web Design · Webflow
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-neutral-700 bg-bg-surface p-6 shadow-card sm:p-8">
                <div className="mb-8">
                  <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-500">
                    SEND A MESSAGE
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-neutral-50 sm:text-3xl">
                    Tell me about the opportunity or project
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[440px] flex-col items-center justify-center text-center"
                  >
                    <CheckCircle className="h-14 w-14 text-primary-400" />

                    <h3 className="mt-6 text-2xl font-semibold text-neutral-50">
                      Message sent successfully
                    </h3>

                    <p className="mt-3 max-w-md leading-relaxed text-neutral-400">
                      Thank you for reaching out I&apos;ll get back to you as
                      soon as possible
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-neutral-200"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full rounded-lg border bg-bg-elevated px-4 py-3 text-neutral-100 outline-none transition-colors placeholder:text-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 ${
                          errors.name ? "border-red-500" : "border-neutral-700"
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-neutral-200"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full rounded-lg border bg-bg-elevated px-4 py-3 text-neutral-100 outline-none transition-colors placeholder:text-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 ${
                          errors.email ? "border-red-500" : "border-neutral-700"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-neutral-200"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What would you like to discuss"
                        className={`w-full rounded-lg border bg-bg-elevated px-4 py-3 text-neutral-100 outline-none transition-colors placeholder:text-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 ${
                          errors.subject
                            ? "border-red-500"
                            : "border-neutral-700"
                        }`}
                      />

                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-neutral-200"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={7}
                        placeholder="Share a few details about the role or project"
                        className={`w-full resize-none rounded-lg border bg-bg-elevated px-4 py-3 text-neutral-100 outline-none transition-colors placeholder:text-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 ${
                          errors.message
                            ? "border-red-500"
                            : "border-neutral-700"
                        }`}
                      />

                      {errors.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group inline-flex w-full items-center justify-center rounded-lg px-6 py-4 font-semibold transition-all duration-200 ${
                        isSubmitting
                          ? "cursor-not-allowed bg-neutral-700 text-neutral-400"
                          : "bg-primary-500 text-bg-page shadow-glow hover:bg-primary-400"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />

                          <span className="ml-3">Sending</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />

                          <span className="ml-3">Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col gap-8 lg:col-span-5"
            >
              <div className="flex flex-1 flex-col rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8">
                <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-500">
                  CONTACT DETAILS
                </p>

                <div className="mt-8 space-y-5">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;

                    const content = (
                      <>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-surface text-primary-400">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm text-neutral-500">
                            {method.label}
                          </p>

                          <p className="mt-1 break-words font-medium text-neutral-100">
                            {method.value}
                          </p>
                        </div>

                        {method.href && (
                          <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-400" />
                        )}
                      </>
                    );

                    return method.href ? (
                      <a
                        key={method.label}
                        href={method.href}
                        target={
                          method.label === "LinkedIn" ? "_blank" : undefined
                        }
                        rel={
                          method.label === "LinkedIn"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-bg-surface"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={method.label}
                        className="flex items-center gap-4 rounded-xl p-2"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8">
                <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-500">
                  AVAILABILITY
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-primary-400 shadow-glow" />

                  <p className="font-medium text-neutral-100">
                    Open to opportunities
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-center space-y-3 text-neutral-400">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-4 w-4 text-primary-400" />

                    <span>UX UI Design</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-4 w-4 text-primary-400" />

                    <span>Web Design and Webflow</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary-400" />

                    <span>Remote or hybrid in Germany</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-neutral-800 bg-bg-surface/30 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-500">
              HAVE A ROLE OR PROJECT IN MIND
            </p>

            <h2 className="mt-6 text-3xl font-semibold text-neutral-50 sm:text-4xl">
              Tell me a little about it
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-neutral-400">
              I&apos;d be happy to learn more and explore how I can contribute
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center rounded-lg border border-primary-500 px-6 py-3 font-semibold text-primary-400 transition-all duration-200 hover:bg-primary-500 hover:text-bg-page"
            >
              Email Me
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
