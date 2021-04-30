/* eslint-disable react/prop-types */
import React from 'react'

function SkillItem (props) {
  const { data, handleDelete } = props

  return (
    <div className='skill-container'>
      <h4 className='skill'>{data.skill}</h4>
      <button className='delete' onClick={() => handleDelete(data.id)}>X</button>
    </div>
  )
}

export default SkillItem
