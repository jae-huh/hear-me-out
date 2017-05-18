import React from 'react'

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
