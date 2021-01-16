import React from 'react'
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'

// Framer Motion
import { motion } from 'framer-motion'

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  }
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 1,
      },
    },
  }
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              cool <span> web app </span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>for fun</motion.h2>
          </Hide>
        </motion.div>
        <p> Contact with me for details about work and more... </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  )
}

export default AboutSection
