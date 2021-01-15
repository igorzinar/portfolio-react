import React from 'react'
// Import icons
import vsCode from '../img/icons/vs-code.png'
import html from '../img/icons/html-5.png'
import css from '../img/icons/css.3.png'
import sass from '../img/icons/sass.png'
import javascript from '../img/icons/javascript.png'
import react from '../img/icons/react.png'
import nodeJs from '../img/icons/nodejs.png'
import git from '../img/icons/git.png'
import github from '../img/icons/github.png'
import home2 from '../img/home2.png'
import styledComp from '../img/icons/styledComp.png'
import reduxLy from '../img/icons/reduxLy.png'
import npmP from '../img/icons/npmP.png'

// Styles
import styled from 'styled-components'
import { About, Description, Image } from '../styles'

function TechnologiesSection() {
  return (
    <Technologies>
      <Description>
        <h2>
          Only <span>best</span> technologies.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={vsCode} alt="vsCode" />
              <h3>vsCode</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={html} alt="html" />
              <h3>HTML5</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={css} alt="css" />
              <h3>CSS3</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={sass} alt="sass" />
              <h3>SASS</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={javascript} alt="javascript" />
              <h3>JAVASCRIPT</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={react} alt="react" />
              <h3>REACT</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={nodeJs} alt="nodeJs" />
              <h3>NodeJs</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={git} alt="git" />
              <h3>GIT</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img className="bg-git" src={github} alt="github" />
              <h3>GitHub</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={styledComp} alt="styled" />
              <h3>Styled Components</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={reduxLy} alt="redux" />
              <h3>Redux</h3>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img src={npmP} alt="npm" />
              <h3 className="npm">NPM</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Technologies>
  )
}

const Technologies = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    /* width: 50%; */
    padding: 2rem 0 4rem 0;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  img {
    width: 80px;
    margin-bottom: 2rem;
  }
`
const Card = styled.div`
  flex-basis: 10rem;
  margin-bottom: 2rem;
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-size: 1.4rem;
    text-align: center;
  }
  h3.npm {
    padding-top: 2.5rem;
  }
  img.bg-git {
    background: #e9e9e9;

    border-radius: 10%;
  }
`
export default TechnologiesSection
