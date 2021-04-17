/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Job from './Job'

function AddItemButton (props) {
  if (props.editing) {
    return null
  }

  return (
    <button onClick={props.addItem}>Add</button>
  )
}

class AddableSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.saveItem = this.saveItem.bind(this)
  }

  toggleEdit () {
    this.setState({
      editing: !this.state.editing
    })
  }

  addItem (type) {
    this.setState({
      items: [
        ...this.state.items,
        { type: type, editing: true, values: {} }
      ]
    })
    this.toggleEdit()
  }

  handleSubmit (e, itemToSave) {
    e.preventDefault()
  }

  saveItem (item, index) {
  }

  handleDelete (itemIndex) {

  }

  render () {
    const { itemType, title } = this.props
    const { editing } = this.state

    const items = this.state.items

    const listItems = items.map((i, index) =>
      <li key={index}>
        <i.type
        editing={i.editing}
        values={i.values}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        index={index}
        />
      </li>
    )

    return (
      <div className={`${title}-container`}>
        <h2>{title}</h2>
        <ul className={`${itemType}-container`}>
          {listItems}
        </ul>
        <AddItemButton editing={editing} addItem={(e) => this.addItem(itemType)} />
      </div>
    )
  }
}

export default AddableSection
