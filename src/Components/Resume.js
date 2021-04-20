import React from 'react'
import PersonalDetails from './PersonalDetails'
import Summary from './Summary'
import Experience from './Experience'

class Resume extends React.Component {
  render () {
    return (
      <div className='resume-container'>
        <PersonalDetails />
        <Summary />
        <Experience />
      </div>
    )
  }
}

export default Resume
