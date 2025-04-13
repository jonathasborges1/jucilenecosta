"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LoadingApp } from "./loadApp/LoadingApp";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500); // ✅ Loading curto apenas para transição visual

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div aria-hidden={showLoader}>{children}</div>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            role="status"
            aria-label="Carregando site"
          >
            <LoadingApp />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
