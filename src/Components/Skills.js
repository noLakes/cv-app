import React from 'react'
import uniqid from 'uniqid'
import SkillItem from './SubComponents/SkillItem'
import SkillForm from './SubComponents/SkillForm'
import AddItemButton from './SubComponents/AddItemButton'

class Skills extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      skills: [],
      skillObj: {
        id: uniqid(),
        skill: ''
      }
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  resetSkillObj = () => {
    this.setState({
      skillObj: {
        id: uniqid(),
        skill: ''
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      skillObj: { ...this.state.skillObj, [name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      skills: [...this.state.skills, this.state.skillObj]
    })
    this.resetSkillObj()
    this.toggleEdit()
  }

  cancelForm = () => {
    this.toggleEdit()
    this.resetSkillObj()
  }

  handleDelete = (id) => {
    this.setState({
      skills: this.state.skills.filter(skill => skill.id !== id)
    })
  }

  render () {
    const skillList = this.state.skills.map(skill => {
      return (
        <li key={skill.id}>
          <SkillItem data={skill} handleDelete={this.handleDelete}/>
        </li>
      )
    })

    return (
      <div className='skills-container cv-section'>
        <h3>Skills</h3>
        <ul className='skill-list'>
          {skillList}
        </ul>
        <SkillForm editing={this.state.editing} handleChange={this.handleChange} cancelForm={this.cancelForm} handleSubmit={this.handleSubmit} />
        <AddItemButton editing={this.state.editing} toggleEdit={this.toggleEdit}/>
      </div>
    )
  }
}

export default Skills
