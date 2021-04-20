import React from 'react'
import Header from './Components/Header'
import Resume from './Components/Resume'

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Header title="cv buddy"/>
        <Resume />
      </div>
    )
  }
}

export default App
