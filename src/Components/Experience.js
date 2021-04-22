import React from 'react'
import uniqid from 'uniqid'
import Job from './Job'
import JobForm from './JobForm'
import AddItemButton from './AddItemButton'

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

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      jobObj: { ...this.state.jobObj, [name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting...')
    this.setState({
      jobs: [...this.state.jobs, this.state.jobObj]
    })
    this.resetJobObj()
    this.toggleEdit()
  }

  cancelForm = () => {
    this.toggleEdit()
    this.resetJobObj()
  }

  handleDelete = (id) => {
    this.setState({
      jobs: this.state.jobs.filter(job => job.id !== id)
    })
  }

  render () {
    const jobList = this.state.jobs.map(job => {
      return (
        <li key={job.id}>
          <Job data={job} handleDelete={this.handleDelete}/>
        </li>
      )
    })

    return (
      <div className='experience-container'>
        <h3>Experience</h3>
        <ul className='job-list'>
          {jobList}
        </ul>
        <JobForm editing={this.state.editing} handleChange={this.handleChange} cancelForm={this.cancelForm} handleSubmit={this.handleSubmit} />
        <AddItemButton editing={this.state.editing} toggleEdit={this.toggleEdit}/>
      </div>
    )
  }
}

export default Experience
