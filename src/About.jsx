import React from 'react'

import './Additional-info.css'

import Display from './Display'

const About = (props) => {
  return (
    <div>
      <Display message={'About'} />
      <div className="additional-info-container">
        <div className="about-app">
          <p>GitHub Repository for this project: <a href="https://github.com/Jae-Huh/hear-me-out" target="blank">https://github.com/Jae-Huh/hear-me-out</a></p>
        </div>
      </div>
    </div>
  )
}

export default About
