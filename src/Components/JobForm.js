/* eslint-disable react/prop-types */
import React from 'react'

function JobForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>

        <div className='form-control'>
          <label>
            Employer
            <input type='text' name='employer' placeholder='employer' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control w-50'>
          <label>
            Role
            <input type='text' name='role' placeholder='role' onChange={handleChange}/>
          </label>
        </div>

        <div className='form-control w-50'>
          <label>
            Location
            <input type='text' name='location' placeholder='city/country' onChange={handleChange}/>
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
          <label>
            Description
            <input type='textarea' name='description' placeholder='some details about the role...' onChange={handleChange}/>
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

export default JobForm
