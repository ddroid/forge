"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  replay?: boolean;
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration,
  replay = false,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: !replay,
    amount: 0.4
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: duration || 0.5, ease: "easeOut" }
      });

      slideControls.start({
        left: "100%",
        transition: { duration: duration || 0.5, ease: "easeOut" }
      });
    } else if (replay) {
      mainControls.start({
        opacity: 0,
        y: 35,
        transition: { duration: 0.1 }
      });

      slideControls.start({
        left: 0,
        transition: { duration: 0.1 }
      });
    }
  }, [isInView, mainControls, slideControls, duration, replay]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={mainControls}
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ left: 0 }}
        animate={slideControls}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor || "#20629e",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default BoxReveal;
