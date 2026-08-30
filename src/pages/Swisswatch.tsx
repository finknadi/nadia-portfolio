import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Eye,
  Globe2,
  ImageIcon,
  MonitorSmartphone,
  MousePointer2,
  Search,
  Settings2,
  Smartphone,
  Tablet,
  Workflow,
} from "lucide-react";
import { Typewriter } from "../components/Typewriter";

const projectFacts = [
  {
    label: "ROLE",
    value: "Web Designer · Webflow Developer",
  },
  {
    label: "PROJECT TYPE",
    value: "Responsive Product Landing Page",
  },
  {
    label: "SCOPE",
    value: "Web Design · Webflow · Responsive Build",
  },
  {
    label: "TOOLS",
    value: "Figma · Webflow",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Brief analysis",
    description:
      "I reviewed the supplied content, product information, required navigation and visual constraints before defining the page structure",
  },
  {
    number: "02",
    title: "Layout interpretation",
    description:
      "The brief was translated into a clear visual hierarchy with a product-focused hero, supporting information and conversion points",
  },
  {
    number: "03",
    title: "Webflow development",
    description:
      "The page was built section by section using structured classes, reusable layout patterns and responsive behaviour",
  },
  {
    number: "04",
    title: "Quality and publication",
    description:
      "After responsive testing, I configured accessibility attributes, metadata, Open Graph settings and published the final project",
  },
];

const responsiveBreakpoints = [
  {
    icon: MonitorSmartphone,
    label: "DESKTOP",
    value: "Large editorial composition",
  },
  {
    icon: Tablet,
    label: "TABLET",
    value: "Rebalanced content and imagery",
  },
  {
    icon: Smartphone,
    label: "MOBILE",
    value: "Compact vertical experience",
  },
];

const webflowProof = [
  {
    icon: Workflow,
    title: "Structured Navigator",
    description:
      "The page is organised into clearly named sections and content groups, making the build easier to understand and maintain",
  },
  {
    icon: Code2,
    title: "Consistent class naming",
    description:
      "Project-specific classes follow a readable naming system across sections, containers, layouts and components",
  },
  {
    icon: Settings2,
    title: "Responsive settings",
    description:
      "Typography, spacing, image positioning and layout behaviour were adjusted individually for each breakpoint",
  },
  {
    icon: MousePointer2,
    title: "Interactions",
    description:
      "Interactive product markers, hover states and visual feedback support the product presentation without overwhelming it",
  },
];

const publishingDetails = [
  {
    icon: Eye,
    title: "Accessibility",
    description:
      "Meaningful images received custom alternative text and the page structure was checked for clear content hierarchy",
  },
  {
    icon: Search,
    title: "SEO metadata",
    description:
      "The page title and meta description were configured to communicate the project clearly in search results",
  },
  {
    icon: ImageIcon,
    title: "Open Graph",
    description:
      "A custom sharing preview was prepared with a branded image, title and description",
  },
  {
    icon: Globe2,
    title: "Live publication",
    description:
      "The finished responsive landing page was published and tested as a live Webflow project",
  },
];

const challenges = [
  {
    title: "Balancing the oversized hero watch",
    description:
      "The product image needed to remain dominant without overpowering the headline, navigation and call to action across different screen sizes",
  },
  {
    title: "Preserving the desktop character",
    description:
      "Large typography and generous spacing created the identity of the desktop version, but required careful restructuring on smaller breakpoints",
  },
  {
    title: "Maintaining consistent spacing",
    description:
      "Each section needed individual adjustment so the complete page retained a steady visual rhythm from desktop through mobile",
  },
];

const learningPoints = [
  "A responsive build requires more than simply scaling the desktop layout",
  "Clear class naming makes complex Webflow projects easier to maintain",
  "Accessibility and metadata are part of the finished user experience",
  "Small breakpoint-specific adjustments can preserve the character of a design",
];

