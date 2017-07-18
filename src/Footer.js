import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="pull-left">
          <p></p>
        </div>
        <div className="pull-right">
          <p>A GA project refactored by <a className="orange2" href="http://janeosaur.me"> JW</a>, 2017</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
