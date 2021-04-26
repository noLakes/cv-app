import React from 'react'
import EditableText from './SubComponents/EditableText'

class PersonalDetails extends React.Component {
  render () {
    return (
      <div className='personal-details-container  cv-section'>

        <div className='name-container'>
          <EditableText default='Full Name' tag='h1' />
          <EditableText default='title/occupation' tag='h3'/>
        </div>

        <ul className='contact-details'>
          <EditableText default='phone' tag='li'/>
          <EditableText default='email' tag='li'/>
          <EditableText default='address' tag='li'/>
        </ul>
      </div>
    )
  }
}

export default PersonalDetails
