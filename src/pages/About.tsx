import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Compass,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Typewriter } from "../components/Typewriter";

export const About = () => {
  const quickFacts = [
    {
      label: "Based in",
      value: "Germany",
    },
    {
      label: "Focus",
      value: "UX/UI · Web Design · Webflow",
    },
    {
      label: "Background",
      value: "Education · Frontend",
    },
    {
      label: "Perspective",
      value: "International · People-centred",
    },
  ];

  const timeline = [
    {
      period: "DEC 2025 — AUG 2026",
      status: "CURRENT",
      title: "UX/UI Design & AI",
      organisation: "IT CAREER HUB",
      description:
        "I’m currently developing my practice in UX/UI design, user research, prototyping, responsive interfaces and Webflow. The programme also explores AI integration and contemporary creative workflows.",
      details: ["UX/UI Design", "User Research", "Webflow", "AI Integration"],
      icon: Sparkles,
    },
    {
      period: "OCT 2024 — AUG 2025",
      title: "Frontend Web Development",
      organisation: "TEL-RAN.DE · STARTA INSTITUTE · 960 HOURS",
      description:
        "I studied how digital interfaces are built — from programming fundamentals to JavaScript, React and project work. I also worked on a team project using Jira and sprint-based workflows. This technical foundation helps me design with a clearer understanding of what happens beyond the canvas.",
      details: ["JavaScript", "React", "HTML & CSS", "Jira", "Agile / Scrum"],
      icon: Code2,
    },
    {
      period: "APR 2022 — JUL 2024",
      title: "Teaching & Educational Support",
      organisation: "SCHOOLS & CHILDREN’S CLINIC · GERMANY",
      description:
        "I worked in several educational institutions in Germany, teaching in primary and secondary schools while also providing educational support to children in a clinical setting. This experience strengthened my ability to communicate clearly, adapt information and respond to individual learning needs.",
      details: [
        "Communication",
        "Empathy",
        "Accessibility",
        "Individual Support",
      ],
      icon: BookOpen,
    },
    {
      period: "11 YEARS",
      title: "International Experience",
      organisation: "LIFE AND WORK ACROSS CULTURES",
      description:
        "For more than a decade, I worked in international environments, met people from around the world and learned to feel at home in constant movement. This experience shaped my openness, adaptability and ability to connect with very different people.",
      details: ["Cross-cultural Communication", "Teamwork", "Adaptability"],
      icon: Compass,
    },
    {
      period: "2000",
      title: "Languages, Literature & Education",
      organisation: "STATE PEDAGOGICAL UNIVERSITY",
      description:
        "I completed a five-year university degree in German and English languages and foreign literature. This education gave me a lasting interest in language, structure, communication and the many ways people understand information.",
      note: "Degree officially evaluated by ZAB in Germany.",
      details: ["German", "English", "Literature", "Education"],
      icon: GraduationCap,
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Empathy",
      subtitle: "Listen before designing.",
      description:
        "Understanding people, their context and their real needs before deciding how a product should look or work.",
      icon: Heart,
    },
    {
      number: "02",
      title: "Clarity",
      subtitle: "Make complexity understandable.",
      description:
        "Creating clear structures and intuitive interfaces without losing visual character and personality.",
      icon: Lightbulb,
    },
    {
      number: "03",
      title: "Motion",
      subtitle: "Move with purpose.",
      description:
        "Using interaction and animation to guide attention, explain change and make digital experiences feel more human.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* About Hero */}
      <section className="relative overflow-hidden border-b border-neutral-700">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Animated Page Introduction */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="mr-2 text-accent-500">[</span>

              <Typewriter
                text="OPENING / ABOUT"
                delay={70}
                loop={false}
                className="text-primary-400"
              />

              <span className="terminal-cursor ml-1" />

              <span className="ml-2 text-accent-500">]</span>
            </div>

            {/* Journey Words */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6">
              {["People", "Learning", "Technology", "Design"].map(
                (word, index) => (
                  <div key={word} className="flex items-center gap-3">
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1.35 + index * 0.25,
                        duration: 0.45,
                      }}
                      className={`font-mono text-sm md:text-base font-semibold tracking-[0.1em] ${
                        index === 3 ? "text-primary-400" : "text-neutral-400"
                      }`}
                    >
                      {word}
                    </motion.span>

                    {index < 3 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 1.5 + index * 0.25,
                          duration: 0.3,
                        }}
                        className="text-accent-500"
                      >
                        ·
                      </motion.span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Text and Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-end">
            {/* About Text */}
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
                delay: 2.25,
                duration: 0.7,
              }}
              className="lg:col-span-7"
            >
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-neutral-50">
                My path into design
                <br />
                wasn’t linear.
                <span className="block mt-2 text-primary-400">
                  That’s what makes it valuable.
                </span>
              </h1>

              <div className="max-w-3xl mt-10">
                {/* Animated Introduction */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2.75,
                    duration: 0.7,
                  }}
                  className="text-xl md:text-2xl leading-relaxed text-neutral-200"
                >
                  Before I designed interfaces,
                  <br className="hidden sm:block" />
                  <span className="text-primary-300">
                    {" "}
                    I learned to understand people.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 3.05,
                    duration: 0.6,
                  }}
                  className="mt-6 text-base md:text-lg leading-relaxed text-neutral-400"
                >
                  Today, I bring the empathy of an educator, the curiosity
                  shaped by international experience and a technical
                  understanding of frontend development into my work as a UX/UI
                  designer.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 3.3,
                    duration: 0.6,
                  }}
                  className="mt-5 text-base md:text-lg leading-relaxed text-neutral-400"
                >
                  I enjoy turning complex information into clear experiences,
                  giving ideas a strong visual character and using motion to
                  make digital products feel more intuitive and human.
                </motion.p>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 2.45,
                duration: 0.75,
              }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                {/* Violet Glow */}
                <div className="absolute -inset-3 rounded-[28px] bg-primary-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Image Card */}
                <div className="relative overflow-hidden rounded-2xl border border-primary-500/60 bg-bg-elevated shadow-card group-hover:border-primary-400 transition-colors duration-300">
                  <div className="h-[430px] sm:h-[500px] lg:h-auto lg:aspect-[4/5] overflow-hidden">
                    <img
                      src="/images/nadin-fink-portrait.png"
                      alt="Portrait of Nadin Fink"
                      className="h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-page via-bg-page/70 to-transparent" />

                  {/* Image Caption */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em]">
                        <span className="text-accent-500">[</span>

                        <span className="text-primary-300">NADIN FINK</span>

                        <span className="text-accent-500">]</span>
                      </div>

                      <p className="mt-2 text-sm text-neutral-300">
                        UX/UI Designer
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-bg-page/70 px-3 py-2 backdrop-blur-sm">
                      <MapPin size={14} className="text-accent-500" />

                      <span className="font-mono text-xs text-neutral--300">
                        Germany
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-5 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="text-primary-400">01 / MY JOURNEY</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-neutral-50">
              Different chapters.
              <span className="block text-primary-400">
                One continuous curiosity.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-400">
              Every chapter added a different perspective to the way I
              understand people, information and digital experiences.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-700 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.article
                    key={`${item.period}-${item.title}`}
                    initial={{
                      opacity: 0,
                      x: isEven ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    className={`relative flex ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-5 md:left-1/2 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-bg-page bg-primary-500 shadow-glow">
                      <IconComponent size={17} className="text-bg-page" />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pr-14" : "md:pl-14"
                      }`}
                    >
                      <motion.div
                        whileHover={{
                          y: -5,
                          borderColor: "#B455FF",
                        }}
                        className="h-full rounded-2xl border border-neutral-700 bg-bg-elevated p-6 md:p-8 shadow-card transition-all duration-300"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <span className="font-mono text-sm font-semibold text-accent-500">
                            {item.period}
                          </span>

                          {item.status && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 font-mono text-xs text-primary-300">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 animate-ping" />

                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
                              </span>

                              {item.status}
                            </span>
                          )}
                        </div>

                        <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-50">
                          {item.title}
                        </h3>

                        <p className="mt-2 font-mono text-xs md:text-sm leading-relaxed tracking-[0.08em] text-primary-400">
                          {item.organisation}
                        </p>

                        <p className="mt-5 leading-relaxed text-neutral-400">
                          {item.description}
                        </p>

                        {item.note && (
                          <p className="mt-4 border-l-2 border-accent-500 pl-4 text-sm leading-relaxed text-neutral-300">
                            {item.note}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mt-6">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-full border border-neutral-700 bg-bg-surface px-3 py-1.5 font-mono text-xs text-neutral-300"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-2xl border border-neutral-700 bg-bg-elevated p-8 md:p-12 shadow-card"
          >
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="text-primary-400">
                  02 / BEYOND THE INTERFACE
                </span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
                Creativity has always been part of
                <span className="text-primary-400">
                  {" "}
                  how I connect with people
                </span>
              </h2>

              <p className="max-w-3xl mt-6 text-lg leading-relaxed text-neutral-300">
                I write poetry and have built an Instagram community of more
                than 15,000 readers. What began as a personal creative space
                became a long-term project shaped by language, consistency and
                genuine connection.
              </p>

              <p className="max-w-3xl mt-4 leading-relaxed text-neutral-400">
                It reminds me that meaningful work grows when creativity,
                patience and attention to people come together.
              </p>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  borderColor: "#B455FF",
                }}
                className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-bg-page p-8 text-center shadow-glow transition-all duration-300"
              >
                <Users size={28} className="mx-auto mb-5 text-accent-500" />

                <div className="font-mono text-6xl md:text-7xl font-bold text-primary-500">
                  15K+
                </div>

                <p className="mt-3 font-mono text-sm tracking-[0.18em] text-neutral-300">
                  READERS
                </p>

                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  A creative community built around poetry and language
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-12 md:py-24 bg-bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-5 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="text-primary-400">03 / DESIGN PRINCIPLES</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="max-w-4xl font-sans text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-neutral-50">
              How I approach
              <span className="text-primary-400"> every project</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    borderColor: "#B455FF",
                  }}
                  className="group rounded-2xl border border-neutral-700 bg-bg-elevated p-7 md:p-8 shadow-card transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-mono text-sm text-accent-500">
                      {principle.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-200">
                      <IconComponent size={21} className="text-primary-400" />
                    </div>
                  </div>

                  <h3 className="font-sans text-2xl font-semibold text-neutral-50">
                    {principle.title}
                  </h3>

                  <p className="mt-2 font-mono text-sm text-primary-400">
                    {principle.subtitle}
                  </p>

                  <p className="mt-5 leading-relaxed text-neutral-400">
                    {principle.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-12 pb-24 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-bg-elevated to-primary-900/20 p-8 md:p-12 text-center shadow-glow"
          >
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="text-primary-400">NEXT CHAPTER</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
              <span className="md:block">Curious about what</span>{" "}
              <span className="md:block">I’m creating now?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
              Explore selected projects where research, visual design,
              interaction and technology come together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-500 px-8 py-4 font-semibold text-bg-page shadow-glow hover:border-primary-400 hover:bg-primary-400 transition-all duration-200"
              >
                View Selected Work
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-lg border-2 border-neutral-600 bg-bg-elevated px-8 py-4 font-semibold text-neutral-100 hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
              >
                Let’s Connect
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
