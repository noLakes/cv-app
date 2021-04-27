/* eslint-disable react/prop-types */
import React from 'react'

function SkillForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form className='section-form' onSubmit={handleSubmit}>

        <div className='form-control w-50'>
          <label>Skill</label>
          <input type='text' name='skill' placeholder='Photoshop, HTML, etc..' onChange={handleChange}/>
        </div>

        <div className='form-control flex-row'>
          <input type='submit' className='save' value='save'/>
          <input type='button' className='cancel' value='cancel' onClick={cancelForm}/>
        </div>

      </form>
    )
  }
  return null
}

export default SkillForm
