import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Compass,
  Figma,
  Workflow,
} from "lucide-react";
import { Typewriter } from "../components/Typewriter";

const projectFacts = [
  {
    label: "ROLE",
    value: "UX UI Designer · Web Designer",
  },
  {
    label: "PROJECT TYPE",
    value: "End-to-End UX UI Case Study",
  },
  {
    label: "SCOPE",
    value: "Research · UX · UI · Responsive Design",
  },
  {
    label: "TOOLS",
    value: "Figma · Webflow",
  },
];

const researchHighlights = [
  {
    value: "14",
    label: "Survey Respondents",
    description: "Quantitative research participants",
  },
  {
    value: "2",
    label: "In-Depth Interviews",
    description: "Qualitative conversations exploring needs and decision-making",
  },
  {
    value: "92%",
    label: "Key Criteria",
    description: "Location and price were among the most important factors",
  },
  {
    value: "75%",
    label: "Flexible Search",
    description: "Were open to activities outside their immediate area",
  },
];

const personas = [
  {
    name: "Laura",
    type: "Spontaneous social explorer",
  },
  {
    name: "Max",
    type: "Time-conscious professional",
  },
  {
    name: "Anna",
    type: "Family-oriented planner",
  },
];

const insightDecisions = [
  {
    insight: "Users often do not know what they want to choose",
    decision:
      "Introduce a guided discovery path with personalized recommendations and an AI-assisted option",
  },
  {
    insight: "Location and price strongly influence the final decision",
    decision:
      "Make these criteria visible in filters and activity cards instead of hiding them deeper in the experience",
  },
  {
    insight: "Information is fragmented across multiple platforms",
    decision:
      "Create one consistent catalogue structure with comparable activity information",
  },
  {
    insight: "Comparing similar options creates friction",
    decision:
      "Standardize cards, filters and activity details so users can evaluate alternatives faster",
  },
];

const finalScreens = [
  {
    label: "HOME",
    title: "Discovery starts with context",
    description:
      "The home page combines quick entry points, categories, local inspiration and guided recommendations",
    image: "/images/projects/local-loop/local-loop-home.webp",
  },
  {
    label: "CATALOG",
    title: "Focused filtering and comparison",
    description:
      "The catalogue surfaces time, price, distance and social context while keeping comparison lightweight",
    image: "/images/projects/local-loop/local-loop-catalog.webp",
  },
  {
    label: "ACTIVITY",
    title: "Clear information before commitment",
    description:
      "The activity page brings practical details, atmosphere and next steps together in one structured view",
    image: "/images/projects/local-loop/local-loop-activity.webp",
  },
];

const learningPoints = [
  "Research becomes valuable when insights are translated into visible product decisions",
  "Good discovery experiences need to support both decisive and uncertain users",
  "Consistent information architecture makes comparison easier and reduces cognitive load",
  "Responsive implementation requires preserving hierarchy rather than simply shrinking layouts",
];

export const LocalLoop = () => {
  const openingWords = ["Research", "User Flow", "UX UI", "Webflow"];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Project Opening */}
