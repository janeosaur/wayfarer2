import React, { Component } from 'react'
import $ from 'jquery'
import {Grid, Row, Col} from 'react-bootstrap'
import CityImage from './CityImage'

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCityFromServer = this.loadCityFromServer.bind(this);
  }

  componentDidMount() {
    this.loadCityFromServer();
  }

  loadCityFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/cities/'
    })
    .then(res => {
      this.setState({data: res});
      // console.log(this.state.data)
    })
  }

  render() {
    let cityNodes = this.state.data.map ( city => {
      return (
        <CityImage
          key={city._id}
          image={city.image}
          name={city.name}
          country={city.country}
          desc={city.description}/>
      )
    });
    return (
      <div id="citiesPage" className="page">
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <h1 className="orange2">Our Favorite Cities</h1>
              {cityNodes}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Cities;
