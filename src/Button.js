import React from 'react'
import './Button.css'
import dinner from '../public/images/dinner.png'
import questionMark from '../public/images/question-mark.png'

const Button = (props) => {
  const synth = window.speechSynthesis
  const utter = new SpeechSynthesisUtterance(props.name)
  function speak () {
    synth.speak(utter)
  }

  function speakShowMessage() {
    speak()
    props.showMessage(props.name)
  }

  // Move generate button function from App and button container div + below

  return (
    <div className="button" onClick={speakShowMessage}>
      <img className="btn-image" src={dinner} alt={props.name} />
      <p className="keyword">{props.name}</p>
    </div>
  )
}

export default Button
