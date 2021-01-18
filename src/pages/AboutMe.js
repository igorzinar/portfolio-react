import React from 'react'
import AboutSection from '../components/AboutSection'
import TechnologiesSection from '../components/TechnologiesSection'
import FaqSection from '../components/FaqSection'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'
function AboutMe() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <TechnologiesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  )
}

export default AboutMe
