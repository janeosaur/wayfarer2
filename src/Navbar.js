import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isOpen: false
      }
    }

 handleOpen = () => {
    this.setState({ isOpen: true })
  }

 handleClose = () => {
     this.setState({ isOpen: false })
  }

 sessionButton() {
    if (!this.props.currentUser ) {
      return (<li className="navtext"><a id="login" onClick={this.props.loginButtonClicked}> <span class="glyphicon glyphicon-log-in"></span>Log In</a></li>);
    } else {
      return (
        <li className="navtext">
          <div className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <img className="navbar-profile-pic" src={ this.props.currentUser.photoURL } alt="" height="43" /> { this.props.currentUser.displayName }
            <span className="caret"></span> </a>
            <ul className="dropdown-content">
              <li> <a href="/profile">View Profile</a></li>
              <li> <a id="logout" onClick={this.props.logoutButtonClicked}> <span class="glyphicon glyphicon-log-out"></span>Log Out</a></li>
            </ul>
          </div>
        </li>
      )
    }
  }

 render() {
    return (
      <ul className="navbar">
        <li id="nav-wayfarer"><a id="wayfarer" href="/"><strong>Wayfarer</strong></a></li>
        {this.sessionButton()}
        <div className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <li className="navtext"><a id="cities" href="/cities" title="Cities">Cities </a><span className="caret"></span> </li>
        </a>
        <ul className="dropdown-content">
          <li> <a href="/cities/San%20Francisco">San Francisco</a></li>
          <li> <a href="/cities/London">London</a></li>
          <li> <a href="/cities/Gibraltar">Gibraltar</a></li>
        </ul>
        </div>
      </ul>
    );
  }
}

export default Navbar;


// Next steps:
// 1. can we have <a> Cities </a> link to Cities page? and also
// on hover, have it display all the cities?
// 2. can we have mouse cursor appear when hovered on log in and log out?
