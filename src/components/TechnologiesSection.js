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

function TechnologiesSection() {
  return (
    <div className="technologies">
      <div className="description">
        <h2>
          Only <span>best</span> technologies.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={vsCode} alt="vsCode" />
              <h3>vsCode</h3>
            </div>
            <p>Use vsCode like a boss</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={html} alt="html" />
              <h3>HTML5</h3>
            </div>
            <p>Grate webpages</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={css} alt="css" />
              <h3>CSS3</h3>
            </div>
            <p>Create mobile responsive pages</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={sass} alt="sass" />
              <h3>SASS</h3>
            </div>
            <p>------</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={javascript} alt="javascript" />
              <h3>JAVASCRIPT</h3>
            </div>
            <p>------</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={react} alt="react" />
              <h3>REACT</h3>
            </div>
            <p>------</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={nodeJs} alt="nodeJs" />
              <h3>NodeJs</h3>
            </div>
            <p>------</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={git} alt="git" />
              <h3>GIT</h3>
            </div>
            <p>------</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={github} alt="github" />
              <h3>GitHub</h3>
            </div>
            <p>------</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  )
}

export default TechnologiesSection
