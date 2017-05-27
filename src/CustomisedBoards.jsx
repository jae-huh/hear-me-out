import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from './api'

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
        <div>
          {this.state.customBoards.map((board, i) => {
            return <Link to={`/boards/${board.id}`} key={i}><div>{board.name}</div></Link>
          })}
        </div>
      </div>
    )
  }
}

export default CustomisedBoard
