import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import breakout from '../img/projects/breakout.jpg'
import quiz from '../img/projects/quiz.jpg'
import imageGallery from '../img/projects/gallery.jpg'
import Hangman from '../img/projects/Hangman.jpg'
import calculator from '../img/projects/calculator.jpg'

// Animations
import { motion } from 'framer-motion'
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation'

import ScrollTop from '../components/ScrollTop'
const Projects = () => {
  return (
    <StyledProjects
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Breakout Game</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="https//:igorzinar.com">
          <Hide>
            <motion.img variants={photoAnim} src={breakout} alt="breakout" />
          </Hide>
        </Link>
      </Project>

      <Project
      // ref={element}
      // variants={fade}
      // animate={controls}
      // initial="hidden"
      >
        <h2>Image Gallery</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/gallery">
          <img src={imageGallery} alt="imageGallery" />
        </Link>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2>Qiz Game</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/quiz">
          <img src={quiz} alt="quiz" />
        </Link>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2> Exchange Calculator </h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/quiz">
          <img src={calculator} alt="quiz" />
        </Link>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2>Hangman Game</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/quiz">
          <img src={Hangman} alt="quiz" />
        </Link>
      </Project>
      <ScrollTop />
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  /* @media (max-width: 1060px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  } */

  h2 {
    padding: 1rem 0;
  }
`
const Project = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 1060px) {
    img {
    }
  }

  @media (max-width: 780px) {
    h2 {
      font-size: 3rem;
    }
    img {
      height: 30vh;
    }
  }
`

const Hide = styled.div`
  overflow: hidden;
`

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`
export default Projects
