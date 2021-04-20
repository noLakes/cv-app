/* eslint-disable react/prop-types */
import React from 'react'

class Job extends React.Component {
  render () {
    const { data, handleDelete } = this.props
    return (
      <div className='job-container'>
        <p>{data.employer}{data.role}</p>
        <button onClick={() => handleDelete(data.id)}>del</button>
      </div>
    )
  }
}

export default Job
