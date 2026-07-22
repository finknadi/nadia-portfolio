// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X, ChevronRight, BookOpen, FileText } from 'lucide-react';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/blog', label: 'Blog', icon: BookOpen },
//     { path: '/case-studies', label: 'Case Studies', icon: FileText },
//     { path: '/contact', label: 'Contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-page/80 backdrop-blur-md border-b border-neutral-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 group">
//               <div className="text-primary-500 font-mono font-bold text-xl tracking-wide">
//                 <span className="text-accent-500">&gt;</span>
//                 <span className="group-hover:text-primary-500 transition-colors duration-200">
//                   _
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     className="relative px-3 py-2 text-sm font-medium transition-all duration-200 group flex items-center gap-2"
//                   >
//                     {IconComponent && (
//                       <IconComponent 
//                         size={16} 
//                         className={`${
//                           isActive(item.path)
//                             ? 'text-primary-500'
//                             : 'text-neutral-200 group-hover:text-primary-500'
//                         }`}
//                       />
//                     )}
//                     <span
//                       className={`font-mono ${
//                         isActive(item.path)
//                           ? 'text-primary-500'
//                           : 'text-neutral-200 group-hover:text-primary-500'
//                       }`}
//                     >
//                       {item.label}
//                     </span>
//                     {isActive(item.path) && (
//                       <motion.div
//                         layoutId="navbar-indicator"
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-glow"
//                         initial={false}
//                         transition={{ duration: 0.2 }}
//                       />
//                     )}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 rounded-md text-neutral-200 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden bg-bg-elevated border-t border-neutral-700"
//           >
//             <div className="px-4 py-2 space-y-1">
//               {navItems.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
//                       isActive(item.path)
//                         ? 'text-primary-500 bg-bg-surface border-l-2 border-primary-500'
//                         : 'text-neutral-200 hover:text-primary-500 hover:bg-bg-surface'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       {IconComponent && (
//                         <IconComponent 
//                           size={16} 
//                           className={`${
//                             isActive(item.path) ? 'text-primary-500' : ''
//                           }`}
//                         />
//                       )}
//                       <span className="font-mono">$ {item.label.toLowerCase()}</span>
//                     </div>
//                     <ChevronRight
//                       size={16}
//                       className={`transition-transform ${
//                         isActive(item.path) ? 'text-primary-500' : ''
//                       }`}
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </>
//   );
// };

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      number: '01',
      path: '/',
      label: 'Home',
    },
    {
      number: '02',
      path: '/about',
      label: 'About',
    },
    {
      number: '03',
      path: '/skills',
      label: 'Skills',
    },
    {
      number: '04',
      path: '/projects',
      label: 'Selected Work',
    },
    // {
    //   number: '05',
    //   path: '/blog',
    //   label: 'Blog',
    // },
    // {
    //   number: '06',
    //   path: '/case-studies',
    //   label: 'Case Studies',
    // },
    {
      number: '07',
      path: '/contact',
      label: 'Contact',
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-700 bg-bg-page/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Nadin Fink — Home"
            className="group inline-flex items-center gap-3"
          >
            <div className="flex items-center font-mono text-lg font-bold tracking-wide">
              <span className="text-accent-500">[</span>
              <span className="text-primary-500 group-hover:text-primary-300 transition-colors duration-200">
                NF
              </span>
              <span className="text-accent-500">]</span>
            </div>

            <span className="hidden sm:inline font-mono text-xs font-semibold tracking-[0.16em] text-neutral-300 group-hover:text-primary-300 transition-colors duration-200">
              NADIN FINK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group px-3 py-3"
              >
                <span
                  className={`font-mono text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-400'
                      : 'text-neutral-300 group-hover:text-primary-300'
                  }`}
                >
                  {item.label}
                </span>

                {isActive(item.path) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 shadow-glow"
                    initial={false}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((currentState) => !currentState)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-700 bg-bg-elevated text-neutral-200 hover:border-primary-500 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="lg:hidden fixed top-20 left-0 right-0 h-[calc(100vh-5rem)] bg-bg-page border-t border-neutral-700 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto min-h-full px-4 sm:px-6 py-6 flex flex-col">
              {/* Menu Label */}
              <div className="flex items-center gap-2 mb-5 font-mono text-xs font-semibold tracking-[0.18em]">
                <span className="text-accent-500">[</span>
                <span className="text-primary-400">MENU</span>
                <span className="text-accent-500">]</span>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`group flex items-center gap-5 rounded-xl border px-5 py-4 transition-all duration-200 ${
                        isActive(item.path)
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-transparent bg-bg-elevated/40 hover:border-neutral-600 hover:bg-bg-elevated'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs ${
                          isActive(item.path)
                            ? 'text-accent-500'
                            : 'text-neutral-500 group-hover:text-accent-500'
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`font-sans text-lg font-medium ${
                          isActive(item.path)
                            ? 'text-primary-400'
                            : 'text-neutral-200 group-hover:text-primary-300'
                        }`}
                      >
                        {item.label}
                      </span>

                      {isActive(item.path) && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-primary-500 shadow-glow" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-auto pt-8">
                <div className="flex items-center gap-3 border-t border-neutral-700 pt-5 font-mono text-xs text-primary-400">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 animate-ping" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                  </span>

                  <span>
                    Open to opportunities and collaborations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};