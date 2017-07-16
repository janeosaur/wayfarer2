import React, { Component } from 'react'
import $ from 'jquery'
import {Grid, Row, Col} from 'react-bootstrap'
// import {Link} from 'react-router'
// import London from '../public/images/london.jpg'
// import Gibraltar from '../public/images/gib.jpg'
// import SF from '../public/images/sf.jpg'
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
      <div id="citiesPage" class="page">
        <Grid>
          <Row>
            <Col sm={10} smOffset={1}>
                {cityNodes}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Cities;

// return (
//   <div id="cities-container">
//     <p id="cities-adventure">Find your next adventure</p>
//     <Grid>
//       <Row>
//         <Col sm={12} md={6}>
//           <div className="cities-hover">
//             <Link to={'/cities/San%20Francisco'}><img className="cities-panel" src={SF} alt={"citiesImage"} height="100%" width="100%"/></Link>
//           </div>
//         </Col>
//         <Col sm={12} md={6}>
//           <div className="cities-hover">
//             <Link to={'/cities/London'}><img className="cities-panel" src={London} alt={"citiesImage"} height="100%" width="100%"/></Link>
//           </div>
//         </Col>
//       </Row>
//       <br/><br/><br/>
//       <Col sm={12} md={6} mdOffset={3}>
//         <div className="cities-hover">
//           <Link to={'/cities/Gibraltar'}><img className="cities-panel" src={Gibraltar} alt={"citiesImage"} height="100%" width="100%"/></Link>
//         </div>
//       </Col>
//
//     </Grid>
//   </div>
// )
//
//
// return (
//   <div>
//     <div className="cities-hover">
//       <img src={citiesImage} alt={"citiesImage"} height="100%" width="100%"/>
//         <span className="cities-text" >
//         <ul className="dropdown-content2">
//           <li className="findCity"> Find a City </li>
//           <li className="cityName"> <Link to={`/cities/${this.props.uniqueID}`}>San Francisco</Link></li>
//           <li className="cityName"> <a href="/cities/london">London</a></li>
//           <li className="cityName"> <a href="/cities/gibraltar">Gibraltar</a></li>
//         </ul>
//       </span>
//     </div>
//   </div>
// );
// }
