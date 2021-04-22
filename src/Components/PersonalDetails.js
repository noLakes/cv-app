import React from 'react'
import EditableText from './SubComponents/EditableText'

class PersonalDetails extends React.Component {
  render () {
    return (
      <div className='personal-details-container  cv-section'>
        <EditableText default='First Name' tag='h1' />
        <EditableText default='Last Name' tag='h1' />
        <EditableText default='title/occupation' tag='h3'/>
        <ul className='contact-details'>
          <EditableText default='address 1' tag='li'/>
          <EditableText default='city/state' tag='li'/>
          <EditableText default='country' tag='li'/>
          <EditableText default='post code' tag='li'/>
          <EditableText default='phone' tag='li'/>
          <EditableText default='email' tag='li'/>
        </ul>
      </div>
    )
  }
}

export default PersonalDetails
