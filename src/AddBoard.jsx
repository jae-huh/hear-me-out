import React from 'react'

import { baseUrl } from './api'

class AddBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardName: '',
      buttons: [
        {
          word: '',
          imgUrl: '',
          type: 'category'
        }
      ]
    }

    this.setBoardName = this.setBoardName.bind(this)
    this.setWord = this.setWord.bind(this)
    this.setImgUrl = this.setImgUrl.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  setBoardName(e) {
    this.setState({
      boardName: e.target.value
    }, () => console.log(this.state))
  }

  setWord(e) {
    this.setState({
      buttons: [
        {
          ...this.state.buttons[0],
          word: e.target.value
        }
      ]
    }, () => console.log(this.state))
  }

  setImgUrl(e) {
    console.log(this.state.buttons[0])
    this.setState({
      buttons: [
        {
          ...this.state.buttons[0],
          imgUrl: e.target.value
        }
      ]
    }, () => console.log(this.state))
  }

  makeBoard() {
    const header = new Headers({'Content-Type': 'application/json'})
    fetch(`${baseUrl}/boards`, {
      headers: header,
      method: 'post',
      body: JSON.stringify({
        boardName: this.state.boardName,
        buttons: [
          {
            word: this.state.buttons[0].word,
            imgUrl: this.state.buttons[0].imgUrl,
            type: 'category'
          }
        ]
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  onSubmit(e) {
    e.preventDefault()
    this.makeBoard()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="boardName" placeholder="Board Name" onChange={this.setBoardName} /><br />
          <input type="text" name="word" placeholder="Word" onChange={this.setWord} /><br />
          <input type="text" name="imgUrl" placeholder="Image url" onChange={this.setImgUrl} /><br />
          <input type="submit" name="submit" value="Make a board" />
        </form>
      </div>
    )
  }
}

export default AddBoard
