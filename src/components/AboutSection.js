import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              cool <span> web app </span>
            </h2>
          </Hide>
          <Hide>
            <h2>for fun</h2>
          </Hide>
        </div>
        <p> Contact with me for details about work and more... </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  )
}

//Styled Component

export default AboutSection
