/* eslint-disable react/prop-types */
import React from 'react'

function Job (props) {
  const { data, handleDelete } = props

  return (
    <div className='job-container'>

      <div className='job-details-container-left'>
        <h5 className='employer'>{data.employer}</h5>
        <h6 className='location'>{data.location}</h6>
        <h6 className='from-till'>{data.from} - {data.till}</h6>
      </div>

      <div className='job-details-container-right'>
        <h5 className='role'>{data.role}</h5>
        <p className='summary'>{data.description}</p>
      </div>

      <div className='delete-container'>
        <button className='delete' onClick={() => handleDelete(data.id)}>del</button>
      </div>

    </div>
  )
}

export default Job
