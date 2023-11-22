'use client'
// components/HeroSection.js
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero2.png")' }}
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white z-10">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
        >
          Welcome to HarborCatch Seafood Market
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-center"
        >
          Fresh from the ocean to your table
        </motion.p>

        {/* Animated Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-lg md:text-xl lg:text-2xl cursor-pointer px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 bg-primary border border-spacing-2 border-secondary hover:bg-secondary transition-colors duration-300"
        >
          Explore Menu
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
