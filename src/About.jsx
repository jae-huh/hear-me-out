import React from 'react'

import './Additional-info.css'

import Display from './Display'

const About = (props) => {
  return (
    <div>
      <Display message={'About'} />
      <div className="additional-info-container">
        <div className="about-app">
          <p>
            Hear Me Out was made for patients who are experiencing difficulties in communicating.
          </p>
          <p>
            It is an open-source project, and can be found at <a href="https://github.com/Jae-Huh/hear-me-out" target="blank">https://github.com/Jae-Huh/hear-me-out</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
