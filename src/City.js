import React, { Component } from 'react'
import PostBox from './PostBox'
import $ from 'jquery-ajax'

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCityFromServer = this.loadCityFromServer.bind(this);
  }
  loadCityFromServer() {
    console.log(this.props)
    $.ajax ({
      method: 'GET',
      url: 'http://localhost:3001/api/cities/' + this.props.params.name // + api/cities req.params.id
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }

  componentDidMount() {
    this.loadCityFromServer();
  }


  render() {
    var cityName = this.state.data.name
    var cityImage = this.state.data.image
    return (
      <div>
        {this.state.data.name}
        <h2 id="cityname">{cityName}</h2>
        <img className="city" src={cityImage} alt="sf-city"/>
        <PostBox
          url={`http://localhost:3001/api/cities/${this.props.params.id}`}
          pollInterval={2000}
          cityName={cityName}
          data={this.state.data} />
      </div>
    );
  }
}

export default City;


//component will mount in/near ajax call for city
