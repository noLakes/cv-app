import React from 'react'
import EditableText from './SubComponents/EditableText'

class Summary extends React.Component {
  render () {
    return (
      <div className='summary-container cv-section'>
        <h2>summary</h2>
        <EditableText
        default='say something about yourself...'
        tag='p'
        inputType='textarea'
        />
      </div>
    )
  }
}

export default Summary