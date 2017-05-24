import React from 'react'

const Back = (props) => {

  return (
    <div className="back-btn">
      <img src='/images/back.png' onClick={props.placeBackBtn} alt='back' />
    </div>
  )
}

export default Back
