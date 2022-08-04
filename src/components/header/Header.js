import React from 'react'
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

import Swlogo from '../../assets/Swlogo';

import './Header.scss';

const Header = () => {

  const Light = () => { 
    return (
        <>
            <directionalLight position={[ 0, 0, 50 ]} intensity={.5} />
        </>
    )
  }

  return (
    <motion.div 
      className='header'
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1, 
        transition: { type: "tween", ease: 'easeIn', duration: .7 } }}
    >
      <div className='logo'>
        <Canvas>
          <Swlogo position={[0, -5.25, 0]} />
          <Light/>
        </Canvas>
      </div>
    </motion.div>
  )
}

export default Header
