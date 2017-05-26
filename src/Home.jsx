import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import Display from './Display'

const Home = () => {
  return (
    <div className="home">
      <Display message={'Hello'} />
      <Link to='/default-board' className="home-links top-link"><div className="home-options">Default Board</div></Link>
      <Link to='/add-board' className="home-links"><div className="home-options">Create a Board</div></Link>
      <Link to='/text-field' className="home-links"><div className="home-options">Text to Voice</div></Link>
    </div>
  )
}

export default Home
