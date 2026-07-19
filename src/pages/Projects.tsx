// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { TerminalHeader } from '../components/TerminalHeader';
// import { ExternalLink, Github, Filter } from 'lucide-react';
// import { PROJECTS_BY_CATEGORY } from '../data/portfolio';

// export const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = [
//     { id: 'all', label: 'All Projects', count: PROJECTS_BY_CATEGORY.all.length },
//     { id: 'devops', label: 'DevOps', count: PROJECTS_BY_CATEGORY.devops.length },
//     { id: 'fullstack', label: 'Full-Stack', count: PROJECTS_BY_CATEGORY.fullstack.length },
//   ];

//   const getProjects = () => {
//     return PROJECTS_BY_CATEGORY[activeFilter as keyof typeof PROJECTS_BY_CATEGORY] || PROJECTS_BY_CATEGORY.all;
//   };

//   return (
//     <div className="min-h-screen bg-bg-page">
//       {/* Terminal Header */}
//       <TerminalHeader
//         command="docker ps -a"
//         description="Listing deployed projects and applications"
//       />

//       {/* Filter Tabs */}
//       <section className="py-12 bg-bg-surface/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-mono font-medium transition-all duration-200 ${
//                   activeFilter === filter.id
//                     ? 'bg-primary-500 text-bg-surface shadow-glow'
//                     : 'bg-bg-elevated text-neutral-200 border border-neutral-700 hover:border-primary-500/50 hover:text-primary-500'
//                 }`}
//               >
//                 <Filter size={16} />
//                 <span>{filter.label}</span>
//                 <span className={`text-xs px-2 py-1 rounded-full ${
//                   activeFilter === filter.id ? 'bg-bg-surface text-primary-500' : 'bg-neutral-700 text-neutral-400'
//                 }`}>
//                   {filter.count}
//                 </span>
//               </button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             layout
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {getProjects().map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 layout
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
//               >
//                 {/* Project Image */}
//                 <div className="relative aspect-video overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />

//                   {/* Project Type Badge */}
//                   <div className="absolute top-4 right-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
//                       project.category === 'devops'
//                         ? 'bg-primary-500/20 text-primary-500 border border-primary-500/30'
//                         : 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
//                     }`}>
//                       {project.category === 'devops' ? 'DevOps' : 'Full-Stack'}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6 space-y-4">
//                   {/* Title */}
//                   <h3 className="font-mono text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors">
//                     {project.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-neutral-200 text-sm leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.slice(0, 4).map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700 hover:border-primary-500/30 transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700">
//                         +{project.technologies.length - 4} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex items-center space-x-4 pt-4">
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
//                     >
//                       <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
//                       <span className="text-sm font-mono">Code</span>
//                     </a>

//                     {project.websiteLink && (
//                       <a
//                         href={project.websiteLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
//                       >
//                         <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
//                         <span className="text-sm font-mono">Live</span>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Empty State */}
//           {getProjects().length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-24"
//             >
//               <div className="font-mono text-4xl text-neutral-600 mb-4">404</div>
//               <div className="text-neutral-400">No projects found in this category.</div>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Terminal-style project summary */}
//       <section className="py-24 bg-bg-elevated">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
//           >
//             <div className="space-y-4">
//               <div className="text-accent-500">
//                 $ cat project_summary.txt
//               </div>

//               <div className="space-y-2 text-neutral-200">
//                 <div className="flex justify-between">
//                   <span>Total Projects:</span>
//                   <span className="text-primary-500">{PROJECTS_BY_CATEGORY.all.length}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>DevOps Projects:</span>
//                   <span className="text-primary-500">{PROJECTS_BY_CATEGORY.devops.length}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Full-Stack Projects:</span>
//                   <span className="text-primary-500">{PROJECTS_BY_CATEGORY.fullstack.length}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Technologies Used:</span>
//                   <span className="text-primary-500">
//                     {new Set(PROJECTS_BY_CATEGORY.all.flatMap(p => p.technologies)).size}+
//                   </span>
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-neutral-700 text-sm text-neutral-400">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-accent-500">$</span>
//                   <span>echo "Each project demonstrates real-world implementation of cloud-native architecture and modern development practices"</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-bg-elevated to-bg-surface border border-primary-500/20 p-12 rounded-2xl shadow-glow"
//           >
//             <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
//               Interested in Collaboration?
//             </h2>
//             <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
//               These projects showcase my expertise in DevOps and full-stack development.
//               Let's discuss how we can work together on your next project.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="https://github.com/neerajnakka"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
//               >
//                 <Github className="mr-2 h-5 w-5" />
//                 View All Projects
//               </a>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
//               >
//                 <ExternalLink className="mr-2 h-5 w-5" />
//                 Start a Project
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Clock3,
  Filter,
} from 'lucide-react';
import { Typewriter } from '../components/Typewriter';

