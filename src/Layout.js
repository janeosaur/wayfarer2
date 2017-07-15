import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { firebase, auth } from './utils/firebase'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }

  // communicates with firebase, before stuff mounts on page
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        console.log('Logged out');
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // firebase popup, also updates state
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();
    auth.signOut(); // also updates state
  }

  render() { console.log('LAYOUT props.chilren', this.props.children)
   let children = React.Children.map(this.props.children,
     (child) => {
       console.log('adding newProp to child', child.props)
       child = React.cloneElement(child, { currentUser: this.state.currentUser })
       console.log('now child has props', child.props)
       return child
     }
   );
   console.log('children in LAYOUT', children)
   return (
     <div>
       <Navbar
         currentUser={ this.state.currentUser }
         loginButtonClicked={ this.loginButtonClicked }
         logoutButtonClicked={ this.logoutButtonClicked }/>
       {children}
       <Footer />
     </div>
   );
  }
 }

export default Layout;

//{currentUser: this.state.currentUser}


//   {this.props.children}
// https://jaketrent.com/post/send-props-to-children-react/
// http://stackoverflow.com/questions/38403321/pass-this-state-with-this-props-children
//https://github.com/ReactTraining/react-router/issues/1531
