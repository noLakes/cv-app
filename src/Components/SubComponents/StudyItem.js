/* eslint-disable react/prop-types */
import React from 'react'

function StudyItem (props) {
  const { data, handleDelete } = props

  return (
    <div className='item-container study-container'>

      <div className='study-details-left'>
        <h4 className='school'>{data.school}</h4>
        <h5 className='from-till'>{data.from} - {data.till}</h5>
      </div>

      <div className='study-details-right'>
        <h4 className='qualification'>{data.qualification}</h4>
      </div>

      <div className='delete-container'>
        <button className='delete' onClick={() => handleDelete(data.id)}>X</button>
      </div>

    </div>
  )
}

export default StudyItem
