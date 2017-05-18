import React from 'react'
// import './Button.css'
import dinner from '../public/images/dinner.png'
// import questionMark from '../public/images/question-mark.png'

const Button = (props) => {
  const synth = window.speechSynthesis
  const utter = new SpeechSynthesisUtterance(props.msg)
  function speak () {
    synth.speak(utter)
  }

  function speakShowMessage() {
    speak()
    props.showMessage(props.msg)
  }

  return (
    <div className="button" onClick={speakShowMessage}>
      <img className="btn-image" src={props.img} alt={props.msg} />
      <p className="keyword">{props.msg}</p>
    </div>
  )
}

export default Button

/* <img className="btn-image" src={dinner} alt={props.name} />
<p className="keyword">{props.name}</p> */
