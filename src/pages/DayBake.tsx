import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  Layers,
  Lightbulb,
  MousePointer2,
  Package,
  Palette,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Typewriter } from "../components/Typewriter";
import { VideoDemo } from "../components/VideoDemo";

const projectFacts = [
  {
    label: "ROLE",
    value: "UX/UI Designer",
  },
  {
    label: "PROJECT TYPE",
    value: "Educational Concept",
  },
  {
    label: "SCOPE",
    value: "Research · UI Design · Prototyping",
  },
  {
    label: "TOOLS",
    value: "Figma · AI-assisted Visuals",
  },
];

const audienceNeeds = [
  {
    question: "What can I order",
    answer: "Clear product categories and an interactive assortment",
  },
  {
    question: "Why should I trust this bakery",
    answer: "Natural ingredients, handmade production and tactile imagery",
  },
  {
    question: "When will my order arrive",
    answer: "Visible delivery information and same-day freshness",
  },
  {
    question: "How do I place an order",
    answer: "Direct calls to action placed throughout the experience",
  },
];

const visualPrinciples = [
  {
    icon: Palette,
    title: "Editorial typography",
    description:
      "A distinctive serif typeface gives the bakery a contemporary premium character",
  },
  {
    icon: Eye,
    title: "Tactile photography",
    description:
      "Bread, flour and handmade details make the product feel real and desirable",
  },
  {
    icon: Sparkles,
    title: "Warm atmosphere",
    description:
      "Cream, caramel and botanical green create a calm and natural visual language",
  },
];

const structureItems = [
  "Hero",
  "Benefits",
  "Assortment",
  "Process",
  "Brand Story",
  "Reviews",
  "Delivery and Packaging",
  "Newsletter",
  "Footer",
];

const designDecisions = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Interactive assortment",
    subtitle: "Helping visitors explore without overload",
    description:
      "Instead of presenting every product at once, the assortment is divided into clear categories. Visitors can select a category and focus only on the products that are relevant to them.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Real process over decoration",
    subtitle: "Showing the process instead of simply describing it",
    description:
      "A process video introduces movement, hands and real preparation. This creates more trust than another static photograph and makes the handmade character of the bakery easier to understand.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Visual storytelling",
    subtitle: "Turning information into atmosphere",
    description:
      "The brand story is communicated through composition, photography, typography and packaging rather than relying on long blocks of explanatory copy.",
  },
  {
    number: "04",
    icon: Target,
    title: "Clear conversion points",
    subtitle: "Guiding visitors towards action",
    description:
      "Order, assortment and newsletter actions appear after the visitor has received the information needed to make a confident decision.",
  },
];

const challenges = [
  {
    title: "Making copy fit the composition",
    description:
      "Several text blocks needed shorter and clearer wording to preserve the visual rhythm of the page without losing meaning.",
  },
  {
    title: "Working with circular typography",
    description:
      "The original word newsletter was too long for a circular label with a diameter of 80 pixels. I tested shorter phrases and separators until the text followed the shape naturally.",
  },
  {
    title: "Choosing authenticity over effect",
    description:
      "I initially explored a subtle steam animation for the hero. The generated result looked more like smoke than fresh baking, so I removed it and used real process footage instead.",
  },
];

const learningPoints = [
  "Trust can be shaped through small visual and interaction decisions",
  "A real process can communicate more than an additional decorative effect",
  "Shorter copy often creates a stronger and more confident composition",
  "Brand consistency needs to continue beyond the digital interface",
];

