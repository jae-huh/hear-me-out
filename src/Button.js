import React from 'react'
import './Button.css'
import dinner from '../public/images/dinner.png'

const Button = (props) => {
  const synth = window.speechSynthesis
  const utter = new SpeechSynthesisUtterance(props.name)
  function speak () {
    synth.speak(utter)
  }

  return (
    <div className="button" onClick={speak}>
      <img src={dinner} />
      <p className="keyword">{props.name}</p>
    </div>
  )
}

export default Button
