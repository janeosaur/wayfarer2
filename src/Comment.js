import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import $ from 'jquery'

// this is when Route path='/cities/comment/:id' (index.js)
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCommentFromServer = this.loadCommentFromServer.bind(this);
  }
  loadCommentFromServer() {
    var id =  this.props.params.id
    $.ajax ({
      method: 'GET',
      url: `http://localhost:3001/api/comments/${id}`
    })
    .then(res => {
      this.setState({data: res});
      console.log('data is ', this.state.data)
    })
  }
  componentDidMount() {
    this.loadCommentFromServer();
  }

  timePassed(post_time) {  // this function shows how long ago a post was made
    let now = new Date().getTime() ; //  time right now
    // post_time = Date.parse(post_time);  // converts text of date to number
    let difference = Math.floor((now - post_time) /1000) ;
    if ( Math.floor((difference) /(60*60*24*30) ) === 1 ) {
      return Math.floor((difference) /(60*60*24*30) ) + " month";
    }
    else if ( Math.floor((difference) /(60*60*24*30) ) > 0 ) {
      return Math.floor((difference) /(60*60*24*30) ) + " months";
    }
    else if ( Math.floor((difference) /(60*60*24*7) ) === 1 ) {
      return Math.floor((difference) /(60*60*24*7) ) + " week";
    }
    else if ( Math.floor((difference) /(60*60*24*7) ) > 0 ) {
      return Math.floor((difference) /(60*60*24*7) ) + " weeks";
    }
    else if ( Math.floor((difference) /(60*60*24) ) === 1 ) {
      return Math.floor((difference) /(60*60*24) ) + " day";
    }
    else if ( Math.floor((difference) /(60*60*24) ) > 0 ) {
      return Math.floor((difference) /(60*60*24) ) + " days";
    }
    else if ( Math.floor((difference) /(60*60) ) === 1 ) {
      return Math.floor((difference) /(60*60)  ) + " hour";
    }
    else if ( Math.floor((difference) /(60*60) ) > 0 ) {
      return Math.floor((difference) /(60*60)  ) + " hours";
    }
    else if ( Math.floor((difference) /60 ) === 1 ) {
      return Math.floor((difference) /60 ) + " minute";
    }
    else if ( Math.floor((difference) /60 ) > 0 ) {
      return Math.floor((difference) /60 ) + " minutes";
    }
    else if ( Math.floor((difference)) === 1 ) {
      return Math.floor((difference) /60 ) + " second";
    }
    else {
      return difference + " seconds";
    }
  }

  render() {
    return (
      <Grid>
        <Row className="one-comment">
          <Col sm={12} md={8} mdOffset={2}>
            <img id="share" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-share-128.png"/>
            <div id="comment-title">{this.state.data.title}</div>
            <hr/>
            <div className="comment-box">
              <Row>
                <Col sm={12} md={3}>
                  <div className="comment-name">{this.state.data.name} said: </div>
                </Col>
                <Col sm={12} md={4} mdOffset={5}>
                  <div className="comment-time">posted: {this.timePassed(this.state.data.date)} ago </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={8} mdOffset={2}>
                  <div className="comment-text">{this.state.data.text}</div>
                </Col>
              </Row>
              <Row>
                <br/><div className="comment-city">{this.state.data.city}</div>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Comments;
