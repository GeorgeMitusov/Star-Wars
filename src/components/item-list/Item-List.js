import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Item from '../item/Item';
import Loader from '../loader/Loader';

import './Item-List.scss';

const transition = { 
  type: 'tween',
  duration: 0.5, 
  ease: 'easeIn' 
};

const backVariants = {
  hidden: { x: -100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: .5, ...transition } },
  exit: { x: -100, opacity: 0, transition },
  whileHover: { scale: 1.3, transition: { type: 'tween', ease: 'easeIn', duration: .3, delay: .1 } }
};

const ItemList = props => {

  const [width, setWidth] = useState(0)

  const carousel = useRef(null);

  useEffect(() => {
    setWidth(5700 - carousel.current.offsetWidth)
  }, [])

  const { count, getItemImage,
    data, onItemSelected, children: renderLabel } = props;

  const item = data ? (data.map(( i, index ) => (
      <Item 
        key={index} count={count}
        i={i} index={index}
        onItemSelected={onItemSelected}
        getItemImage={getItemImage}
      >
        { renderLabel }
      </Item>
    )
  )) : (<Loader/>);
  
  return (
    <div className="item-list" >
      <motion.div className='item-list-wrap' ref={carousel}>
        <motion.div 
          className='container' 
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ 
            enter: { transition: { staggerChildren: .1 } },
            exit: { transition: { staggerChildren: .1 } }
          }}
        >
          <AnimatePresence exitBeforeEnter>
            { item }
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div 
        className='back' 
        variants={backVariants}
        initial='hidden'
        animate="enter"
        exit="exit"
        whileHover='whileHover'
      >
        <Link to="/">←</Link>
      </motion.div>
    </div>
  )
}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

export default ItemList;
