import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import UserPostBox from './UserPostBox'

class Profile extends Component {
  //
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div id="profile-container">
        <Grid>
          <Row className="profile-contents">
            <Col sm={12} md={8} mdOffset={2}><br/>
              <Row>
                <Col sm={12} md={4}>
                  <img className="profile-image" src={window.Myvars.photoURL} alt="" height="200"/>
                  <p className="profile-name"> {window.Myvars.displayName} </p>
                </Col>
                <Col sm={12} md={7} mdOffset={1}>
                  <UserPostBox
                    pollInterval={2000}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Profile;
