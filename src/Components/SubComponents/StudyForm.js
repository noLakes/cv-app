/* eslint-disable react/prop-types */
import React from 'react'

function StudyForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>

        <div className='form-control w-50'>
          <label>
            School
            <input type='text' name='school' placeholder='school/institute' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control w-50'>
          <label>
            Degree
            <input type='text' name='qualification' placeholder='degree or field of study' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control w-50'>
          <label>
            From
            <input type='text' name='from' placeholder='MM/YYYY' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control w-50'>
          <label>
            Till
            <input type='text' name='till' placeholder='MM/YYYY' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control'>
          <input type='submit' value='save'/>
          <input type='button' value='cancel' onClick={cancelForm}/>
        </div>

      </form>
    )
  }
  return null
}

export default StudyForm
