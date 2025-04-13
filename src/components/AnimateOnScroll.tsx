"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateOnScrollProps {
  children: ReactNode;
  animationClass?: string;
  delay?: string;
}

export default function AnimateOnScroll({
  children,
  animationClass = "animate-fadeInRight",
  delay = "delay-0",
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${inView ? `${animationClass} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
