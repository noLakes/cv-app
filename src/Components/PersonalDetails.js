import React from 'react'
import EditableText from './SubComponents/EditableText.js'

class PersonalDetails extends React.Component {
  render () {
    return (
      <div className='personal-details-container'>
        <EditableText default='test' tag='h1' />
      </div>
    )
  }
}

export default PersonalDetails
