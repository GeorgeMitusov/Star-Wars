import React from 'react'
import { motion } from 'framer-motion';

import './Item.scss';

const Item = ({ getItemImage, i, onItemSelected, index, children: renderLabel }) => {

  const label = renderLabel(i);

  const transition = { 
    type: 'tween',
    duration: 0.5, 
    ease: 'easeIn' 
  };
  
  const thumbnailVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, transition },
    exit: { x: "-100%", opacity: 0, transition }
  };

  return (
    <motion.div 
      className="item" 
      variants={thumbnailVariants}
    >
      <motion.img 
        src={getItemImage(index + 1)}
        onClick={() => onItemSelected(index + 1)}
        whileHover={{ scale: 1.1 }}
        transition={transition}
        variants={thumbnailVariants}
        initial='initial'
        animate="enter"
        exit="exit"
      />
      <motion.div className='item-label'>
        { label }
      </motion.div>
    </motion.div>
  )
}

export default Item