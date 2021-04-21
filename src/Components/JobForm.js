/* eslint-disable react/prop-types */
import React from 'react'

function JobForm (props) {
  const { editing, handleChange, handleSubmit, cancelForm } = props

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>
        <input type='text' name='employer' placeholder='employer' onChange={handleChange}/>
        <input type='text' name='role' placeholder='role' onChange={handleChange}/>
        <input type='button' value='cancel' onClick={cancelForm}/>
        <input type='submit' value='save'/>
      </form>
    )
  }

  return null
}

export default JobForm
