/* eslint-disable react/prop-types */
import React from 'react'

function SkillItem (props) {
  const { data, handleDelete } = props

  return (
    <div className='skill-container'>
      <h5 className='skill'>{data.skill}</h5>
      <button onClick={() => handleDelete(data.id)}>X</button>
    </div>
  )
}

export default SkillItem
