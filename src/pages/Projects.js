import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import breakout from '../img/projects/Brekout.jpg'
import quiz from '../img/projects/quiz.jpg'
import imageGallery from '../img/projects/image-gallery.jpg'

const Projects = () => {
  return (
    <StyledProjects>
      <Project>
        <h2>Breakout Game</h2>
        <div className="line"></div>
        <Link>
          <img src={breakout} alt="breakout" />
        </Link>
      </Project>

      <Project>
        <h2>Image Gallery</h2>
        <div className="line"></div>
        <Link>
          <img src={imageGallery} alt="imageGallery" />
        </Link>
      </Project>

      <Project>
        <h2>Qiz Game</h2>
        <div className="line"></div>
        <Link>
          <img src={quiz} alt="quiz" />
        </Link>
      </Project>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`
const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
export default Projects