type ProjectCategory =
  | 'all'
  | 'web-design'
  | 'ux-ui'
  | 'webflow'
  | 'frontend'
  | 'motion';

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  path?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'DayBake',
    category: 'web-design',
    categoryLabel: 'Web Design',
    description:
      'A warm editorial landing page for an artisan bakery with local delivery',
    image: '/images/projects/daybake-cover.png',
    tags: ['Web Design', 'UI Design', 'Figma'],
    path: '/projects/daybake',
  },
  {
    id: 2,
    title: 'Swisswatch',
    category: 'webflow',
    categoryLabel: 'Webflow',
    description:
      'A responsive product experience combining precise layout and interaction',
    image: '/images/projects/daybake-cover.png',
    tags: ['Webflow', 'Responsive Design', 'Interaction'],
  },
  {
    id: 3,
    title: 'Tea Moment',
    category: 'ux-ui',
    categoryLabel: 'UX/UI',
    description:
      'A digital product concept shaped around structure, clarity and visual atmosphere',
    image: '/images/projects/daybake-cover.png',
    tags: ['UX/UI', 'User Flow', 'Prototype'],
  },
  {
    id: 4,
    title: 'Homie',
    category: 'web-design',
    categoryLabel: 'Web Design',
    description:
      'A focused website concept exploring hierarchy, composition and visual storytelling',
    image: '/images/projects/daybake-cover.png',
    tags: ['Web Design', 'Layout', 'Figma'],
  },
  {
    id: 5,
    title: 'Buildwise',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description:
      'A collaborative frontend project developed through Jira, sprints and Git',
    image: '/images/projects/daybake-cover.png',
    tags: ['React', 'Jira', 'Git'],
  },
  {
    id: 6,
    title: 'Motion Experiments',
    category: 'motion',
    categoryLabel: 'Motion',
    description:
      'A collection of animated interfaces and interaction studies created in Figma',
    image: '/images/projects/daybake-cover.png',
    tags: ['Motion', 'Figma', 'Prototyping'],
  },
];

const filters: {
  id: ProjectCategory;
  label: string;
}[] = [
  {
    id: 'all',
    label: 'All Work',
  },
  {
    id: 'web-design',
    label: 'Web Design',
  },
  {
    id: 'ux-ui',
    label: 'UX/UI',
  },
  {
    id: 'webflow',
    label: 'Webflow',
  },
  {
    id: 'frontend',
    label: 'Frontend',
  },
  {
    id: 'motion',
    label: 'Motion',
  },
];

const openingWords = [
  'Research',
  'Design',
  'Interaction',
  'Technology',
];

