import React from 'react'
import AboutSection from '../components/AboutSection'
import TechnologiesSection from '../components/TechnologiesSection'
import FaqSection from '../components/FaqSection'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'
import styled from 'styled-components'
function AboutMe() {
  return (
    <AboutContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <TechnologiesSection />
      <FaqSection />
      <ScrollTop />
    </AboutContainer>
  )
}
const AboutContainer = styled(motion.div)`
  overflow: hidden;
`

export default AboutMe
