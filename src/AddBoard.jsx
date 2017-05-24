import React from 'react'

import { baseUrl } from './api'

class AddBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardName: ''
    }

    this.setBoardName = this.setBoardName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  setBoardName(e) {
    this.setState({
      boardName: e.target.value
    }, () => console.log(this.state))
  }

  makeBoard() {
    const header = new Headers({'Content-Type': 'application/json'})
    fetch(`${baseUrl}/boards`, {
      headers: header,
      method: 'post',
      body: JSON.stringify({
        boardName: this.state.boardName
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
          <input type="text" name="boardName" placeholder="boardName" onChange={this.setBoardName} />
          <input type="submit" name="submit" value="Make a board" />
        </form>
      </div>
    )
  }
}

export default AddBoard