export const DayBake = () => {
  const openingWords = ["Brief", "Research", "Visual Direction", "Prototype"];

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
                <Typewriter text="OPENING / DAYBAKE" delay={45} />
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
                  Designing trust around
                  <span className="block mt-2 text-primary-400">
                    freshly baked bread
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="max-w-xl text-lg md:text-xl leading-relaxed text-neutral-300"
              >
                An editorial landing page concept for a local artisan bakery
                focused on natural ingredients, handmade production and
                delivery.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project atmosphere */}
      <section className="relative py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-[1.35fr_0.65fr] md:gap-6"
          >
            {/* Main process image */}
            <figure className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-primary-500/30 bg-bg-elevated shadow-card sm:min-h-[420px] md:min-h-[560px]">
              <img
                src="/images/projects/daybake/daybake-hero-process.png"
                alt="Artisan bakers preparing bread in the DayBake bakery"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent" />

              <figcaption className="absolute bottom-5 left-5 right-5 font-mono text-xs tracking-[0.18em] text-neutral-100">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-300">ARTISAN PROCESS</span>
                <span className="text-accent-500">]</span>
              </figcaption>
            </figure>

            {/* Oven image */}
            <figure className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated shadow-card sm:min-h-[360px] md:min-h-[560px]">
              <img
                src="/images/projects/daybake/daybake-hero-oven.png"
                alt="Fresh artisan loaves coming out of the bakery oven"
                className="absolute inset-0 h-full w-full object-cover object-[65%_center] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent" />

              <figcaption className="absolute bottom-5 left-5 right-5 font-mono text-xs tracking-[0.18em] text-neutral-100">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-300">SMALL BATCHES</span>
                <span className="text-accent-500">]</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Project Facts */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-neutral-700 bg-bg-elevated overflow-hidden">
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
                className="p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-neutral-700 last:border-0"
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

      {/* Brief */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">THE BRIEF</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] text-neutral-50">
                A local bakery experience built around
                <span className="text-primary-400"> freshness and trust</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed text-neutral-300"
            >
              <p>
                DayBake is a fictional brand concept for a local artisan bakery
                offering naturally fermented bread, pastries and delivery on the
                day of baking.
              </p>

              <p>
                The landing page needed to communicate freshness, craftsmanship
                and convenience while guiding visitors towards their first order
                or newsletter signup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-5">
                  <p className="font-mono text-xs tracking-[0.18em] text-accent-500">
                    PRIMARY GOAL
                  </p>

                  <p className="mt-3 font-medium text-neutral-100">
                    Encourage the first order
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-5">
                  <p className="font-mono text-xs tracking-[0.18em] text-accent-500">
                    SECONDARY GOAL
                  </p>

                  <p className="mt-3 font-medium text-neutral-100">
                    Grow the newsletter audience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-bg-elevated to-accent-500/5 p-8 sm:p-12 md:p-16 shadow-glow"
          >
            <Lightbulb className="mx-auto h-10 w-10 text-accent-500" />

            <p className="mt-6 font-mono text-xs tracking-[0.18em] text-primary-400">
              THE DESIGN CHALLENGE
            </p>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] text-neutral-50">
              How can a digital experience make an unfamiliar bakery feel warm,
              trustworthy and genuinely handmade
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">
                AUDIENCE ASSUMPTIONS
              </span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
              Designing for the questions customers ask first
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              The concept was shaped around the practical questions a first-time
              visitor might have when discovering a local bakery online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audienceNeeds.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary-500/30 bg-primary-500/10">
                    <Users className="h-5 w-5 text-primary-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-neutral-50">
                      {item.question}
                    </h3>

                    <p className="mt-3 leading-relaxed text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moodboard */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">VISUAL DIRECTION</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                Translating warmth into a visual system
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                The moodboard brought together editorial typography, tactile
                food photography, natural materials and the atmosphere of a
                small local bakery.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                Dark botanical green communicates natural ingredients, while
                cream and caramel tones introduce softness, warmth and the
                colour of freshly baked bread.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-50"
            >
              <img
                src="/images/projects/daybake/daybake-moodboard.png"
                alt="DayBake moodboard with bakery photography typography and colour references"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {visualPrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6"
                >
                  <Icon className="h-6 w-6 text-primary-400" />

                  <h3 className="mt-5 text-xl font-semibold text-neutral-50">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">BRAND WORLD</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                Extending the experience beyond the screen
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                I wanted DayBake to feel like a believable local brand rather
                than an isolated landing page concept.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                I developed a simple visual direction built around a wheat
                symbol, natural materials and warm neutral tones, then used
                AI-assisted image generation to explore how the identity could
                extend into packaging and physical customer touchpoints.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex min-h-52 items-center justify-center rounded-2xl bg-[#F7F3EA] p-8"
              >
                <img
                  src="/images/projects/daybake/daybake-logo.png"
                  alt="DayBake wordmark and wheat symbol"
                  className="w-full max-w-64 h-auto"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex min-h-52 items-center justify-center rounded-2xl bg-[#46543A] p-10"
              >
                <img
                  src="/images/projects/daybake/daybake-symbol.png"
                  alt="DayBake wheat symbol"
                  className="w-20 h-20 object-contain brightness-0 invert"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border border-neutral-700"
          >
            <img
              src="/images/projects/daybake/daybake-packaging.jpg"
              alt="AI-assisted DayBake packaging concept with bread paper bags and labels"
              className="w-full aspect-[16/9] object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
              <Package className="h-6 w-6 text-primary-400" />

              <h3 className="mt-4 text-lg font-semibold text-neutral-50">
                Natural materials
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-400">
                Kraft paper supports the handmade and environmentally conscious
                character
              </p>
            </div>

            <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
              <Sparkles className="h-6 w-6 text-primary-400" />

              <h3 className="mt-4 text-lg font-semibold text-neutral-50">
                Recognisable symbol
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-400">
                The wheat mark creates a direct connection to ingredients and
                craft
              </p>
            </div>

            <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
              <Palette className="h-6 w-6 text-primary-400" />

              <h3 className="mt-4 text-lg font-semibold text-neutral-50">
                Consistent atmosphere
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-400">
                Warm light and tactile surfaces continue the visual language of
                the landing page
              </p>
            </div>
          </div>

          <p className="mt-5 font-mono text-xs tracking-[0.12em] text-neutral-500">
            AI-assisted packaging visualisation created for concept exploration
          </p>
        </div>
      </section>

    
      {/* Information Architecture */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">
            <div>
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">PAGE STRUCTURE</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                Structuring emotion before information
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                The page begins with product appeal, then gradually introduces
                practical information, social proof and clear opportunities to
                act.
              </p>
            </div>

            <div className="space-y-3">
              {structureItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 rounded-xl border border-neutral-700 bg-bg-elevated px-5 py-4"
                >
                  <span className="font-mono text-xs text-accent-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-medium text-neutral-100">{item}</span>

                  {index < structureItems.length - 1 && (
                    <ArrowRight className="ml-auto h-4 w-4 text-primary-400" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">KEY DECISIONS</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
              Connecting each design choice to a purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designDecisions.map((decision, index) => {
              const Icon = decision.icon;

              return (
                <motion.article
                  key={decision.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8 transition-colors duration-300 hover:border-primary-500/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-accent-500">
                      {decision.number}
                    </span>

                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-neutral-50">
                    {decision.title}
                  </h3>

                  <p className="mt-3 font-medium text-primary-300">
                    {decision.subtitle}
                  </p>

                  <p className="mt-5 leading-relaxed text-neutral-400">
                    {decision.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prototype */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">
                  INTERACTIVE PROTOTYPE
                </span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                From static screens to a connected experience
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                The Figma prototype connects the page structure, scrolling
                experience and key interactions into one continuous journey.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-100"
            >
              <img
                src="/images/projects/daybake/daybake-prototype.png"
                alt="DayBake interactive prototype connections in Figma"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="mt-16 md:mt-24">
            <VideoDemo
              youtubeId="X-w6HM-fH3M"
              title="DayBake – Interactive Landing Page Demo"
              cover="/images/projects/daybake/daybake-video-cover.png"
              alt="DayBake Landing Page Video Demo"
              buttonLabel="Watch Video Demo"
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">ITERATIONS</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
              What changed along the way
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8"
              >
                <span className="font-mono text-sm text-accent-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-neutral-50">
                  {challenge.title}
                </h3>

                <p className="mt-4 leading-relaxed text-neutral-400">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Result */}
      <section className="py-16 md:py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">THE RESULT</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
              A warm editorial concept with a clear commercial structure
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-300">
              The final concept presents DayBake as a trustworthy and
              contemporary artisan brand while helping visitors understand the
              product, explore the assortment and move naturally towards an
              order.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 mx-auto max-w-xl overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-50 shadow-card"
          >
            <img
              src="/images/projects/daybake/daybake-full-page.png"
              alt="Complete DayBake desktop landing page"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">REFLECTION</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                What I learned
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-neutral-300">
                This project showed me how strongly trust can be shaped through
                small visual and interaction decisions.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                It also reminded me that the most convincing solution is not
                always the most decorative one. Sometimes showing a real process
                creates more value than adding another visual effect.
              </p>

              <div className="mt-8 space-y-4">
                {learningPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                      <Check className="h-4 w-4 text-primary-400" />
                    </span>

                    <p className="leading-relaxed text-neutral-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 border-t border-neutral-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-bg-elevated to-accent-500/5 p-8 sm:p-12 text-center shadow-glow"
          >
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">CONTINUE EXPLORING</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-7 text-3xl sm:text-4xl font-semibold text-neutral-50">
              Explore more selected work
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-bg-page shadow-glow transition-all duration-200 hover:bg-primary-400"
              >
                Selected Work
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-neutral-600 bg-bg-surface px-7 py-4 font-semibold text-neutral-100 transition-all duration-200 hover:border-primary-500 hover:text-primary-400"
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
