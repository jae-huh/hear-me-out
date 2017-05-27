import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import DefaultBoard from './DefaultBoard'
import CustomisedBoards from './CustomisedBoards'
import TextField from './TextField'
import AddBoard from './AddBoard'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/boards/:id" component={DefaultBoard} />
        <Route path="/customised-boards" component={CustomisedBoards} />
        <Route path="/text-field" component={TextField} />
        <Route path="/add-board" component={AddBoard} />
      </div>
    </Router>
  )
}

export default App
