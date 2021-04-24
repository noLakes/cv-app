/* eslint-disable react/prop-types */
import React from 'react'

function AddItemButton (props) {
  if (!props.editing) {
    return (
      <button onClick={props.toggleEdit}>+Add</button>
    )
  }
  return null
}

export default AddItemButton
