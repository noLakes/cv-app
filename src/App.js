import React from 'react'
import Header from './Components/Header.js'
import PersonalDetails from './Components/PersonalDetails'
import Summary from './Components/Summary'
import AddableSection from './Components/AddableSection'

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Header title="cv buddy"/>
        <PersonalDetails />
        <Summary />
        <AddableSection title='Experience' itemType='Job'/>
      </div>
    )
  }
}

export default App
