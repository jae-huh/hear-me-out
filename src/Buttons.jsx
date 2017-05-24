import React from 'react'

import './Buttons.css'

import Button from './Button'
import Back from './Back'
import { baseUrl } from './api'
import oldData from '../data/categories.js'

class Buttons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      displayData: []
    }
    this.changeWords = this.changeWords.bind(this)
    this.placeBackBtn = this.placeBackBtn.bind(this)
  }

  componentWillMount() {
    fetch(baseUrl + '/boards/default')
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        this.setState({
          data: data,
          displayData: data
        })
      })
  }

  changeWords (item) {
    if (this.state.displayData[item].type === 'category-item') {
      this.setState({
        displayData: this.state.data
      })
    } else {
      this.setState({
        displayData: this.state.data[item].buttons
      })
    }
  }

  placeBackBtn () {
    if (this.state.displayData[0].type === 'category-item') {
      this.setState({
        displayData: this.state.data
      })
    }
  }

  render() {
    if (this.state.displayData.length < 1) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="button-container">
        {this.state.displayData[0].type === 'category-item' && <Back placeBackBtn={this.placeBackBtn} />}
        {this.state.displayData.map((item, i) => <Button msg={item.msg} img={item.img} showMessage={this.props.showMessage} changeWords={this.changeWords} id={i} type={item.type} key={item.msg} />)}
      </div>
    )
  }

}


export default Buttons
