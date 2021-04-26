import React from 'react'
import uniqid from 'uniqid'
import AddItemButton from './SubComponents/AddItemButton'
import StudyItem from './SubComponents/StudyItem'
import StudyForm from './SubComponents/StudyForm'

class Education extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      studies: [],
      studyObj: {
        id: uniqid(),
        school: '',
        qualification: '',
        from: '',
        till: ''
      }
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  resetStudyObj = () => {
    this.setState({
      studyObj: {
        id: uniqid(),
        school: '',
        qualification: '',
        from: '',
        till: ''
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      studyObj: { ...this.state.studyObj, [name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      studies: [...this.state.studies, this.state.studyObj]
    })
    this.resetStudyObj()
    this.toggleEdit()
  }

  cancelForm = () => {
    this.toggleEdit()
    this.resetStudyObj()
  }

  handleDelete = (id) => {
    this.setState({
      studies: this.state.studies.filter(study => study.id !== id)
    })
  }

  render () {
    const studyList = this.state.studies.map(study => {
      return (
        <li key={study.id}>
          <StudyItem data={study} handleDelete={this.handleDelete}/>
        </li>
      )
    })

    return (
      <div className='education-container cv-section'>
        <h3>Education</h3>
        <ul className='study-list'>
          {studyList}
        </ul>
        <StudyForm editing={this.state.editing} handleChange={this.handleChange} cancelForm={this.cancelForm} handleSubmit={this.handleSubmit} />
        <AddItemButton editing={this.state.editing} toggleEdit={this.toggleEdit}/>
      </div>
    )
  }
}

export default Education
