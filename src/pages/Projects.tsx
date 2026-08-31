import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, Filter } from "lucide-react";
import { Typewriter } from "../components/Typewriter";

type ProjectCategory =
  | "all"
  | "web-design"
  | "ux-ui"
  | "webflow"
  | "frontend"
  | "motion"
  | "ui";

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  path?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DayBake",
    category: "web-design",
    categoryLabel: "Web Design",
    description:
      "A warm editorial landing page for an artisan bakery with local delivery",
    image: "/images/projects/daybake/daybake-video-cover.webp",
    tags: ["Web Design", "UI Design", "Figma"],
    path: "/projects/daybake",
  },
  {
    id: 2,
    title: "Swisswatch",
    category: "webflow",
    categoryLabel: "Webflow",
    description:
      "A responsive product experience combining precise layout and interaction",
    image: "/images/projects/swisswatch/swisswatch-multi-device.webp",
    tags: ["Webflow", "Responsive Design", "Interaction"],
    path: "/projects/swisswatch",
  },
  {
    id: 3,
    title: "Local Loop",
    category: "ux-ui",
    categoryLabel: "UX/UI",
    description:
      "An end-to-end UX UI case study shaped by research, user flows and responsive design",
    image: "/images/projects/local-loop/local-loop-responsive.webp",
    tags: ["UX/UI", "Research", "Webflow"],
    path: "/projects/local-loop",
  },
  {
    id: 4,
    title: "BuildWise",
    category: "frontend",
    categoryLabel: "Frontend",
    description:
      "A responsive construction website focused on usability and frontend implementation",
    image: "/images/projects/buildwise/buildwise-cover.webp",
    tags: ["Frontend", "Responsive", "Web Design"],
  },
  {
    id: 5,
    title: "Motion",
    category: "motion",
    categoryLabel: "Motion",
    description:
      "A collection of animated interfaces and visual motion studies created in Figma",
    image: "/images/projects/motion-experiments/motion-experiments-cover.webp",
    tags: ["Motion", "Figma", "Prototyping"],
  },
  {
    id: 6,
    title: "UI Experiments",
    category: "ui",
    categoryLabel: "UI Design",
    description:
      "A collection of visual UI concepts and interface explorations created in Figma",
    image: "/images/projects/ui-experiments/ui-experiments-cover.webp",
    tags: ["UI Design", "Figma", "Visual Design"],
  },
];

const filters: {
  id: ProjectCategory;
  label: string;
}[] = [
  {
    id: "all",
    label: "All Work",
  },
  {
    id: "web-design",
    label: "Web Design",
  },
  {
    id: "ux-ui",
    label: "UX/UI",
  },
  {
    id: "webflow",
    label: "Webflow",
  },
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "motion",
    label: "Motion",
  },
  {
    id: "ui",
    label: "UI Design",
  },
];

const openingWords = ["UX/UI", "Web Design", "Webflow", "Frontend"];

