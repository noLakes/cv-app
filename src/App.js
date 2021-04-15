import React from 'react'
import Header from './Components/Header.js'
import PersonalDetails from './Components/PersonalDetails'
import Summary from './Components/Summary'

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Header title="cv buddy"/>
        <PersonalDetails />
        <Summary />
      </div>
    )
  }
}

export default App
