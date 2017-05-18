import React from 'react'

import './Buttons.css'

import Button from './Button'
import dinner from '../public/images/dinner.png'
// import questionMark from '../public/images/question-mark.png'

const Buttons = (props) => {
  // Move generate button function from App and button container div + below
  const categories = [
    {msg: "Small Talk", img: dinner},
    {msg: "Question", img: dinner},
    {msg: "Food", img: dinner},
    {msg: "Pain", img: dinner},
    {msg: "Need", img: dinner},
    {msg: "Place", img: dinner},
    {msg: "Person", img: dinner}
  ]

  return (
    <div className="button-container">
      {categories.map((item) => <Button msg={item.msg} img={item.img} showMessage={props.showMessage} />)}
    </div>
  )
}

export default Buttons
