import React, { Component } from 'react'
import PostBox from './PostBox'
import $ from 'jquery-ajax'

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCityFromServer = this.loadCityFromServer.bind(this);
  }
  loadCityFromServer() {
    $.ajax ({
      method: 'GET',
      url: 'https://wayfarer2-api.herokuapp.com/api/cities/' + this.props.params.name
    })
    .then(res => {
      this.setState({data: res});
      // console.log('data is ', res)
    })
  }

  componentDidMount() {
    this.loadCityFromServer();
  }

  render() {
    return (
      <div id="cityPage" className="page">
        <div className="banner">
          <img src={this.state.data.image} alt="city"/>
          <h1>{this.state.data.name}</h1>
      </div>
      <PostBox
        url={`https://wayfarer2-api.herokuapp.com/api/cities/${this.props.params.name}`}
        pollInterval={2000}
        cityName={this.state.data.name}
        data={this.state.data} />
      </div>
    );
  }
}

export default City;
