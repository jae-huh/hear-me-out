import React from 'react'
import './App.css'
import Button from './Button'
import Display from './Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: "msg"
    }
    this.showMessage = this.showMessage.bind(this)
  }

  showMessage (msg) {
    this.setState({
      message: msg
    })
  }


  // have an array of buttons and loop through it to generate multiple of them
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hear Me Out</h1>
        </div>
        <Display message={this.state.message}/>
        <div className="button-container">
          <Button name="Small Talk" showMessage={this.showMessage} />
          <Button name="Food" showMessage={this.showMessage} />
          <Button name="Pain" showMessage={this.showMessage} />
          <Button name="Need" showMessage={this.showMessage} />
          <Button name="Place" showMessage={this.showMessage} />
          <Button name="Question" showMessage={this.showMessage} />
          <Button name="Person" showMessage={this.showMessage} />
        </div>
      </div>
    )
  }
}

export default App
