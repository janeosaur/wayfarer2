import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import UserPostBox from './UserPostBox'

class Profile extends Component {

  render() {
    return (
      <div className="container-fluid page" id="profile">
        <Grid>
          <Row className="profile-contents page">
            <Col xs={10} xsOffset={1}><br/>
              <Row>
                <Col xs={12} sm={4}>
                  <img className="profile-image" src={window.Myvars.photoURL} alt="" height="200"/>
                  <p className="profile-name"> Hi, {window.Myvars.displayName}!</p>
                </Col>
                <Col xs={12} sm={7} smOffset={1}>
                  <UserPostBox/>
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
