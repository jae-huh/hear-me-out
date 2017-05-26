import React from 'react'

import './TextField.css'

import Display from './Display'

class TextField extends React.Component {
  constructor () {
    super()
    this.state = {
      textContent: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.speak = this.speak.bind(this)
  }

  handleChange (evt) {
    this.setState({
      textContent: evt.target.value
    })
  }

  speak () {
    const synth = window.speechSynthesis
    const utter = new SpeechSynthesisUtterance(this.state.textContent)
    synth.speak(utter)
  }

  render() {
    return (
      <div className="text-field">
        <Display message={'Text to Voice'} />
        <div className="text-field-main">
          <textarea rows="8" cols="50" placeholder="Type your message here" value={this.state.textContent} onChange={this.handleChange}></textarea>
          <div className="speak-img">
            <img src="/images/speak.png" alt="speak" onClick={this.speak} />
          </div>
        </div>
      </div>
    )
  }
}

export default TextField
