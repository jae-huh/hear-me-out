import React from 'react'

import './Buttons.css'

import categories from '../data/categories'
import Button from './Button'

const Buttons = (props) => {
  return (
    <div className="button-container">
      {categories.map((item) => <Button msg={item.msg} img={item.img} showMessage={props.showMessage} />)}
    </div>
  )
}

export default Buttons
