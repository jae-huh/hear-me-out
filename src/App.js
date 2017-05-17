import React from 'react'
import './App.css'
import Button from './Button'
import Display from './Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: "Choose a category"
    }
    this.showMessage = this.showMessage.bind(this)
    this.generateButtons = this.generateButtons.bind(this)
  }

  showMessage (msg) {
    this.setState({
      message: msg
    })
  }


  generateButtons() {
    const categories = ["Small Talk", "Question", "Food", "Pain", "Need", "Place", "Person"]
    return categories.map((item) => {
      return (<Button name={item} showMessage={this.showMessage}/>)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hear Me Out</h1>
        </div>
        <Display message={this.state.message}/>
        <div className="button-container">
          {this.generateButtons()}
        </div>
      </div>
    )
  }
}

export default App
