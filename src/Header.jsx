import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1><Link to='/' className="home-link">Hear Me Out</Link></h1>
    </div>
  )
}

export default Header
