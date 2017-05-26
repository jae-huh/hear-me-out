import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import DefaultBoard from './DefaultBoard'
import TextField from './TextField'
import AddBoard from './AddBoard'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/default-board" component={DefaultBoard} />
        <Route path="/text-field" component={TextField} />
        <Route path="/add-board" component={AddBoard} />
      </div>
    </Router>
  )
}

export default App
