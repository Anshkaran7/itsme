import React from 'react';
import { motion } from 'framer-motion';

interface LabelProps {
  label: string;
  url: string;
}

const Label: React.FC<LabelProps> = ({ label, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }} // Initial state before animation
      animate={{ opacity: 1, x: 0 }}   // Animate to visible state
      transition={{ duration: 0.5 }}    // Animation duration
      whileHover={{ scale: 1.05 }}      // Scale up on hover
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${label}`}
        className="dark:text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 text-white/70 group-hover:text-white dark:group-hover:text-gray-700"
      >
        {label}
      </a>
    </motion.div>
  );
};

export default Label;
