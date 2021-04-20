import React from 'react'
import PersonalDetails from './PersonalDetails'
import Summary from './Summary'

class Resume extends React.Component {
  render () {
    return (
      <div className='resume-container'>
        <PersonalDetails />
        <Summary />
      </div>
    )
  }
}

export default Resume
