import React from 'react'

import './Buttons.css'

import categories from '../data/categories'
import Button from './Button'

class Buttons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: categories,
      displayData: categories
    }
    this.changeWords = this.changeWords.bind(this)
  }

  changeWords (item) {
    this.setState({
      displayData: categories[item].buttons
    })
  }



  render() {
    return (
      <div className="button-container">
        {this.state.displayData.map((item, i) => <Button msg={item.msg} img={item.img} showMessage={this.props.showMessage} changeWords={this.changeWords} id={i} type={item.type} key={item.msg} />)}
      </div>
    )
  }

}


export default Buttons
