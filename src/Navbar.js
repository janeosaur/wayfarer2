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
      return (<li className="dropdown dropbtn pull-right name"><a id="login" onClick={this.props.loginButtonClicked}> Log In</a></li>);
    } else {
      window.Myvars = {
        photoURL: this.props.currentUser.photoURL,
        displayName: this.props.currentUser.displayName,
        uid: this.props.currentUser.uid,
        image: this.props.currentUser.photoURL
      }
      return (
        <div className="dropdown pull-right">
          <div className="dropbtn name">
            {this.props.currentUser.displayName }<span className="caret"></span>
          </div>
          <ul className="dropdown-content">
            <li><a href="/profile">View Profile</a></li>
            <li><a id="logout" onClick={this.props.logoutButtonClicked}>Log Out</a></li>
          </ul>
        </div>
      )
    }
  }

 render() {
    return (
      <nav>
        <ul>
          <h1><a id="wayfarer" href="/">WAYFARER</a></h1>
          {this.sessionButton()}
          <li className="dropdown pull-right">
            <div className="dropbtn cities">Cities <span className="caret"></span></div>
            <ul className="dropdown-content">
              <a href="/cities/San%20Francisco">San Francisco</a>
              <a href="/cities/London">London</a>
              <a href="/cities/Gibraltar">Gibraltar</a>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
