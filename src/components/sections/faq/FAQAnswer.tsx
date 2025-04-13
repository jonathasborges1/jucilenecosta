"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FAQAnswerProps {
  children: React.ReactNode;
  show: boolean;
}

export default function FAQAnswer({ children, show }: FAQAnswerProps) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key="faq-motion"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-3 text-gray-600 text-base"
        >
          <p>{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
