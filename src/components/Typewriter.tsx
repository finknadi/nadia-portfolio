// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// interface TypewriterProps {
//   text: string;
//   delay?: number;
//   className?: string;
// }

// export const Typewriter = ({ text, delay = 50, className = '' }: TypewriterProps) => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText(prev => prev + text[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, delay);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, text, delay]);

//   return (
//     <span className={className}>
//       {displayText}
//       {currentIndex < text.length && (
//         <motion.span
//           animate={{ opacity: [1, 0] }}
//           transition={{ duration: 0.5, repeat: Infinity }}
//           className="inline-block w-0.5 h-5 bg-primary-500 ml-1"
//         />
//       )}
//     </span>
//   );
// };

import { useEffect, useMemo, useState } from 'react';

interface TypewriterProps {
  text?: string;
  texts?: string[];
  delay?: number;
  deleteDelay?: number;
  pauseDelay?: number;
  switchDelay?: number;
  loop?: boolean;
  className?: string;
}

export const Typewriter = ({
  text,
  texts,
  delay = 80,
  deleteDelay = 45,
  pauseDelay = 1500,
  switchDelay = 300,
  loop = true,
  className = '',
}: TypewriterProps) => {
  const activeTexts = useMemo(() => {
    if (texts && texts.length > 0) {
      return texts;
    }

    if (text) {
      return [text];
    }

    return [''];
  }, [text, texts]);

  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setCurrentTextIndex(0);
    setIsDeleting(false);
  }, [activeTexts]);

  useEffect(() => {
    const currentText = activeTexts[currentTextIndex] ?? '';

    if (isDeleting) {
      if (displayedText.length === 0) {
        const switchTimer = window.setTimeout(() => {
          setCurrentTextIndex(
            (previousIndex) => (previousIndex + 1) % activeTexts.length,
          );
          setIsDeleting(false);
        }, switchDelay);

        return () => window.clearTimeout(switchTimer);
      }

      const deleteTimer = window.setTimeout(() => {
        setDisplayedText((previousText) => previousText.slice(0, -1));
      }, deleteDelay);

      return () => window.clearTimeout(deleteTimer);
    }

    if (displayedText === currentText) {
      if (activeTexts.length === 1 && !loop) {
        return undefined;
      }

      const pauseTimer = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);

      return () => window.clearTimeout(pauseTimer);
    }

    const typingTimer = window.setTimeout(() => {
      setDisplayedText(currentText.slice(0, displayedText.length + 1));
    }, delay);

    return () => window.clearTimeout(typingTimer);
  }, [
    activeTexts,
    currentTextIndex,
    displayedText,
    isDeleting,
    delay,
    deleteDelay,
    pauseDelay,
    switchDelay,
    loop,
  ]);

  return (
    <span className={className} aria-live="polite">
      {displayedText}
    </span>
  );
};