const getCategoryStyles = (category: Exclude<ProjectCategory, "all">) => {
  switch (category) {
    case "web-design":
      return {
        badge: "border-violet-400/40 bg-violet-400/15 text-violet-300",
        icon: "text-violet-400 group-hover:text-violet-300",
      };

    case "webflow":
      return {
        badge: "border-indigo-400/40 bg-indigo-400/15 text-indigo-300",
        icon: "text-indigo-400 group-hover:text-indigo-300",
      };

    case "ux-ui":
      return {
        badge: "border-fuchsia-400/40 bg-fuchsia-400/15 text-fuchsia-300",
        icon: "text-fuchsia-400 group-hover:text-fuchsia-300",
      };

    case "frontend":
      return {
        badge: "border-sky-400/40 bg-sky-400/15 text-sky-300",
        icon: "text-sky-400 group-hover:text-sky-300",
      };

    case "motion":
      return {
        badge: "border-amber-400/40 bg-amber-400/15 text-amber-300",
        icon: "text-amber-400 group-hover:text-amber-300",
      };

    case "ui":
      return {
        badge: "border-purple-400/40 bg-purple-400/15 text-purple-300",
        icon: "text-purple-400 group-hover:text-purple-300",
      };

    default:
      return {
        badge: "border-primary-500/40 bg-primary-500/15 text-primary-300",
        icon: "text-primary-400 group-hover:text-primary-300",
      };
  }
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getFilterCount = (category: ProjectCategory) => {
    if (category === "all") {
      return projects.length;
    }

    return projects.filter((project) => project.category === category).length;
  };

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Selected Work Hero */}
      <section className="relative overflow-hidden border-b border-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Animated Page Introduction */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="mr-2 text-accent-500">[</span>

              <Typewriter
                text="OPENING / SELECTED WORK"
                delay={55}
                loop={false}
                className="text-primary-400"
              />

              <span className="terminal-cursor ml-1" />

              <span className="ml-2 text-accent-500">]</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              {openingWords.map((word, index) => (
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
                    className={`font-mono text-sm font-semibold tracking-[0.1em] md:text-base ${
                      index === openingWords.length - 1
                        ? "text-primary-400"
                        : "text-neutral-400"
                    }`}
                  >
                    {word}
                  </motion.span>

                  {index < openingWords.length - 1 && (
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
              ))}
            </div>
          </div>

          <div className="max-w-6xl">
            {/* Main Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.1,
                duration: 0.7,
              }}
              className="max-w-6xl font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-neutral-50"
            >
              Selected work shaped by{" "}
              <span className="text-primary-400">
                curiosity, clarity and character
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.45,
                duration: 0.6,
              }}
              className="max-w-3xl mt-8 text-lg md:text-xl leading-relaxed text-neutral-300"
            >
              A growing collection of digital experiences where visual
              direction, thoughtful structure and interaction come together
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative border-b border-neutral-700 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group inline-flex items-center gap-3 rounded-lg border px-4 py-3 font-mono text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-primary-500 bg-primary-500 text-bg-page shadow-glow"
                      : "border-neutral-700 bg-bg-elevated text-neutral-300 hover:border-primary-500/50 hover:text-primary-400"
                  }`}
                >
                  <Filter
                    size={15}
                    className={
                      isActive
                        ? "text-bg-page"
                        : "text-neutral-500 group-hover:text-primary-400"
                    }
                  />

                  <span>{filter.label}</span>

                  <span
                    className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
                      isActive
                        ? "bg-bg-page/20 text-bg-page"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    {getFilterCount(filter.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14"
          >
            <div>
              <div className="mb-4 font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>

                <span className="mx-2 text-primary-400">PROJECT LIBRARY</span>

                <span className="text-accent-500">]</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                Explore the collection
              </h2>
            </div>

            <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-400">
              Selected projects across design, interaction, Webflow and frontend
              development
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const categoryStyles = getCategoryStyles(project.category);

                const cardContent = (
                  <>
                    {/* Project Image */}
                    <div className="relative aspect-[3/2] overflow-hidden bg-white">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/35 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium backdrop-blur-sm ${categoryStyles.badge}`}
                        >
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-50 transition-colors duration-300 group-hover:text-primary-400">
                          {project.title}
                        </h3>

                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-bg-page transition-all duration-300 group-hover:border-primary-500/50 ${categoryStyles.icon}`}
                        >
                          {project.path ? (
                            <ArrowUpRight size={18} />
                          ) : (
                            <Clock3 size={17} />
                          )}
                        </div>
                      </div>

                      <p className="mt-4 leading-relaxed text-neutral-400">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-neutral-700 bg-bg-page px-3 py-1.5 font-mono text-xs text-neutral-400 transition-colors duration-300 group-hover:border-primary-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-7">
                        {project.path ? (
                          <span className="inline-flex items-center font-mono text-sm font-semibold text-primary-400">
                            View Project
                            <ArrowUpRight
                              size={16}
                              className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-amber-300 px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.08em] text-bg-page">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                );

                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 15,
                      scale: 0.97,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.4,
                    }}
                    className="group flex min-h-full flex-col overflow-hidden rounded-xl border border-neutral-700 bg-bg-elevated shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-card-hover"
                  >
                    {project.path ? (
                      <Link
                        to={project.path}
                        className="flex h-full flex-col"
                        aria-label={`View ${project.title} project`}
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div className="flex h-full flex-col">{cardContent}</div>
                    )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {visibleProjects.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="py-24 text-center"
            >
              <p className="font-mono text-primary-400">
                More work is being prepared
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-12 pb-24 md:py-24 bg-bg-surface/30">
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
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-bg-elevated to-primary-950/30 p-8 sm:p-12 text-center shadow-glow"
          >
            <div className="font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="mx-2 text-primary-400">LET&apos;S CREATE</span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="max-w-3xl mx-auto mt-6 font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
              Looking for a designer to shape your next digital experience?
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
              I’m open to UX/UI roles, Webflow projects and creative
              collaborations focused on thoughtful, accessible and visually
              distinctive products
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
              <Link
                to="/contact"
                className="inline-flex sm:w-[250px] items-center justify-center rounded-lg bg-primary-500 px-8 py-4 font-semibold text-bg-page shadow-glow transition-all duration-300 hover:bg-primary-400"
              >
                Let&apos;s Connect
              </Link>

              <Link
                to="/about"
                className="inline-flex sm:w-[250px] items-center justify-center rounded-lg border-2 border-neutral-600 bg-bg-surface px-8 py-4 font-semibold text-neutral-100 transition-all duration-300 hover:border-primary-500 hover:text-primary-400"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
