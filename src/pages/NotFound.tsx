import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "../components/Typewriter";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-bg-page">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-10 md:mb-14">
              <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
                <span className="mr-2 text-accent-500">[</span>

                <Typewriter
                  text="404"
                  delay={100}
                  loop={false}
                  className="text-primary-400"
                />

                <span className="terminal-cursor ml-1" />

                <span className="ml-2 text-accent-500">]</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <h1 className="font-sans text-4xl font-semibold leading-[1.08] text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
                Page not{" "}
                <span className="text-primary-400">found</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
                The page you&apos;re looking for may have moved or no longer
                exists
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="group inline-flex w-[250px] items-center justify-center rounded-lg bg-primary-500 px-8 py-4 font-semibold text-bg-page shadow-glow transition-all duration-200 hover:bg-primary-400"
                >
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  Back to Home
                </Link>

                <Link
                  to="/projects"
                  className="group inline-flex w-[250px] items-center justify-center rounded-lg border border-primary-500 px-8 py-4 font-semibold text-primary-400 transition-all duration-200 hover:bg-primary-500 hover:text-bg-page"
                >
                  View Selected Work
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};