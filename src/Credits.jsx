import React from 'react'

import './Credits.css'

import Display from './Display'

const Credits = (props) => {
  return (
    <div>
      <Display message={'Credits'} />
      <div className="credits">
        <div className="icon-credit">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    </div>
  )
}

export default Credits
