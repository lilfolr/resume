import React, { useEffect, useState } from "react";
import {
  motion,
  useElementScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import classStyles from "./sideProgress.module.css";

const CircleIndicator = ({ scrollRef, isDark = true }) => {
  const [isComplete, setIsComplete] = useState(false);
  const scrollYProgress = useElementScroll(scrollRef).scrollYProgress;
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const styles = {
    position: "fixed",
    top: "100px",
    left: "20px",
    width: "120px",
    height: "120px",
  };
  return (
    <svg className={classStyles.svg} style={styles} viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke={isDark ? "white" : "black"}
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke={isDark ? "white" : "black"}
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  );
};

export default CircleIndicator;
