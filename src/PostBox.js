import React, { Component } from 'react'
import $ from 'jquery-ajax'
import {Grid, Row, Col} from 'react-bootstrap'
import PostList from './PostList'
import PostForm from './PostForm'

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }

  loadPostsFromServer() {
    $.ajax ({
      method: 'GET',
      url: this.props.url
    })
    .then(res => {
      this.setState({data: res.comments.reverse()})  //  reverse posts most recent on top
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  handlePostSubmit(post) {
    // let posts = this.state.data;
    console.log('incoming new post is', post, 'city is', post.city)
    $.ajax({
      method: 'POST',
      url: 'https://wayfarer2-api.herokuapp.com/api/comments',
      data: post
    })
    .then((res) => {
      console.log(res)
      // let newPosts = posts.concat(res)
      // this.setState({ data: newPosts });
    }, (err) => {
      console.error('post error', err);
    });
  }

  handlePostDelete(id) {
    $.ajax({
      method: 'delete',
      url: `https://wayfarer2-api.herokuapp.com/api/comments/${id}`
    })
    .then( (res) => {
      console.log('post deleted!')
    }, (err) => {
      console.log('delete error', err)
    });
  }

  handlePostUpdate(id, post) {
    $.ajax({
      method: 'put',
      url: `https://wayfarer2-api.herokuapp.com/api/comments/${id}`,
      data: post
    })
    .then( (res) => {
      console.log('post update success', res)
    }, (err) => {
      console.log('post update error', err)
    })
  }

  render() {
    return (
      <div id="postBox">
        <Grid>
          <Row className="post-box">
            <Col xs={10} lg={8} lgOffset={2} xsOffset={1} ><br/>
              <PostForm
                onPostSubmit={this.handlePostSubmit}
                cityName={this.props.cityName} />
              <PostList
                data={this.state.data}
                onPostDelete={this.handlePostDelete}
                onPostUpdate={this.handlePostUpdate}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PostBox;
