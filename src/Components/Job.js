/* eslint-disable react/prop-types */
import React from 'react'

function JobForm (props) {
  const { handleChange, handleSubmit, handleDelete, index, type } = this.props
  return (
    <form>
      <input type='text' name='employer' placeholder='employer' onChange={handleChange}/>
      <input type='text' name='role' placeholder='role' onChange={handleChange}/>
      <input type='text' name='location' placeholder='location' onChange={handleChange}/>
      <input type='text' name='from' placeholder='from' onChange={handleChange}/>
      <input type='text' name='till' placeholder='till' onChange={handleChange}/>
      <input type='textarea' name='summary' placeholder='summary' onChange={handleChange}/>
      <input type='button' value='cancel' onClick={(e) => handleDelete(index)}/>
      <input type='submit' value='save' onClick={(e) => {handleSubmit}}/>
    </form>
  )
}

function JobElement (props) {
}

class Job extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      employer: '',
      role: '',
      location: '',
      from: '',
      till: '',
      summary: ''
    }

    this.collectValues = this.collectValues.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  collectValues () {
  }

  handleChange (e) {
    const { name, value } = e.taget
    this.setState({
      [name]: value
    })
  }

  render () {
    const { editing, handleSubmit, handleDelete, values, type, index } = this.props
    let element
    if (editing) {
      element = <JobForm handleChange={this.handleChange} handleSubmit={handleSubmit} handleDelete={handleDelete} index={index} type={type} />
    } else {
      element = <JobElement handleDelete={handleDelete} index={index} values={values} />
    }

    return (
      { element }
    )
  }
}

export default Job