<section className="relative overflow-hidden border-b border-neutral-700">
  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <Link
      to="/projects"
      className="group mb-12 inline-flex items-center font-mono text-sm text-neutral-400 transition-colors duration-200 hover:text-primary-400"
    >
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      Back to Selected Work
    </Link>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>

        <span className="mx-2 text-primary-400">
          <Typewriter text="OPENING / LOCAL LOOP" delay={45} />
        </span>

        <span className="text-accent-500">]</span>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm sm:text-base tracking-[0.12em]">
        {openingWords.map((word, index) => (
          <div key={word} className="flex items-center gap-3">
            <motion.span
              initial={{ opacity: 0, color: "#7A8894" }}
              animate={{
                opacity: 1,
                color:
                  index === openingWords.length - 1
                    ? "#B455FF"
                    : "#A2ADB6",
              }}
              transition={{
                delay: 1.1 + index * 0.22,
                duration: 0.4,
              }}
            >
              {word}
            </motion.span>

            {index < openingWords.length - 1 && (
              <span className="text-accent-500">·</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-neutral-50"
          >
            Designing a clearer way to discover
            <span className="block mt-2 text-primary-400">
              local experiences
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="max-w-xl text-lg md:text-xl leading-relaxed text-neutral-300"
        >
          An end-to-end UX UI case study for discovering local activities,
          shaped through research, user flows, wireframes, visual design and
          responsive Webflow implementation
        </motion.p>
      </div>
    </motion.div>
  </div>
</section>

{/* Responsive Hero Visual */}
<section className="relative py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated shadow-card"
    >
      <img
        src="/images/projects/local-loop/local-loop-responsive.webp"
        alt="Local Loop responsive interface shown across desktop tablet and mobile devices"
        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-bg-page/55 via-transparent to-transparent" />

      <figcaption className="absolute bottom-5 left-5 right-5 font-mono text-xs tracking-[0.18em] text-neutral-100">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-300">
          LOCAL DISCOVERY EXPERIENCE
        </span>
        <span className="text-accent-500">]</span>
      </figcaption>
    </motion.figure>
  </div>
</section>

{/* Project Facts */}
<section className="pb-16 md:pb-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated">
      {projectFacts.map((fact, index) => (
        <motion.div
          key={fact.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
          }}
          viewport={{ once: true }}
          className="border-b border-neutral-700 p-6 last:border-0 sm:border-b-0 sm:border-r lg:p-8"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-neutral-500">
            {fact.label}
          </p>

          <p className="mt-3 font-medium leading-relaxed text-neutral-100">
            {fact.value}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Challenge */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">THE CHALLENGE</span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold leading-[1.2] text-neutral-50 sm:text-4xl md:text-5xl">
          Making local discovery feel
          <span className="text-primary-400">
            {" "}
            simpler and more relevant
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-5 text-lg leading-relaxed text-neutral-300"
      >
        <p>
          People searching for local activities often move between Google,
          social media, recommendations and individual organizer websites
        </p>

        <p className="text-neutral-400">
          Information is inconsistent, comparison takes effort and users do not
          always begin with a clear idea of what they want to do
        </p>

        <p className="text-neutral-400">
          Local Loop explores how one structured discovery experience could
          bring activities together while supporting both focused search and
          open-ended inspiration
        </p>
      </motion.div>
    </div>
  </div>
</section>

{/* Research */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12 md:mb-16">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">RESEARCH</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Understanding how people choose what to do
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-400">
        Quantitative research explored where users search, what influences their
        decisions and where friction appears during comparison
      </p>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {researchHighlights.map((item, index) => (
        <motion.article
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.45,
          }}
          viewport={{ once: true }}
          className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8"
        >
          <p className="font-mono text-3xl font-semibold text-primary-400">
            {item.value}
          </p>

          <h3 className="mt-5 text-xl font-semibold text-neutral-50">
            {item.label}
          </h3>

          <p className="mt-3 leading-relaxed text-neutral-400">
            {item.description}
          </p>
        </motion.article>
      ))}
    </div>
  </div>
</section>

{/* Personas */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div>
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">USER PERSONAS</span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
          Different needs, one discovery system
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          Three personas helped represent spontaneous discovery,
          time-sensitive search and family planning
        </p>

        <div className="mt-8 space-y-5">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="border-l-2 border-primary-500/40 pl-5"
            >
              <p className="font-semibold text-neutral-100">
                {persona.name}
              </p>

              <p className="mt-1 text-sm text-primary-400">
                {persona.type}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        // className="overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated"
        className="self-start overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated"
      >
        <img
          src="/images/projects/local-loop/local-loop-personas.webp"
          alt="Local Loop user personas including Anna Max and Laura"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.figure>
    </div>
  </div>
</section>

{/* Customer Journey */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">CUSTOMER JOURNEY</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Mapping friction from inspiration to booking
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-400">
        The journey helped identify where uncertainty, comparison effort and
        fragmented information interrupt the decision-making process
      </p>
    </div>

    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-neutral-700 bg-white"
    >
      <img
        src="/images/projects/local-loop/local-loop-cjm.webp"
        alt="Customer journey map for discovering and booking local activities"
        className="w-full h-auto"
        loading="lazy"
      />
    </motion.figure>
  </div>
</section>

{/* User Flow */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">USER FLOW</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Supporting both directed search and open discovery
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-400">
        The flow separates users who already know what they want from those who
        need help narrowing down suitable activities
      </p>
    </div>

    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-neutral-700 bg-white"
    >
      <img
        src="/images/projects/local-loop/local-loop-user-flow.webp"
        alt="Local Loop user flow showing direct search and guided AI-assisted discovery"
        className="w-full h-auto"
        loading="lazy"
      />
    </motion.figure>
  </div>
</section>

{/* Insights to Decisions */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12 md:mb-16">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">
          INSIGHTS TO DECISIONS
        </span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Translating research into product decisions
      </h2>
    </div>

    <div className="space-y-3">
      {insightDecisions.map((item, index) => (
        <motion.article
          key={item.insight}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.45,
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:grid-cols-[70px_1fr_1fr] sm:p-8"
        >
          <span className="font-mono text-sm text-accent-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-neutral-500">
              RESEARCH INSIGHT
            </p>

            <p className="mt-3 font-medium leading-relaxed text-neutral-100">
              {item.insight}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-primary-400">
              DESIGN DECISION
            </p>

            <p className="mt-3 leading-relaxed text-neutral-400">
              {item.decision}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

{/* Visual Direction */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 items-center">
      <div>
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">VISUAL DIRECTION</span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
          Editorial structure with a local community feel
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          The moodboard explored bold typography, modular editorial layouts,
          community imagery and visual cues inspired by urban discovery
        </p>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-neutral-700 bg-white"
      >
        <img
          src="/images/projects/local-loop/local-loop-moodboard.webp"
          alt="Local Loop moodboard with editorial typography community photography and urban references"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.figure>
    </div>
  </div>
</section>

{/* Wireframes */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">WIREFRAMES</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Defining structure before visual styling
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-400">
        The initial layouts focused on information hierarchy, navigation,
        filtering and the transition from discovery to activity details
      </p>
    </div>

    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-neutral-700 bg-white"
    >
      <img
        src="/images/projects/local-loop/local-loop-wireframes.webp"
        alt="Wireframes for Local Loop home catalogue and activity detail pages"
        className="w-full h-auto"
        loading="lazy"
      />
    </motion.figure>
  </div>
</section>

{/* Brand Identity */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 items-center">
      <div>
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">BRAND IDENTITY</span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
          Discover.
          <span className="text-primary-400"> Connect. Belong.</span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          The Local Loop identity combines a compact wordmark with a circular
          visual motif that reinforces connection, movement and local discovery
        </p>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-neutral-700 bg-white p-6 sm:p-10"
      >
        <img
          src="/images/projects/local-loop/local-loop-brand.webp"
          alt="Local Loop brand logo and Discover Connect Belong tagline"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.figure>
    </div>
  </div>
</section>

{/* Visual System */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">VISUAL SYSTEM</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        A restrained system built around contrast and clarity
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-400">
        Bebas Neue creates strong editorial moments while Inter supports
        readability across navigation, filters, cards and supporting information
      </p>
    </div>

    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-neutral-700 bg-white"
    >
      <img
        src="/images/projects/local-loop/local-loop-design-system.webp"
        alt="Local Loop color styles and typography system"
        className="w-full h-auto"
        loading="lazy"
      />
    </motion.figure>
  </div>
</section>

{/* Final UI */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mb-12 md:mb-16">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">FINAL UI</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        Bringing discovery, comparison and detail into one experience
      </h2>
    </div>

    <div className="space-y-12 md:space-y-16">
      {finalScreens.map((screen) => (
        <motion.article
          key={screen.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[0.35fr_0.65fr] md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-accent-500">
                {screen.label}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-neutral-50 sm:text-3xl">
                {screen.title}
              </h3>
            </div>

            <p className="max-w-2xl leading-relaxed text-neutral-400 md:justify-self-end">
              {screen.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-white">
            <img
              src={screen.image}
              alt={`${screen.label} screen from the Local Loop interface`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

{/* Webflow Implementation */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 items-center">
      <div>
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">
            WEBFLOW IMPLEMENTATION
          </span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
          From Figma concept to responsive Webflow experience
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-300">
          The final concept was translated into a responsive Webflow landing
          page and adapted for desktop, tablet and mobile
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-3">
            <Figma className="mt-1 h-5 w-5 shrink-0 text-primary-400" />

            <p className="text-neutral-400">
              Visual structure and UI developed in Figma
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Workflow className="mt-1 h-5 w-5 shrink-0 text-primary-400" />

            <p className="text-neutral-400">
              Responsive implementation created in Webflow
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Compass className="mt-1 h-5 w-5 shrink-0 text-primary-400" />

            <p className="text-neutral-400">
              Layout adapted while preserving the visual hierarchy
            </p>
          </div>
        </div>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated shadow-card"
      >
        <img
          src="/images/projects/local-loop/local-loop-responsive.webp"
          alt="Responsive Webflow implementation of Local Loop across multiple devices"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.figure>
    </div>
  </div>
</section>

{/* The Result */}
<section className="bg-bg-surface/30 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">THE RESULT</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
        A more structured path from
        <span className="text-primary-400"> “What could I do?”</span> to action
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
        Local Loop brings discovery, filtering, comparison and guided
        recommendations into one experience designed around real user needs
      </p>

      <a
        href="https://nadiia-finko-0512-localloop.webflow.io/"
        target="_blank"
        rel="noreferrer"
        className="group mt-8 inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-bg-page shadow-glow transition-all duration-200 hover:bg-primary-400"
      >
        View Live Project
        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>
  </div>
</section>

{/* Reflection */}
<section className="py-16 md:py-24">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
          <span className="text-accent-500">[</span>
          <span className="mx-2 text-primary-400">REFLECTION</span>
          <span className="text-accent-500">]</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
          What I learned
        </h2>
      </div>

      <div>
        <p className="text-lg leading-relaxed text-neutral-300">
          Local Loop helped me connect research, information architecture and
          interface design within one complete product process
        </p>

        <p className="mt-5 leading-relaxed text-neutral-400">
          The most important lesson was that visual design becomes much stronger
          when every major decision can be traced back to a real user need or
          behavioural pattern
        </p>

        <div className="mt-8 space-y-4">
          {learningPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                <Check className="h-4 w-4 text-primary-400" />
              </span>

              <p className="leading-relaxed text-neutral-300">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Continue Exploring */}
<section className="border-t border-neutral-700 py-16 md:py-24">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-bg-elevated to-accent-500/5 p-8 text-center shadow-glow sm:p-12"
    >
      <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
        <span className="text-accent-500">[</span>
        <span className="mx-2 text-primary-400">CONTINUE EXPLORING</span>
        <span className="text-accent-500">]</span>
      </div>

      <h2 className="mt-7 text-3xl font-semibold text-neutral-50 sm:text-4xl">
        Explore more selected work
      </h2>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/projects"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-bg-page shadow-glow transition-all duration-200 hover:bg-primary-400 sm:w-auto"
        >
          Selected Work
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-600 bg-bg-surface px-7 py-4 font-semibold text-neutral-100 transition-all duration-200 hover:border-primary-500 hover:text-primary-400 sm:w-auto"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};