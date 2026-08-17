import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ logoPath = "/logo.png" }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white px-4"
        >
          {/* Logo rotando sobre su propio eje */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              rotate: { repeat: Infinity, duration: 2, ease: "linear" },
              opacity: { duration: 0.3 }
            }}
            className="relative flex items-center justify-center"
          >
            {/* Halo sutil de fondo */}
            <div className="absolute w-32 h-32 bg-rose-500/10 rounded-full blur-2xl -z-10 animate-pulse"></div>

            <img
              src="/logo.png"
              alt="Cargando"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
