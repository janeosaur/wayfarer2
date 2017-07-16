import React, { Component } from 'react'
import {Link} from 'react-router'

class CityImage extends Component {

  render() {
    return (
      <div className="cityImage">
        <Link to={`/cities/${this.props.name}`}>
          <h1>{this.props.name}</h1> 
          <img className="cities-panel" src={this.props.image} alt={"citiesImage"} height="100%" width="100%"/>
        </Link>
      </div>
    )
  }
}

export default CityImage;