const getCategoryStyles = (
  category: Exclude<ProjectCategory, 'all'>
) => {
  switch (category) {
    case 'motion':
      return {
        badge:
          'border-accent-500/40 bg-accent-500/15 text-accent-700',
        icon:
          'text-accent-500 group-hover:text-accent-500',
      };

    case 'frontend':
      return {
        badge:
          'border-sky-400/40 bg-sky-400/15 text-sky-600',
        icon:
          'text-sky-400 group-hover:text-sky-300',
      };

    default:
      return {
        badge:
          'border-primary-500/40 bg-primary-500/15 text-primary-600',
        icon:
          'text-primary-400 group-hover:text-primary-300',
      };
  }
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const getFilterCount = (category: ProjectCategory) => {
    if (category === 'all') {
      return projects.length;
    }

    return projects.filter(
      (project) => project.category === category
    ).length;
  };

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Selected Work Hero */}
      <section className="relative overflow-hidden border-b border-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Typewriter Label */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center font-mono text-sm font-semibold tracking-[0.18em]">
              <span className="text-accent-500">[</span>

              <span className="mx-2 text-primary-400">
                <Typewriter
                  text="OPENING / SELECTED WORK"
                  delay={55}
                />
              </span>

              <span className="text-accent-500">]</span>
            </div>
          </div>

          <div className="max-w-6xl">
            {/* Animated Keywords */}
            <div className="flex flex-wrap items-center gap-y-2 mb-10 font-mono text-sm sm:text-base md:text-lg font-semibold tracking-[0.12em]">
              {openingWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.3 + index * 0.22,
                    duration: 0.4,
                  }}
                  className="inline-flex items-center"
                >
                  <span
                    className={
                      index === openingWords.length - 1
                        ? 'text-primary-400'
                        : 'text-neutral-400'
                    }
                  >
                    {word}
                  </span>

                  {index < openingWords.length - 1 && (
                    <span className="mx-3 text-accent-500">
                      ·
                    </span>
                  )}
                </motion.span>
              ))}
            </div>

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
              Selected work shaped by{' '}
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
              A growing collection of digital experiences where
              visual direction, thoughtful structure and interaction
              come together
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
                      ? 'border-primary-500 bg-primary-500 text-bg-page shadow-glow'
                      : 'border-neutral-700 bg-bg-elevated text-neutral-300 hover:border-primary-500/50 hover:text-primary-400'
                  }`}
                >
                  <Filter
                    size={15}
                    className={
                      isActive
                        ? 'text-bg-page'
                        : 'text-neutral-500 group-hover:text-primary-400'
                    }
                  />

                  <span>{filter.label}</span>

                  <span
                    className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
                      isActive
                        ? 'bg-bg-page/20 text-bg-page'
                        : 'bg-neutral-700 text-neutral-400'
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

                <span className="mx-2 text-primary-400">
                  PROJECT LIBRARY
                </span>

                <span className="text-accent-500">]</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-50">
                Explore the collection
              </h2>
            </div>

            <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-400">
              Selected projects across design, interaction,
              Webflow and frontend development
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const categoryStyles =
                  getCategoryStyles(project.category);

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
                        <span className="inline-flex items-center font-mono text-sm font-semibold text-primary-400">
                          {project.path
                            ? 'View Project'
                            : 'Coming Soon'}

                          {project.path && (
                            <ArrowUpRight
                              size={16}
                              className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          )}
                        </span>
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
                      <div className="flex h-full flex-col">
                        {cardContent}
                      </div>
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

              <span className="mx-2 text-primary-400">
                LET&apos;S CREATE
              </span>

              <span className="text-accent-500">]</span>
            </div>

            <h2 className="max-w-3xl mx-auto mt-6 font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-50">
              Looking for a designer to shape your next digital
              experience?
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
              I’m open to UX/UI roles, Webflow projects and creative
              collaborations focused on thoughtful, accessible and
              visually distinctive products
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-8 py-4 font-semibold text-bg-page shadow-glow transition-all duration-300 hover:bg-primary-400"
              >
                Let&apos;s Connect
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-600 bg-bg-surface px-8 py-4 font-semibold text-neutral-100 transition-all duration-300 hover:border-primary-500 hover:text-primary-400"
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