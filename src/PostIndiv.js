import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import ReactConfirmAlert from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class PostIndiv extends Component {
  constructor(props) {
    super(props);
    this.state={
      text: this.props.text,
      title: this.props.title,
      toBeUpdated: false,
      showDialog: false // for delete modal
    }
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  };

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  updatePost(e) {
    e.preventDefault();
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handlePostUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let title = (this.state.title) ? this.state.title : null;
    let text = (this.state.text) ? this.state.text : null;
    let date = Date.now();
    let post = { title:title, text: text, date:date};
    this.props.onPostUpdate(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      title: '',
      text: '',
      date:''
    })
  }

  deletePost(e) {
    e.preventDefault();
    this.setState({ showDialog: !this.state.showDialog})
  }

  handleDeletePost() {
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    this.setState({ showDialog: !this.state.showDialog})
    console.log('post was deleted through modal');
  }

  timePassed(post_time) {  // this function shows how long ago a post was made
    let now = new Date().getTime() ; //  time right now
    // post_time = Date.parse(post_time);  // converts text of date to number
    let difference = Math.floor((now - post_time) /1000) ;
    if ( Math.floor((difference) /(60*60*24*365) ) === 1 ) {
      return Math.floor((difference) /(60*60*24*365) ) + " year";
    }
    else if ( Math.floor((difference) /(60*60*24*365) ) > 1 ) {
      return Math.floor((difference) /(60*60*24*365) ) + " years";
    }
    else if ( Math.floor((difference) /(60*60*24*30) ) === 1 ) {
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
    else {
      return "Just seconds";
    }
  }

  sessionButton() {
    // see if signed in user is same as post originator
    if (this.props.user === window.Myvars.uid) {
      return (
        <div className="buttons">
          <a className="myButton" id="close" onClick={ this.updatePost }>
            <span className="glyphicon glyphicon-pencil"></span>
          </a>
          <a className="myButton" id="close" onClick={ this.deletePost }>
            <span className="glyphicon glyphicon-trash"></span>
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="postIndiv">
        <Row >
          <Col className="" xs={12} >
            <p className="title">{this.props.title}</p>
            <p className="userpost">{this.props.text}</p>
          </Col>
          <Col className="right" xs={12}>
            <span id="name">{this.props.name}</span>
            <img id="" src={this.props.image} alt=""/>
            <p className="dateposted">{this.timePassed(this.props.date)} ago</p>
            {this.sessionButton()}
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            { (this.state.toBeUpdated) ?
              (<form onSubmit={ this.handlePostUpdate }>
                    <label for="title">Title</label>
                    <textarea
                      id="title"
                      className="form-control input-lg"
                      rows='1'
                      type='text'
                      placeholder={ this.state.title }
                      value={ this.state.title }
                      onChange={ this.handleTitleChange }></textarea>
                    <label for="textarea1">Text</label>
                    <textarea
                      id="textarea1"
                      className="form-control input-lg"
                      rows='5'
                      type='text'
                      placeholder={ this.props.text }
                      value={ this.state.text }
                      onChange={ this.handleTextChange }></textarea>
                    <input
                      className="myButton"
                      id="open"
                      type='submit'
                      value='Update'></input>
                    <a onClick={() => this.setState({toBeUpdated: false})} className="myButton" id="close">Cancel</a>
                </form>
            ) : null }
          </Col>
        </Row>

        <div> {
          (this.state.showDialog) &&
          <ReactConfirmAlert
            title="Confirm Delete"
            message="Are you sure you want to delete this?"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            onConfirm={this.handleDeletePost}
            onCancel={() => this.setState({ showDialog: !this.state.showDialog})}
          /> }
        </div>
      </div>
    )
  }
}

export default PostIndiv;

// className="form-control input-lg" allows form to prefill the current title/text
