import React from 'react';
import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
          alt="Idrees M I"
          className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-xl border-4 border-yellow-400"
        />
      </div>
    </motion.div>
  );
}