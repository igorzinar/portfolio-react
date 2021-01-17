import React from 'react'
import portrait from '../img/portrait.jpg'
import { About, Description, Image, Hide } from '../styles'
import styled from 'styled-components'

// Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
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
        <motion.p variants={fade}>
          Contact with me for details about work and more...
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={portrait} alt="home1" />
      </Image>
      <Wave />
      <Wave />
    </About>
  )
}

export default AboutSection
