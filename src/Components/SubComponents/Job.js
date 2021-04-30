/* eslint-disable react/prop-types */
import React from 'react'

function Job (props) {
  const { data, handleDelete } = props

  return (
    <div className='item-container job-container'>

      <div className='job-details-left'>
        <h4 className='employer'>{data.employer}</h4>
        <h5 className='location'>{data.location}</h5>
        <h5 className='from-till'>{data.from} - {data.till}</h5>
      </div>

      <div className='job-details-right'>
        <h4 className='role'>{data.role}</h4>
        <p className='summary'>{data.description}</p>
      </div>

      <div className='delete-container'>
        <button className='delete' onClick={() => handleDelete(data.id)}>X</button>
      </div>

    </div>
  )
}

export default Job
