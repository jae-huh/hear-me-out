import React from 'react'

import './Buttons.css'

import categories from '../data/categories'
import Button from './Button'
import Back from './Back'

class Buttons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: categories,
      displayData: categories
    }
    this.changeWords = this.changeWords.bind(this)
    this.placeBackBtn = this.placeBackBtn.bind(this)
  }

  changeWords (item) {
    this.setState({
      displayData: categories[item].buttons
    })
  }

  placeBackBtn () {
    console.log(this.state.displayData[0].type)
    if (this.state.displayData[0].type === 'category-item') {
      this.setState({
        displayData: categories
      })
    }
  }


  render() {
    return (
      <div className="button-container">
        {this.state.displayData[0].type === 'category-item' && <Back placeBackBtn={this.placeBackBtn} />}
        {this.state.displayData.map((item, i) => <Button msg={item.msg} img={item.img} showMessage={this.props.showMessage} changeWords={this.changeWords} id={i} type={item.type} key={item.msg} />)}
      </div>
    )
  }

}


export default Buttons
