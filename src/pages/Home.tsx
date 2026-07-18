// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ExternalLink, Github, Code2 } from 'lucide-react';
// import { Grid3DBackground } from '../components/Grid3D';
// import { Typewriter } from '../components/Typewriter';
// import { HERO_CONTENT, SKILLS, PROJECTS } from '../data/portfolio';

// export const Home = () => {
//   const stats = [
//     { label: 'Years Experience', value: '1+' },
//     { label: 'Cloud Platforms', value: '3' },
//     { label: 'Projects Completed', value: '10+' },
//     { label: 'Technologies', value: '19+' },
//   ];

//   const featuredSkills = SKILLS.slice(0, 6);

//   return (
//     <div className="min-h-screen bg-bg-page relative overflow-hidden">
//       {/* 3D Grid Background */}
//       <Grid3DBackground />
      
//       {/* Main Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Terminal prompt */}
//             <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
//               <span className="text-accent-500 mr-3">$</span>
//               <span className="text-primary-500">whoami</span>
//             </div>

//             {/* Typewriter heading */}
//             <div className="font-mono text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-primary-500">
//               <Typewriter text="DevOps & Cloud Engineer" delay={80} />
//               <span className="terminal-cursor ml-2" />
//             </div>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 2 }}
//               className="text-xl md:text-2xl text-neutral-200 max-w-4xl mx-auto leading-relaxed"
//             >
//               {HERO_CONTENT}
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.5 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
//             >
//               <Link
//                 to="/projects"
//                 className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-glow hover:shadow-card-hover"
//               >
//                 <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 View Projects
//               </Link>
//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold tracking-wide rounded-lg"
//               >
//                 <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Contact Me
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 relative z-10 bg-bg-surface/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.4 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="bg-bg-elevated border border-neutral-700 p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary-500/50">
//                   <div className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-neutral-400 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Skills Section */}
//       <section className="py-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
//               Featured Technologies
//             </h2>
//             <p className="text-neutral-400 max-w-2xl mx-auto">
//               A curated selection of the technologies I work with daily to build and deploy scalable systems
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, staggerChildren: 0.1 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
//           >
//             {featuredSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05, duration: 0.4 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg text-center hover:border-primary-500/50 transition-all duration-300 group"
//               >
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-8 h-8 mx-auto mb-3 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
//                 />
//                 <div className="font-mono text-sm text-neutral-200 font-medium">
//                   {skill.name}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <Link
//               to="/skills"
//               className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
//             >
//               <span className="mr-2">View all skills</span>
//               <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-bg-elevated border border-primary-500/20 p-12 rounded-2xl shadow-glow"
//           >
//             <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
//               Ready to Deploy Your Vision?
//             </h2>
//             <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
//               Let's build something amazing together. From infrastructure automation to full-stack development, 
//               I'm here to turn your ideas into production reality.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
//               >
//                 Start a Project
//               </Link>
//               <a
//                 href="https://github.com/neerajnakka"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
//               >
//                 <Github className="mr-2 h-5 w-5" />
//                 View Code
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }; 

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';

export const Home = () => {
  const focusAreas = [
    {
      number: '01',
      title: 'UX/UI Design',
      description:
        'Clear, intuitive and visually expressive digital interfaces.',
    },
    {
      number: '02',
      title: 'Web Design',
      description:
        'Thoughtful and distinctive websites built around content and user needs.',
    },
    {
      number: '03',
      title: 'Webflow',
      description:
        'Responsive Webflow websites with thoughtful interactions and motion.',
    },
    {
      number: '04',
      title: 'Motion & Prototyping',
      description:
        'Interactive prototypes and animations that make interfaces feel alive.',
    },
  ];

  const expertise = [
    'UX/UI Design',
    'Web Design',
    'Webflow',
    'Motion & Prototyping',
    'Interactive Interfaces',
    'Frontend',
    'UX Research',
    'AI Visuals',
  ];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      {/* Animated Background */}
      <Grid3DBackground />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Portfolio Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-sm md:text-base font-semibold tracking-[0.18em]"
            >
              <span className="text-accent-500">[</span>

              <span className="text-primary-400">
                HELLO, WORLD
              </span>

              <span className="text-accent-500">]</span>
            </motion.div>

            {/* Typewriter Name */}
            <div className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-500">
              <Typewriter
                text=" Nadin Fink"
                delay={150}
                loop={false}
              />

              <span className="terminal-cursor ml-2" />
            </div>

            {/* Professional Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="font-sans text-2xl md:text-4xl font-semibold text-neutral-50"
            >
              UX/UI Designer
              <span className="text-primary-400"> · </span>
              Webflow
              <span className="text-primary-400"> · </span>
              Interactive Interfaces
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-lg md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            >
              I design digital experiences with clarity, character and motion —
              combining thoughtful UX, expressive UI and interactive technology.
            </motion.p>

            {/* Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 pt-2"
            >
              {expertise.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 border border-neutral-700 bg-bg-elevated/70 rounded-full font-mono text-sm text-neutral-200 hover:border-primary-500 hover:text-primary-300 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-500 border-2 border-primary-500 text-bg-page hover:bg-primary-400 hover:border-primary-400 transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-glow hover:shadow-card-hover"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />

                View Selected Work
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 bg-bg-elevated text-neutral-100 hover:border-primary-500 hover:text-primary-400 transition-all duration-200 font-semibold tracking-wide rounded-lg"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 relative z-10 bg-bg-surface/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4 font-mono text-sm tracking-[0.18em]">
              <span className="text-accent-500">[01]</span>
              <span className="text-primary-400">FOCUS AREAS</span>
            </div>

            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-neutral-50 max-w-3xl leading-tight">
              Design, technology and motion
              <span className="text-primary-400">
                {' '}
                in one creative process
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {focusAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  borderColor: '#B455FF',
                }}
                className="group bg-bg-elevated border border-neutral-700 p-6 rounded-xl shadow-card transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-sm text-primary-400">
                    {area.number}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-neutral-500 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                </div>

                <h3 className="font-mono text-xl font-bold text-neutral-50 mb-3 group-hover:text-primary-300 transition-colors">
                  {area.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Practice Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4 font-mono text-sm tracking-[0.18em]">
              <span className="text-accent-500">[02]</span>

              <span className="text-primary-400">
                CREATIVE PRACTICE
              </span>
            </div>

            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-neutral-50 mb-5">
              Selected disciplines
            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              A multidisciplinary approach connecting research, visual design,
              interaction, development and AI-assisted creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#B455FF',
                }}
                className="group bg-bg-elevated border border-neutral-700 px-6 py-5 rounded-xl flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-primary-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="font-mono text-base font-semibold text-neutral-100 group-hover:text-primary-300 transition-colors">
                    {item}
                  </span>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 font-mono font-semibold group"
            >
              <span className="mr-2">Explore my skills</span>

              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/30 p-8 md:p-12 rounded-2xl shadow-glow"
          >
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="text-primary-400">
                LET&apos;S CONNECT
              </span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-neutral-50 mb-6">
              Looking for a designer to shape your next digital experience?
            </h2>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I’m open to UX/UI roles, Webflow projects and creative
              collaborations focused on thoughtful, accessible and visually
              distinctive products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-page font-semibold rounded-lg hover:bg-primary-400 transition-all duration-200 shadow-glow hover:shadow-card-hover"
              >
                Let’s Connect
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-100 hover:border-primary-500 hover:text-primary-400 font-semibold rounded-lg transition-all duration-200"
              >
                Selected Work

                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};