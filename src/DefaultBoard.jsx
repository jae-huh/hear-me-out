import React from 'react'

import './DefaultBoard.css'

import Buttons from './Buttons'
import Display from './Display'



class DefaultBoard extends React.Component {
  constructor (props) {
    super(props)
    const message = this.props.match.params.id === 'default' ? 'Choose a category' : 'Choose a word'
    this.state = {
      message: message
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
        <Display message={this.state.message} />
        <Buttons showMessage={this.showMessage} id={this.props.match.params.id} />
      </div>
    )
  }
}

export default DefaultBoard
