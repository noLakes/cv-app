import React from 'react'
import uniqid from 'uniqid'

function AddJobButton (props) {
  if (!props.editing) {
    return (
      <button onClick={props.toggleEdit}>+Job</button>
    )
  }

  return null
}

function Job (props) {
  const { data, handleDelete } = props
  return (
    <div className='job-container'>
      <p>{data.employer}{data.role}</p>
      <button onClick={() => handleDelete(data.id)}>del</button>
    </div>
  )
}

function JobForm (props) {
  const { editing, handleChange, handleSubmit } = props
  if (editing) {
    return (
      <h1>I am Job Form!</h1>
    )
  }

  return null
}

class Experience extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      jobs: [],
      jobObj: {
        id: uniqid(),
        employer: '',
        role: '',
        location: '',
        from: '',
        till: '',
        description: ''
      }
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      default: { ...this.state.default, [name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleDelete = (uid) => {
  }

  resetJobObj = () => {
    this.setState({
      jobObj: {
        id: uniqid(),
        employer: '',
        role: '',
        location: '',
        from: '',
        till: '',
        description: ''
      }
    })
  }

  render () {
    const jobList = this.state.jobs.map(job => {
      return <Job data={job} handleDelete={this.handleDelete}/>
    })
    return (
      <div className='experience-container'>
        {jobList}
        <AddJobButton editing={this.state.editing} toggleEdit={this.toggleEdit}/>
        <JobForm editing={this.state.editing} />
      </div>
    )
  }
}

export default Experience
