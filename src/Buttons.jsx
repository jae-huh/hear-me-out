import React from 'react'

import './Buttons.css'

import Button from './Button'
import Back from './Back'
import { baseUrl } from './api'
// import oldData from '../data/categories.js'

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
    // console.log(this.props)
    const id = this.props.id
    fetch(`${baseUrl}/boards/${id}`)
      .then((res) => {
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
    console.log(this.props)
    if (this.state.displayData.length < 1) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="button-container">
        {this.props.id === 'default' && this.state.displayData[0].type === 'category-item' && <Back placeBackBtn={this.placeBackBtn} />}
        {this.state.displayData.map((item, i) => <Button msg={item.word} img={item.imgUrl} showMessage={this.props.showMessage} changeWords={this.changeWords} id={i} type={item.type} key={item.word} />)}
      </div>
    )
  }

}


export default Buttons
