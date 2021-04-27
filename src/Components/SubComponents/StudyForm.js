/* eslint-disable react/prop-types */
import React from 'react'

function StudyForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form className='section-form' onSubmit={handleSubmit}>

        <div className='form-control w-50'>
          <label>School</label>
          <input type='text' name='school' placeholder='school/institute' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>Degree</label>
          <input type='text' name='qualification' placeholder='degree or field of study' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>From</label>
          <input type='text' name='from' placeholder='MM/YYYY' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>Till</label>
          <input type='text' name='till' placeholder='MM/YYYY' onChange={handleChange}/>
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

export default StudyForm
