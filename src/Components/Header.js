import React from 'react'

class Header extends React.Component {
  render () {
    const { title } = this.props
    return (
        <div className="header-container">
            <h1>{title}</h1>
        </div>
    )
  }
}

export default Header
