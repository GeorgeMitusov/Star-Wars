import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader } from 'three';

const Record = ({ item, field, label  }) => {

    return (
        <li className="list-group-item">
            <span className="term"> { label } </span>
            <span> {item[field]}  </span>
        </li>
    )
}

export {
    Record
}

const transition = { 
    type: 'tween',
    duration: 1,
    ease: 'easeIn' 
  };
  
const backVariants = {
    hidden: { x: -100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: .5, ...transition } },
    exit: { x: -100, opacity: 0, transition },
    whileHover: { scale: 1.3, transition: { type: 'tween', ease: 'easeIn', duration: .3, delay: .1 } }
};
  

const ItemDetailsView = ({ item, selectedItem, getImageUrl, children, path}) => {
    
    console.log(getImageUrl(selectedItem));

    const render = selectedItem == null ? <h1> Select item from the list </h1> :
        <motion.div 
            className="item-details"
            initial={{ x: '100%', scale: 0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1, transition }}
            exit={{ x: "-100%", scale: 0, opacity: 0, transition }}
        >
                <motion.div 
                    className='back' 
                    variants={backVariants}
                    initial='hidden'
                    animate="enter"
                    exit="exit"
                    whileHover='whileHover'
                >
                    <Link to={`/${path}`} >←</Link>
                </motion.div>
                {
                    getImageUrl(selectedItem) ?
                    <img className="item-image" src={getImageUrl(selectedItem)} /> :
                    <Loader/>
                }
                <div className="card-body">
                    <ul className="list-group">
                        { React.Children.map(children, child => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                </div>
            </motion.div>

    return render 
}

export default ItemDetailsView