import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Component,
  Figma,
  Film,
  Image,
  Layers,
  Layout,
  Music,
  PenTool,
  Search,
  Sparkles,
  WandSparkles,
  Workflow,
} from "lucide-react";
import { Typewriter } from "../components/Typewriter";

export const Skills = () => {
  const skillCategories = [
    {
      number: "01",
      title: "Design & Research",
      label: "CORE PRACTICE",
      description:
        "The tools and methods I use to understand problems, structure ideas and design clear digital experiences",
      icon: PenTool,
      skills: [
        "UX/UI Design",
        "Figma",
        "Wireframing",
        "Interactive Prototyping",
        "Responsive Design",
        "User Flows",
        "User Journeys",
        "UX Research",
        "Landing Pages",
      ],
    },
    {
      number: "02",
      title: "Web & Interaction",
      label: "PRACTICAL EXPERIENCE",
      description:
        "Turning visual concepts into responsive websites and interactive experiences that work across devices",
      icon: Layout,
      skills: [
        "Web Design",
        "Webflow Development",
        "Responsive Webflow",
        "Web Interactions",
        "Figma Animation",
        "Motion & Prototyping",
        "Interactive Interfaces",
      ],
    },
    {
      number: "03",
      title: "Systems & Structure",
      label: "PROJECT EXPERIENCE",
      description:
        "Building consistent interface structures through reusable components, rules and organised design decisions",
      icon: Layers,
      skills: [
        "Auto Layout",
        "Components",
        "Component Variants",
        "Variables",
        "Design Systems",
        "Responsive Components",
        "Design Documentation",
      ],
    },
    {
      number: "04",
      title: "Technical Foundation",
      label: "WORKING KNOWLEDGE",
      description:
        "A frontend foundation that helps me understand how interfaces move from design into implementation",
      icon: Code2,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "GitHub",
        "Jira",
        "Agile / Scrum",
        "Sprint Workflow",
        "Responsive Development",
      ],
    },
  ];

  const aiTools = [
    {
      name: "ChatGPT",
      purpose: "Research, ideation and creative problem-solving",
      icon: Sparkles,
    },
    {
      name: "Midjourney",
      purpose: "Visual concepts and image generation",
      icon: Image,
    },
    {
      name: "Kling",
      purpose: "AI video generation and visual motion",
      icon: Film,
    },
    {
      name: "Runway",
      purpose: "Video creation, editing and experimentation",
      icon: Film,
    },
    {
      name: "Nano Banana Pro",
      purpose: "AI photography and image transformation",
      icon: WandSparkles,
    },
    {
      name: "Suno",
      purpose: "Music, songs and audio experimentation",
      icon: Music,
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Understand",
      description: "Research the context, audience and real user needs",
      icon: Search,
    },
    {
      number: "02",
      title: "Structure",
      description: "Turn information into clear flows and meaningful hierarchy",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create an expressive visual system with clarity and purpose",
      icon: Figma,
    },
    {
      number: "04",
      title: "Prototype & Build",
      description:
        "Test interactions and bring the final experience to life in Webflow or frontend code",
      icon: Component,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Skills Hero */}
      <section className="relative overflow-hidden border-b border-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Animated Page Introduction */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="mr-2 text-accent-500">[</span>

              <Typewriter
                text="EXPLORING / SKILLS"
                delay={70}
                loop={false}
                className="text-primary-400"
              />

              <span className="terminal-cursor ml-1" />

              <span className="ml-2 text-accent-500">]</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6">
              {["Research", "Design", "Motion", "Technology"].map(
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
              delay: 2.2,
              duration: 0.7,
            }}
            className="max-w-5xl"
          >
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-neutral-50">
              A multidisciplinary toolkit{" "}
              <span className="text-primary-400">
                for thoughtful digital experiences
              </span>
            </h1>

            <p className="max-w-3xl mt-8 text-lg md:text-xl leading-relaxed text-neutral-300">
              I combine design thinking, visual communication, interaction,
              Webflow, frontend foundations and AI-assisted creativity to move
              ideas from early exploration to tangible digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="text-primary-400">01 / CAPABILITIES</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="max-w-4xl font-sans text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-neutral-50">
              Skills connected by
              <span className="text-primary-400"> one design process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: categoryIndex * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  whileHover={{
                    y: -5,
                    borderColor: "#B455FF",
                  }}
                  className="group rounded-2xl border border-neutral-700 bg-bg-elevated p-6 md:p-8 shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10">
                        <IconComponent size={23} className="text-primary-400" />
                      </div>

                      <div>
                        <p className="font-mono text-xs tracking-[0.14em] text-accent-500">
                          {category.number} / {category.label}
                        </p>

                        <h3 className="mt-2 font-sans text-2xl font-semibold text-neutral-50">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </div>

                  <p className="mt-6 leading-relaxed text-neutral-400">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-700 bg-bg-surface px-3 py-2 font-mono text-xs text-neutral-300 hover:border-primary-500 hover:text-primary-300 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative AI Toolkit */}
      <section className="py-14 md:py-24 bg-bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          >
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-5 font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>

                <span className="text-primary-400">
                  02 / CREATIVE AI TOOLKIT
                </span>

                <span className="text-accent-500">]</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
                AI as a creative
                <span className="text-primary-400"> collaborator</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                I use AI tools to explore ideas, visualise concepts and
                experiment with images, video and sound. They support my process
                without replacing design judgment or human intention.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiTools.map((tool, index) => {
                const IconComponent = tool.icon;

                return (
                  <motion.div
                    key={tool.name}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#B455FF",
                    }}
                    className="flex items-start gap-4 rounded-xl border border-neutral-700 bg-bg-elevated p-5 transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10">
                      <IconComponent size={20} className="text-primary-400" />
                    </div>

                    <div>
                      <h3 className="font-mono font-semibold text-neutral-100">
                        {tool.name}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                        {tool.purpose}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="text-primary-400">
                03 / HOW I CONNECT THE DOTS
              </span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-neutral-50">
              From understanding
              <span className="text-primary-400"> to implementation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    borderColor: "#B455FF",
                  }}
                  className="relative rounded-xl border border-neutral-700 bg-bg-elevated p-5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent-500">
                      {step.number}
                    </span>

                    <IconComponent size={19} className="text-primary-400" />
                  </div>

                  <h3 className="mt-8 font-sans text-xl font-semibold text-neutral-50">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>

                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10 -translate-y-1/2 font-mono text-accent-500">
                      →
                    </div>
                  )}
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
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-bg-elevated to-primary-900/20 p-8 md:p-12 text-center shadow-glow"
          >
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="text-primary-400">SKILLS IN ACTION</span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
              See how these skills
              <span className="text-primary-400">
                {" "}
                come together in practice
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
              Explore selected work combining research, visual design,
              interaction, Webflow and creative technology
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="group inline-flex sm:w-[252px] items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-500 px-8 py-4 font-semibold text-bg-page shadow-glow hover:border-primary-400 hover:bg-primary-400 transition-all duration-200"
              >
                View Selected Work
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex sm:w-[252px] items-center justify-center rounded-lg border-2 border-neutral-600 bg-bg-elevated px-8 py-4 font-semibold text-neutral-100 hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
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
