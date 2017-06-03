import React from 'react'

import './Additional-info.css'

import Display from './Display'

const About = (props) => {
  return (
    <div>
      <Display message={'About'} />
      <div className="additional-info-container">
        <div className="about-app">
          <p>Contents coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default About
