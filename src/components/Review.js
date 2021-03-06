import React, { useEffect } from 'react';
import classnames from 'classnames';
import { motion, Variants } from 'framer-motion';
import '../App.css';
const Review = (props) => {
  const store = classnames('w-56 h-56 my-auto', props.store);
  const reviewer = classnames('text-base font-bold');
  const date = classnames('opacity-50 text-sm2 font-regular');
  const title = classnames('mb-8 font-bold text-md2');
  const content = classnames('font-regular text-md1');
  return (
    <motion.div className="p-40 mb-24 shadow-lg rounded-24" whileHover={{ scale: 1.05 }}>
      <div className="flex flex-row mb-24">
        <div className="mr-16">
          <div className={store}></div>
        </div>
        <div className="flex flex-col">
          <p className={reviewer}>{props.reviewer}</p>
          <p className={date}>{props.date}</p>
        </div>
      </div>
      <p className={title}>{props.title}</p>
      <p className={content}>{props.content}</p>
    </motion.div>
  );
};

export default Review;
