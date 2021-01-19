import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// Images
import breakout from '../img/projects/breakout.jpg'
import quiz from '../img/projects/quiz.jpg'
import imageGallery from '../img/projects/gallery.jpg'
import Hangman from '../img/projects/Hangman.jpg'
import calculator from '../img/projects/calculator.jpg'
import player from '../img/projects/player.jpg'

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
        <motion.h2 variants={fade}>Chill music Player</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <Container>
            <ShowCode>
              <a
                href="https://igorzinar.com/projects/chillplayer/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fas fa-eye fa-3x"></i>
                </button>
              </a>
              <a
                href="https://github.com/igorzinar/music-player"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fab fa-github-square fa-3x"></i>
                </button>
              </a>
            </ShowCode>

            <a
              href="https://igorzinar.com/projects/chillplayer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img variants={photoAnim} src={player} alt="breakout" />
            </a>
          </Container>
        </Hide>
      </Project>

      <Project>
        <motion.h2 variants={fade}>Breakout Game</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <Container>
            <ShowCode>
              <a
                href="https://igorzinar.com/projects/breackout/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fas fa-eye fa-3x"></i>
                </button>
              </a>
              <a
                href="https://github.com/igorzinar/Breakout-Game"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fab fa-github-square fa-3x"></i>
                </button>
              </a>
            </ShowCode>

            <a
              href="https://igorzinar.com/projects/breackout/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img variants={photoAnim} src={breakout} alt="breakout" />
            </a>
          </Container>
        </Hide>
      </Project>

      <Project
      // ref={element}
      // variants={fade}
      // animate={controls}
      // initial="hidden"
      >
        <Hide>
          <h2>Image Gallery</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>

          <Container>
            <ShowCode>
              <a
                href="https://igorzinar.com/projects/gallery"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fas fa-eye fa-3x"></i>
                </button>
              </a>
              <a
                href="https://github.com/igorzinar/image-gallery"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fab fa-github-square fa-3x"></i>
                </button>
              </a>
            </ShowCode>
            <a
              href="https://igorzinar.com/projects/gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageGallery} alt="imageGallery" />
            </a>
          </Container>
        </Hide>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2>Quiz Game</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Container>
          <ShowCode>
            <a
              href="https://igorzinar.com/projects/quiz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fas fa-eye fa-3x"></i>
              </button>
            </a>
            <a
              href="https://github.com/igorzinar/question-game"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fab fa-github-square fa-3x"></i>
              </button>
            </a>
          </ShowCode>
          <a
            href="https://igorzinar.com/projects/quiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={quiz} alt="quiz" />
          </a>
        </Container>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2> Exchange Calculator </h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Container>
          <ShowCode>
            <a
              href="https://igorzinar.com/projects/exhangecalculator/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fas fa-eye fa-3x"></i>
              </button>
            </a>
            <a
              href="https://github.com/igorzinar/Exchange-Calculator"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fab fa-github-square fa-3x"></i>
              </button>
            </a>
          </ShowCode>
          <a
            href="https://igorzinar.com/projects/exhangecalculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={calculator} alt="quiz" />
          </a>
        </Container>
      </Project>

      <Project
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2>Hangman Game</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Container>
          <ShowCode>
            <a
              href="https://igorzinar.com/projects/hangman/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fas fa-file-code fa-3x"></i>
              </button>
            </a>
            <a
              href="https://github.com/igorzinar/Hangman"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <i className="fab fa-github-square fa-3x"></i>
              </button>
            </a>
          </ShowCode>
          <a
            href="https://igorzinar.com/projects/hangman/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hangman} alt="quiz" />
          </a>
        </Container>
      </Project>
      <ScrollTop />
    </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
   
    h2 {
      padding: 1rem 0.5rem;
    }
  }
  @media ( max-width:550px ) {
    flex-direction: column;
  }
`
const Project = styled(motion.div)`
  position: relative;
  padding-bottom: 10rem;
  max-width: 45%;
  margin: 0 1rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  h2 {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 1380px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1120px) {
    max-width: 80%;
    h2 {
      font-size: 4rem;
    }
    img {
      width: 100%;
      height: 40vh;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 3rem;
    }
    .line {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
    padding: 0.5rem 0.2rem;
    margin: 0;
    text-align: center;
    h2 {
      /* display: none; */
      font-size: 0.8rem;
    }
    .line {
      /* display: none; */
    }
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Container = styled(motion.div)`
  position: relative;
`

const ShowCode = styled.div`
  /* display: none; */
  opacity: 0;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.534);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-out;

  i {
    font-size: 5rem;
    color: #23d997;
  }
  a {
    padding: 0 3rem;
    button {
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  &:hover {
    opacity: 1;
    i:hover {
      color: #fff;
    }
  }

  @media (max-width: 450px) {
    a {
      padding: 0 1rem;
    }
    i {
      /* margin: 0 2rem; */
    }
  }
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
