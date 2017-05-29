import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from './api'

import './CustomisedBoards.css'

import Display from './Display'

class CustomisedBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customBoards: []
    }
  }

  componentWillMount() {
    fetch(baseUrl + '/boards')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          customBoards: data
        }, console.log(data))
      })
  }

  render () {
    return (
      <div>
        <Display message={'Choose a board'} />
        <div className="custom-boards">
          {this.state.customBoards.map((board, i) => {
            return <Link to={`/boards/${board.id}`} className="custom-board-link" key={i}><div className="custom-board">{board.name}</div></Link>
          })}
        </div>
      </div>
    )
  }
}

export default CustomisedBoard
