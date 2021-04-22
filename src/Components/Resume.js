import React from 'react'
import PersonalDetails from './PersonalDetails'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

class Resume extends React.Component {
  render () {
    return (
      <div className='resume-container'>
        <PersonalDetails />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </div>
    )
  }
}

export default Resume
