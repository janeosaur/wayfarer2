import React, { Component } from 'react'
import {Grid} from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer id="footer">
          <p>© Wayfarer by J-SKM 2017</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;
