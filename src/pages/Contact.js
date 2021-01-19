import React from 'react'
// Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}> Get in touch</motion.h2>
        </Hide>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <a href="mailto:igorzinar@gmail.com" rel="noopener noreferrer">
                <i className="fas fa-envelope fa-4x"></i>
              </a>

              <a href="mailto:igorzinar@gmail.com" rel="noopener noreferrer">
                <h2>Email: igorzinar@gmail.com </h2>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <a
                href="https://www.linkedin.com/in/igor-zinar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-4x"> </i>
              </a>

              <a
                href="https://www.linkedin.com/in/igor-zinar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>LinkedIn</h2>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Hide>
              <Social variants={titleAnim}>
                <a href="tel:0037377888902" rel="noopener noreferrer">
                  <i className="fas fa-phone-square-alt fa-4x"></i>
                </a>
                <a href="tel:0037377888902" rel="noopener noreferrer">
                  <h2>Phone: +37377888902 </h2>
                </a>
              </Social>
            </Hide>

            <Hide>
              <Social variants={titleAnim}>
                <a
                  href="https://github.com/igorzinar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square fa-4x"> </i>
                </a>

                <a
                  href="https://github.com/igorzinar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>GitHub</h2>
                </a>
              </Social>
            </Hide>
          </Hide>
        </div>
      </Title>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 10rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: #fff;
  background-size: cover;

  @media (max-width: 750px) {
    padding: 5rem 0 0 5rem;
    margin: 0;
  }
  @media (max-width: 450px) {
    padding: 1rem;
    h2 {
      font-size: 2rem;
    }
  }
`
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: #000;
  @media (max-width: 1300px) {
    margin-top: 7rem;
  }
  @media (max-width: 1060px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`

const Hide = styled(motion.div)`
  overflow: hidden;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  transition: all 1s ease-out;
  @media (max-width: 1060px) {
    font-size: 3rem;
    h2 {
      font-size: 3rem;
    }
    i {
      font-size: 4rem;
    }
  }
  @media (max-width: 750px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: none;
    transition: all 0.75s ease-out;
    color: #000;
    &:hover {
      color: #23d997;
    }
  }
  i {
    color: #000;
    transition: all 0.75s ease-out;
    cursor: pointer;
    &:hover {
      color: #23d997;
      animation: shake 0.82s cubic-bezier(0.3, 0.07, 0.19, 0.6) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }

  h2 {
    margin: 2rem;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  }
`
export default Contact
