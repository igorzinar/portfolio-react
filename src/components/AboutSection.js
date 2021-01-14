import React from 'react'
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I work to make</h2>
          </div>
          <div className="hide">
            <h2>
              cool <span> web app </span>
            </h2>
          </div>
          <div className="hide">
            <h2>for fun</h2>
          </div>
        </div>
        <p> Contact with me for details about work and more... </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={home1} alt="home1" />
      </div>
    </div>
  )
}

export default AboutSection
