import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link } from 'react-router'
import base2 from '../public/images/base2.jpg'
import locateImage from '../public/images/locate.svg'
import reviewImage from '../public/images/review.svg'
import blogImage from '../public/images/blog.svg'

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home-container">
          <img className="main-image" src={base2} alt={"mainImage"}/>
          <button className="explore"><Link to={'/cities'}>Explore</Link> </button>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={2} mdOffset={3}><br/><h3>Locate Fav City</h3>
              <img className="locateImage" src={locateImage} alt={"locateImage"} height="60" width="60"/>
              <p>Find your favorite city in our crowdsource.</p>
            </Col>
            <Col sm={12} md={2}><br/><h3>Spot the Reviews</h3>
              <img className="reviewImage" src={reviewImage} alt={"reviewImage"} height="60" width="60"/>
              <p>Remember a time during the last vacation that was memorable? Post it here!</p>
            </Col>
            <Col sm={12} md={2}><br/><h3>Share Your Favs!</h3>
              <img className="blogImage" src={blogImage} alt={"blogImage"} height="60" width="60"/>
              <p>Blog about your favorite places!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Home;
