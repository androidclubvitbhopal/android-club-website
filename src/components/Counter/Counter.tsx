import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import React from "react";
/**
 * @param {object} props 
 * @param {number} props.start_value 
 * @param {number} props.end_value 
 */
export default function Counter({ start_value, end_value }: { start_value: number, end_value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(start_value);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const controls = useAnimation();
  useEffect(() => {
    const handleViewportEnter = () => {
      motionValue.set(start_value);
      controls.start({ opacity: 1 }).then(() => {
        motionValue.set(end_value);
      });
    };

    const handleViewportLeave = () => {
      motionValue.set(start_value);
      controls.start({ opacity: 0 });
    };

    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleViewportEnter();
          } else {
            handleViewportLeave();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [motionValue, controls, start_value, end_value]);
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
    />
  );
}
