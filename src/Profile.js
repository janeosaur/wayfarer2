import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import UserPostBox from './UserPostBox'
import sejin from '../public/images/sejin(3).jpg'

class Profile extends Component {

  render() {
    return (
      <div id="profile-container">
        <Grid>
          <Row className="profile-contents">
            <Col sm={12} md={8} mdOffset={2}><br/>
              <Row>
                <Col sm={12} md={4}>
                  <img className="profile-image" src={sejin} alt="" height="200"/>
                  <p className="profile-name"> Sejin P. </p>
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


//
// class Profile extends Component {
//   render() {
//     console.log('profile stuff', this.props.currentUser);
//     // console.log('profile name is', this.props.currentUser.displayName)
//     var user = this.props.currentUser;
//     // var userimage = this.props.currentUser.photoURL;
//     return (
//       <div>
//         <Grid>
//           <Row className="profile-contents">
//             <Col sm={12} md={8} mdOffset={2}><br/>
//               <Row>
//                 <Col sm={12} md={4}>
//                   <img className="profile-image" src="" alt="" height="200"/>
//                   <p className="profile-name"> -{} </p>
//                 </Col>
//                 <Col sm={12} md={7} mdOffset={1}>
//                   <UserPostBox
//                     pollInterval={2000}/>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     )
//   }
// }
//
// export default Profile;
