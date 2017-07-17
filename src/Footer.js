import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col md={5}>
              <h4>About Us:</h4>
              <p>Do you love to travel? We do too! Help other travellers by sharing your reviews and tips on your favorite destinations.</p>
            </Col>
          </Row>
          <div className="pull-right">
            <p>A GA project refactored by <a href="http://janeosaur.me"> JW, 2017</a></p>
          </div>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
