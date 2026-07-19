import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

interface VideoDemoProps {
  youtubeId: string;
  title: string;
  cover: string;
  alt: string;
  buttonLabel?: string;
}

export const VideoDemo = ({
  youtubeId,
  title,
  cover,
  alt,
  buttonLabel = "Watch Video Demo",
}: VideoDemoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);

      openButtonRef.current?.focus();
    };
  }, [isOpen]);

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={handleBackdropClick}
          role="presentation"
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-primary-500/40 bg-bg-elevated shadow-modal"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-demo-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-neutral-700 bg-bg-elevated px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="mb-1 font-mono text-xs font-semibold tracking-[0.18em]">
                  <span className="text-accent-500">[</span>

                  <span className="text-primary-400"> VIDEO DEMO </span>

                  <span className="text-accent-500">]</span>
                </div>

                <h2
                  id="video-demo-title"
                  className="truncate text-base font-semibold text-neutral-50 sm:text-lg"
                >
                  {title}
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-bg-surface text-neutral-300 transition-all duration-200 hover:border-primary-500 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        ref={openButtonRef}
        type="button"
        onClick={openModal}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-neutral-700 bg-bg-elevated text-left shadow-card transition-colors duration-300 hover:border-primary-500/70 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-4 focus:ring-offset-bg-page"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        aria-label={`${buttonLabel}: ${title}`}
      >
        <img
          src={cover}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg-page/90 via-bg-page/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-[#2A1E1A]/80 text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
            <Play
              className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
              aria-hidden="true"
            />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-5 md:p-6 lg:p-7">
          <div className="min-w-0">
            <div className="hidden font-mono text-[10px] font-semibold tracking-[0.14em] text-primary-300 sm:block lg:text-xs lg:tracking-[0.18em]">
              INTERACTIVE PROTOTYPE
            </div>
            <span className="mt-1.5 block font-mono text-[10px] font-medium tracking-[0.12em] text-neutral-200 sm:text-xs sm:tracking-[0.14em] lg:mt-2 lg:text-sm">
              {buttonLabel}
            </span>
          </div>

          <span className="hidden shrink-0 font-mono text-[10px] tracking-[0.12em] text-neutral-300 sm:block lg:text-xs lg:tracking-[0.14em]">
            FIGMA / VIDEO
          </span>
        </div>
      </motion.button>

      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </>
  );
};
