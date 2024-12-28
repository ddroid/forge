"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 p-3 rounded-full 
            bg-[#10375c]/60 backdrop-blur-sm 
            hover:bg-[#eb8317]/80 
            text-white shadow-lg 
            hover:shadow-xl 
            transition-all duration-300 
            focus:outline-none focus:ring-2 
            focus:ring-[#10375c] focus:ring-offset-2 
            group"
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <ChevronUp className="h-6 w-6 stroke-[2.5]" />
          </motion.div>
          
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
            px-2 py-1 text-xs font-medium text-white 
            bg-[#10375c]/90 rounded 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            whitespace-nowrap"
          >
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 