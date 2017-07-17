import React, { Component } from 'react'
import base2 from '../public/images/base.jpg'
import Cities from './Cities'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className="main-image" src={base2} alt={"mainImage"}/>
        <Cities />
      </div>
    );
  }
}
export default Home;
