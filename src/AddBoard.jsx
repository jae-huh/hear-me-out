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
          buttonId: Math.floor(Math.random()*10000000),
          word: '',
          imgUrl: '',
          imgData: '',
          type: 'category-item'
        },
      ]
    }

    this.setBoardName = this.setBoardName.bind(this)
    this.onButtonChange = this.onButtonChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.addButton = this.addButton.bind(this)
    this.upload = this.upload.bind(this)
    this.addImgUrl = this.addImgUrl.bind(this)
    this.deleteButton = this.deleteButton.bind(this)
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
      .then(data => {
        console.log(data)
        location.href = `/#/boards/${data.data.name}/`
      })
  }

  onSubmit(e) {
    e.preventDefault()
    this.makeBoard()

  }

  addButton(e) {
    e.preventDefault()
    const buttons = [...this.state.buttons]
    buttons.push({
      buttonId: Math.floor(Math.random()*10000000),
      word: '',
      imgUrl: '',
      type: 'category-item'
    })
    this.setState({
      buttons: buttons
    })
  }

  upload(e, i) {
    const fileReader = new FileReader()
    const uploadToServer = () => {
      // console.log(fileReader.result)
      const header = new Headers({'Content-Type': 'application/json'})
      fetch(`${baseUrl}/upload`, {
        headers: header,
        method: 'post',
        body: JSON.stringify({
          fileName: 'random',
          data: fileReader.result,
        })
      })
        .then(result => result.json())
        .then(data => this.addImgUrl(data, i))
    }
    fileReader.readAsDataURL(e.target.files[0])
    fileReader.onload = uploadToServer
  }

  addImgUrl(imgUrl, id) {
    const buttons = [...this.state.buttons]
    buttons[id].imgUrl = imgUrl
    this.setState({
      buttons: buttons
    })
  }

  deleteButton(e) {
    e.preventDefault()
    const buttonIndex = e.target.dataset.buttonindex
    const buttons = [...this.state.buttons]
    buttons.splice(buttonIndex, 1)
    this.setState({
      buttons: buttons
    })
  }

  render(){
    // console.log(this.state)
    return(
      <div className="add-board">
        <Display message={'Create a Board'} />
        <form onSubmit={this.onSubmit} className="add-button-form">
          <div className="add-board-main">
            <div className="board-name-container">
              <input type="text" name="boardName" placeholder="Name of the new board" onChange={this.setBoardName} /><br />
            </div>
            <button className="add-button" onClick={this.addButton}>Add a button</button>
          </div>
          <div className="new-buttons">
            {this.state.buttons.map((item, i) => (
              <div className="create-button" key={item.buttonId}>
                <div className="delete-button-container">
                  <span className="delete-button" onClick={this.deleteButton} data-buttonindex={i}>&#8855;</span>
                </div>
                {item.imgUrl && <img src={item.imgUrl} alt="button" style={{ maxWidth: '100%', maxHeight: '150px'}}/> }
                <input className="button-input" type="text" name="word" placeholder="Word" onChange={(e) =>  this.onButtonChange(e, i)} value={item.word}/><br />
                <input className="button-input" type="text" name="imgUrl" placeholder="Image url" value={item.imgUrl} onChange={(e) => this.onButtonChange(e, i)} /><br />
                <input type="file" accept="image/*" onChange={(e) => this.upload(e, i)} />
              </div>
            ))}
          </div>
          <input className="make-button" type="submit" name="submit" value="Make a board" />
        </form>
      </div>
    )
  }
}

export default AddBoard
