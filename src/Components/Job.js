/* eslint-disable react/prop-types */
import React from 'react'

function JobForm (props) {
  const { handleChange, handleSubmit, handleDelete, index, collectValues } = props
  return (
    <form className='job-form'>
      <input type='text' name='employer' placeholder='employer' onChange={handleChange}/>
      <input type='text' name='role' placeholder='role' onChange={handleChange}/>
      <input type='text' name='location' placeholder='location' onChange={handleChange}/>
      <input type='text' name='from' placeholder='from' onChange={handleChange}/>
      <input type='text' name='till' placeholder='till' onChange={handleChange}/>
      <input type='textarea' name='summary' placeholder='summary' onChange={handleChange}/>
      <input type='button' value='cancel' onClick={(e) => handleDelete(index)}/>
      <input type='submit' value='save' data-index={index} onClick={(e) => { handleSubmit(e, collectValues()) }}/>
    </form>
  )
}

function JobElement (props) {
  const { values, handleDelete, index } = props
  return (
  <div className='job-element'>
    <div className='left-container'>
      <h2 className='employer'>{values.employer}</h2>
      <h3 className='location'>{values.location}</h3>
      <h3 className='dates'>{`${values.from} - ${values.till}`}</h3>
    </div>
    <div className='right-container'>
    <h2 className='role'>{values.role}</h2>
    <p className='summary'>{values.summary}</p>
    </div>
    <button onClick={(e) => handleDelete(index)}></button>
  </div>
  )
}

class Job extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: true,
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
    this.setState({
      editing: false
    })
    return (
      {
        type: 'Job',
        editing: false,
        values: {
          employer: this.state.employer,
          role: this.state.role,
          location: this.state.location,
          from: this.state.from,
          till: this.state.till,
          summary: this.state.summary
        }
      }
    )
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    const { handleSubmit, handleDelete, values, index } = this.props
    let element
    if (this.state.editing) {
      element = <JobForm handleChange={this.handleChange} collectValues={this.collectValues} handleSubmit={handleSubmit} handleDelete={handleDelete} index={index} />
    } else {
      element = <JobElement handleDelete={handleDelete} index={index} values={values} />
    }

    return (
      element
    )
  }
}

export default Job
