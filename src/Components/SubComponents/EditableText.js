import React from 'react'

class EditableText extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      default: this.props.default,
      editing: false,
      tag: this.props.tag,
      text: this.props.default
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  toggleEdit () {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleFormChange (e) {
    const { value } = e.target
    this.setState({
      text: value
    })
  }

  handleEnter (e) {
    if (e.keyCode === 13) {
      this.toggleEdit()
    }
  }

  render () {
    return (
      this.state.editing
        ? <input
        type='text'
        value={this.state.text}
        className={`form-${this.state.tag}`}
        autoFocus='true'
        onBlur={this.toggleEdit}
        onChange={this.handleFormChange}
        onKeyDown={this.handleEnter}
        />
        : <this.state.tag onClick={this.toggleEdit}>{ this.state.text }</this.state.tag>
    )
  }
}

export default EditableText
