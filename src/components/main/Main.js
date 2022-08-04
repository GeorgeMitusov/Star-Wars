import React from 'react'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './Main.scss';

import CharImg from '../../assets/char.jpg';
import FilmImg from '../../assets/film.jpg';
import PlanetImg from '../../assets/planet.jpg';
import SpecieImg from '../../assets/specie.jpg';
import StarshipImg from '../../assets/starship.jpg';
import VehicleImg from '../../assets/vehicles.jpeg';

const data = [
  {
    id: 1,
    path: '/people-page/',
    name: 'People',
    img: CharImg
  },
  {
    id: 2,
    path: '/planets-page/',
    name: 'Planets',
    img: PlanetImg
  },
  {
    id: 3,
    path: '/starships-page/',
    name: 'Starships',
    img: StarshipImg
  },
  {
    id: 4,
    path: '/species-page/',
    name: 'Species',
    img: SpecieImg
  },
  {
    id: 5,
    path: '/vehicles-page/',
    name: 'Vehicles',
    img: VehicleImg
  },
  {
    id: 6,
    path: '/films-page/',
    name: 'Films',
    img: FilmImg
  }
]

const transition = { 
  type: 'tween',
  duration: 0.3, 
  ease: 'easeIn' 
};

const thumbnailVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

const Main = () => {


  const item = data.map( i => (
    <motion.div 
      key={i.id}
      className='thumbnail'
      variants={thumbnailVariants}
    >
      <motion.div
        className='frame'
        whileHover='hover'
        variants={frameVariants}
        transition={transition}
      >
        <Link to={i.path}> 
          <img 
            src={i.img} 
            alt={i.img}
            variants={imageVariants}
            transition={transition} 
          />
          <div> <h6> {i.name} </h6> </div>
        </Link>
      </motion.div>
    </motion.div>
  ))

  return (
    <div className='main'>
      <motion.div 
        className="thumbnails"
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
    </div>
  )
}

export default Main