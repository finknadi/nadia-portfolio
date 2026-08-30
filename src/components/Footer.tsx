
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "../data/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: CONTACT.social.linkedin,
      icon: Linkedin,
    },
   
    {
      name: "Email",
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`,
      icon: Mail,
    },
  ];

  const footerNavigation = [
    {
      name: "Selected Work",
      path: "/projects",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-neutral-700 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16">
          {/* Name and Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="text-primary-400">
                NADIN FINK / DESIGN PORTFOLIO
              </span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="max-w-xl font-sans text-3xl md:text-4xl font-semibold leading-tight text-neutral-50">
              Designing thoughtful digital experiences
              <span className="text-primary-400">
                {" "}
                with clarity, character and motion
              </span>
            </h2>

            <p className="max-w-lg mt-6 text-base md:text-lg leading-relaxed text-neutral-400">
              UX/UI design, Web design, Webflow and interactive experiences
              created with care and attention to detail
            </p>
          </motion.div>

          {/* Navigation and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:justify-self-end lg:min-w-[420px]"
          >
            {/* Navigation */}
            <div>
              <p className="mb-5 font-mono text-xs tracking-[0.18em] text-neutral-500">
                NAVIGATION
              </p>

              <nav className="flex flex-col items-start gap-4">
                {footerNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group inline-flex items-center font-medium text-neutral-200 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}

                    <ArrowUpRight className="ml-2 h-4 w-4 text-neutral-500 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-5 font-mono text-xs tracking-[0.18em] text-neutral-500">
                FIND ME ONLINE
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: -4,
                        borderColor: "#B455FF",
                      }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="group flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-700 bg-bg-surface text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <IconComponent
                        size={20}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                    </motion.a>
                  );
                })}
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-mono text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 break-all"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-neutral-700">
          <p className="font-mono text-xs text-neutral-500 text-center md:text-left">
            © {currentYear} Nadin Fink. All rights reserved
          </p>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 animate-ping" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>

            <span className="text-primary-400">
              Open to opportunities and collaborations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
