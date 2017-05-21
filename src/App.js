import React from 'react'

import './App.css'

import Buttons from './Buttons'
import Display from './Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: "Choose a category"
    }
    this.showMessage = this.showMessage.bind(this)
  }

  showMessage (msg) {
    this.setState({
      message: msg
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hear Me Out</h1>
        </div>
        <Display message={this.state.message}/>
        <Buttons showMessage={this.showMessage}/>
      </div>
    )
  }
}

export default App
