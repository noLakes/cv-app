import React from 'react'
import EditableText from './SubComponents/EditableText'

class Summary extends React.Component {
  render () {
    return (
      <div className='summary-container cv-section'>
        <EditableText
        default='summary! say something about yourself...'
        tag='p'
        inputType='textarea'
        />
      </div>
    )
  }
}

export default Summary
