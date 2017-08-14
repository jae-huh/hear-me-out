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
            Hear Me Out was created to help patients in hospital, who are experiencing difficulties communicating due to their conditions.
          </p>
          <p>
            It offers a default communication board that has basic patient needs with an ability to add customised boards the users can create. When a button that includes an icon and a corresponding word is pressed, the user can hear the word.
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
