import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const FadeUp = () => {
  const fadeup: variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };
};
export default FadeUp;
