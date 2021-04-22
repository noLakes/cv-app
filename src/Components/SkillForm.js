/* eslint-disable react/prop-types */
import React from 'react'

function SkillForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>

        <div className='form-control w-50'>
          <label>
            Skill
            <input type='text' name='skill' placeholder='Photoshop, HTML, etc..' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control'>
          <input type='button' value='cancel' onClick={cancelForm}/>
          <input type='submit' value='save'/>
        </div>

      </form>
    )
  }
  return null
}

export default SkillForm
