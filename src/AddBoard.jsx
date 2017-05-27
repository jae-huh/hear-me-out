import React from 'react'

import './AddBoard.css'

import { baseUrl } from './api'
import Display from './Display'

class AddBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardName: '',
      description: '',
      buttons: [
        {
          word: '',
          imgUrl: '',
          type: 'category-item'
        },
      ]
    }

    this.setBoardName = this.setBoardName.bind(this)
    this.onButtonChange = this.onButtonChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.addButton = this.addButton.bind(this)
  }

  setBoardName(e) {
    this.setState({
      boardName: e.target.value
    })
  }

  onButtonChange(e, i) {
    const name = e.target.name
    const value = e.target.value

    const buttons = [...this.state.buttons]
    buttons[i] = {
      ...buttons[i],
      [name]: value
    }

    this.setState({
      buttons: buttons,
    })
  }

  makeBoard() {
    const header = new Headers({'Content-Type': 'application/json'})
    fetch(`${baseUrl}/boards`, {
      headers: header,
      method: 'post',
      body: JSON.stringify({
        boardName: this.state.boardName,
        buttons: this.state.buttons
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  onSubmit(e) {
    e.preventDefault()
    this.makeBoard()
  }

  addButton(e) {
    e.preventDefault()
    const buttons = [...this.state.buttons]
    buttons.push({
      word: '',
      imgUrl: '',
      type: 'category'
    })
    this.setState({
      buttons: buttons
    })
  }

  render(){
    console.log(this.state)
    return(
      <div className="add-board">
        <Display message={'Create a Board'} />
        <form onSubmit={this.onSubmit} className="add-button-form">
          <div className="add-board-main">
            <input type="text" name="boardName" placeholder="Enter the name of the new board" onChange={this.setBoardName} /><br />
            <button onClick={this.addButton}>Add a button</button>
          </div>
          <div className="new-buttons">
            {this.state.buttons.map((item, i) => (
              <div className="create-button" key={i}>
                <input className="button-input" type="text" name="word" placeholder="Word" onChange={(e) =>  this.onButtonChange(e, i)} /><br />
                <input className="button-input" type="text" name="imgUrl" placeholder="Image url" onChange={(e) => this.onButtonChange(e, i)} /><br />
              </div>
            ))}
          </div>
          <input type="submit" name="submit" value="Make a board" />
        </form>
      </div>
    )
  }
}

export default AddBoard
