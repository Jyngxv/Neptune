import React, { useEffect } from 'react';
import classnames from 'classnames';
import { motion, Variants } from 'framer-motion';

const Headline = (props) => {
  const fadeUp: variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 50,
    },
  };
  const headline1 = classnames('text-md2 md:text-xl xl:text-xl font-extrabold', props.textcolor1, props.textalign);
  const headline2 = classnames('text-md2 md:mt-[-12px] md:text-xl xl:text-xl font-extrabold mb-24', props.textcolor2, props.textalign);
  const body2 = classnames('text-tiny md:text-md xl:text-md font-medium text-neutral-600 whitespace-pre-wrap');
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
          <motion.p className={headline1} variants={fadeUp} transition={{ duration: 0.25 }}>
            {props.c_headline1}
          </motion.p>
          <motion.p className={headline2} variants={fadeUp} transition={{ duration: 0.25, delay: 0.2 }}>
            {props.c_headline2}
          </motion.p>
          <motion.p className={body2} variants={fadeUp} transition={{ duration: 0.25, delay: 0.25 }}>
            {props.c_body1}
          </motion.p>
          <motion.p className={body2} variants={fadeUp} transition={{ duration: 0.25, delay: 0.3 }}>
            {props.c_body2}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Headline;
