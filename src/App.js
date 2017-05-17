import React from 'react'
import './App.css'
import Button from './Button'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hear Me Out</h1>
        </div>
        <div className="button-container">
          <Button name="Small Talk" />
          <Button name="Food" />
          <Button name="Pain" />
          <Button name="Need" />
          <Button name="Place" />
          <Button name="Question" />
          <Button name="Person" />
        </div>
      </div>
    )
  }
}

export default App
