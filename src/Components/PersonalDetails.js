import React from 'react'

class PersonalDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fName: 'first name',
      fNameEdit: this.state.fName,
      lName: 'last name',
      lNameEdit: this.state.lName,
      email: 'example@email.com',
      emailEdit: this.state.email,
      phone: '6471234567',
      phoneEdit: this.state.phone,
      address: 'address',
      addressEdit: this.state.address,
      city: 'city/town',
      cityEdit: this.state.city,
      country: 'country',
      countryEdit: this.state.country,
      postCode: 'post code',
      postCodeEdit: this.state.postCode
    }

    // bindings go here
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <div className='personal-details-container'>
        <form className='personal-details'>
        </form>
      </div>
    )
  }
}

export default PersonalDetails