export const Swisswatch = () => {
  const openingWords = [
    "Brief",
    "Web Design",
    "Webflow Build",
    "Responsive Launch",
  ];

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
                <Typewriter text="OPENING / SWISSWATCH" delay={45} />
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
                  Building a responsive
                  <span className="block mt-2 text-primary-400">
                    product experience in Webflow
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="max-w-xl text-lg md:text-xl leading-relaxed text-neutral-300"
              >
                A responsive product landing page for Braun Classic Slim
                watches, translated from a structured brief into a polished and
                published Webflow experience.
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
            className="group relative overflow-hidden rounded-2xl border border-neutral-700 bg-[#F1EFEC] shadow-card"
          >
            <img
              src="/images/projects/swisswatch/swisswatch-mult-device.webp"
              alt="Swisswatch responsive landing page shown on desktop tablet and mobile devices"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-page/65 via-transparent to-transparent" />

            <figcaption className="absolute bottom-5 left-5 right-5 font-mono text-xs tracking-[0.18em] text-neutral-100">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-300">
                RESPONSIVE EXPERIENCE
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

      {/* Brief */}
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
                <span className="mx-2 text-primary-400">THE BRIEF</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl font-semibold leading-[1.2] text-neutral-50 sm:text-4xl md:text-5xl">
                Turning supplied requirements into
                <span className="text-primary-400">
                  {" "}
                  a complete product experience
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                The project began with a structured brief containing the product
                information, required sections, navigation, brand colour and
                supporting content.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                My task was to interpret these requirements visually and build
                the complete responsive landing page in Webflow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:p-8"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-accent-500">
                BRIEF SUMMARY
              </p>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    01
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Present the product
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Introduce the Braun Classic Slim watch through a strong,
                      product-focused hero section
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-700" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    02
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Communicate key benefits
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Highlight the titanium strap, stainless steel, mineral
                      glass and push-button deployment system
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-700" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    03
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Build trust
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Include customer statistics, a testimonial and a clear
                      link to additional reviews
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-700" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    04
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Show the manufacturing process
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Present the 28-stage production and quality-control
                      process through a dedicated video section
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-700" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    05
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Complete the service structure
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Add service and information navigation, store details,
                      social links and legal information
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-700" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-xs text-primary-400">
                    06
                  </span>

                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      Deliver a responsive Webflow build
                    </h3>

                    <p className="mt-2 leading-relaxed text-neutral-400">
                      Adapt the experience for desktop, tablet and mobile and
                      prepare the finished page for publication
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From Brief to Build */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">FROM BRIEF TO BUILD</span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
              A clear process from requirements to publication
            </h2>
          </div>

          <div className="space-y-3">
            {implementationSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-5 rounded-2xl border border-neutral-700 bg-bg-elevated p-6 sm:grid-cols-[70px_0.65fr_1.35fr] sm:items-center sm:p-8"
              >
                <span className="font-mono text-sm text-accent-500">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold text-neutral-50">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="bg-bg-surface/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">
                RESPONSIVE EXPERIENCE
              </span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
              One visual language across every breakpoint
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-300">
              The layout was adapted individually for desktop, tablet and mobile
              while preserving the hierarchy, product focus and visual character
              of the original composition.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border border-neutral-700 bg-[#F1EFEC] shadow-card"
          >
            <img
              src="/images/projects/swisswatch/swisswatch-multi-device.webp"
              alt="Swisswatch desktop tablet and mobile responsive presentation"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {responsiveBreakpoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
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

                  <p className="mt-5 font-mono text-xs tracking-[0.18em] text-accent-500">
                    {item.label}
                  </p>

                  <p className="mt-3 font-medium text-neutral-100">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webflow Build */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">WEBFLOW BUILD</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
                A structured and maintainable implementation
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                The page was built as a complete Webflow project rather than
                presented only as a static design.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                Sections, containers, grids and reusable content groups were
                organised through readable project-specific class names.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated"
            >
              <img
                src="/images/projects/swisswatch/swisswatch-webflow-structure.webp"
                alt="Swisswatch Webflow Navigator showing the structured statistics section"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {webflowProof.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6 transition-colors duration-300 hover:border-primary-500/50 sm:p-8"
                >
                  <Icon className="h-6 w-6 text-primary-400" />

                  <h3 className="mt-7 text-2xl font-semibold text-neutral-50">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessibility and Publication */}
      <section className="bg-bg-surface/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">
                QUALITY AND PUBLICATION
              </span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
              Preparing the project beyond the visual layout
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Before publication, I configured the elements that support
              accessibility, discoverability and consistent sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.figure
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated"
            >
              <img
                src="/images/projects/swisswatch/swisswatch-alt-text.webp"
                alt="Webflow image settings showing custom alternative text"
                className="h-full w-full scale-[1.01] object-cover object-[65%_center]"
                loading="lazy"
              />
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated"
            >
              <img
                src="/images/projects/swisswatch/swisswatch-open-graph.webp"
                alt="Swisswatch Open Graph sharing preview in Webflow"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.figure>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {publishingDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-neutral-700 bg-bg-elevated p-6"
                >
                  <Icon className="h-6 w-6 text-primary-400" />

                  <h3 className="mt-5 text-xl font-semibold text-neutral-50">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>
              <span className="mx-2 text-primary-400">
                RESPONSIVE CHALLENGES
              </span>
              <span className="text-accent-500">]</span>
            </div>

            <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
              What required the most careful adjustment
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <motion.article
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Result */}
      <section className="bg-bg-surface/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="mx-2 text-primary-400">THE RESULT</span>
                <span className="text-accent-500">]</span>
              </div>

              <h2 className="mt-8 text-3xl font-semibold text-neutral-50 sm:text-4xl md:text-5xl">
                Explore the published Webflow experience
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
                The finished project translates the supplied brief into a clear,
                product-focused landing page designed for desktop, tablet and
                mobile
              </p>

              <p className="mt-5 max-w-xl leading-relaxed text-neutral-400">
                Open the live landing page to explore the complete layout,
                responsive behaviour and interactive product details
              </p>

              <a
                href="https://swisswatch-portfolio.webflow.io/"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-bg-page shadow-glow transition-all duration-200 hover:bg-primary-400"
              >
                View Live Landing Page
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative max-w-[460px] justify-self-center overflow-hidden rounded-2xl border border-neutral-700 bg-[#F1EFEC] shadow-card lg:justify-self-end"
            >
              <img
                src="/images/projects/swisswatch/swisswatch-live-project-workspace.webp"
                alt="Swisswatch landing page displayed on a laptop"
                className="h-auto w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-page/15 via-transparent to-transparent" />
            </motion.figure>
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
                This project deepened my understanding of the relationship
                between visual design, responsive behaviour and technical
                implementation in Webflow.
              </p>

              <p className="mt-5 leading-relaxed text-neutral-400">
                It also showed how much quality depends on details that are not
                immediately visible, including class structure, alternative
                text, metadata and breakpoint-specific decisions.
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
