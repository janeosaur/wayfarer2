import React, { Component } from 'react'
import $ from 'jquery-ajax'
import {Row} from 'react-bootstrap'
import UserPostList from './UserPostList'

class UserPostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: `https://wayfarer2-api.herokuapp.com/api/profile/comments/${window.Myvars.uid}`
    })
    .then(res => {
      this.setState({data: res})
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer )
  }

  render() {
    return (
      <div>
        <Row className="post-box">
          <h3 className="">Your most recent posts...</h3>
          <UserPostList
            data={this.state.data}/>
        </Row>
      </div>
    )
  }
}

export default UserPostBox;
