/* eslint-disable react/prop-types */
import React from 'react'

function JobForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form className='section-form' onSubmit={handleSubmit}>

        <div className='form-control'>
          <label>Employer</label>
          <input type='text' name='employer' placeholder='employer' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>Role</label>
          <input type='text' name='role' placeholder='role' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>Location</label>
          <input type='text' name='location' placeholder='city/country' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>From</label>
          <input type='text' name='from' placeholder='MM/YYYY' onChange={handleChange}/>
        </div>

        <div className='form-control w-50'>
          <label>Till</label>
          <input type='text' name='till' placeholder='MM/YYYY' onChange={handleChange}/>
        </div>

        <div className='form-control'>
          <label>Description</label>
          <input type='textarea' name='description' placeholder='some details about the role...' onChange={handleChange}/>
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

export default JobForm
