/* eslint-disable react/prop-types */
import React from 'react'

function StudyItem (props) {
  const { data, handleDelete } = props

  return (
    <div className='study-container'>

      <div className='study-details-container'>
        <h5 className='school'>{data.school}</h5>
        <h6 className='from-till'>{data.from} - {data.till}</h6>
      </div>

      <div className='study-details-container-right'>
        <h5 className='qualification'>{data.qualification}</h5>
      </div>

      <div className='delete-container'>
        <button onClick={() => handleDelete(data.id)}>del</button>
      </div>

    </div>
  )
}

export default StudyItem
