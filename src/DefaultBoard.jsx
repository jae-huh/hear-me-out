import React from 'react'

import './DefaultBoard.css'

import Buttons from './Buttons'
import Display from './Display'



class DefaultBoard extends React.Component {
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
        <Display message={this.state.message}/>
        <Buttons showMessage={this.showMessage}/>
      </div>
    )
  }
}

export default DefaultBoard
