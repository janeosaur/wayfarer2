import React, { Component } from 'react'
import base2 from '../public/images/base2.jpg'
import Cities from './Cities'

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home-container">
          <img className="main-image" src={base2} alt={"mainImage"}/>
          <Cities />
        </div>
      </div>
    );
  }
}
export default Home;
