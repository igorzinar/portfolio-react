import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`
export default AboutSection
