import React, { Component } from 'react'
import {Link} from 'react-router'
import {Row, Col} from 'react-bootstrap'
import ReactConfirmAlert from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
// import marked from 'marked' - do we need this? (MERN crud lab used this rawMarkup)

class PostIndiv extends Component {
  constructor(props) {
    super(props);
    this.state={
      // name: '', we are no longer allowing users to change name
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
    let date = Date.now(); // edit this into seconds, mins, hours, etc
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
      return "Just seconds";  //  Client wants this nomiclature for seconds
    }
  }


  render() {
    return (
      <div>
        <Row className="show-grid post">
          <Col className="userimage" sm={12} md={3}>
            <img id="userimage" src="http://rosupport.com/demo2/assets/images/gotm.jpg"/>

          </Col>
          <Col className="userinfo" sm={12} md={8}>
            <a href="
            cities/comment/">
              <h5 className="usertitle">Title: {this.props.title}</h5>
              <span id="username">{this.props.name}</span> says:
              <br/><div className="userpost truncate moreless" id="arsh"> <Link to={`/comments/${this.props.uniqueID}`}>{this.props.text} </Link></div>
            </a>
            <br/> <br/>
            <a className="myButton" id="close" onClick={ this.updatePost }> Edit </a> <span id="or"> </span>
            <a className="myButton" id="close" onClick={ this.deletePost }> Delete </a>
          </Col>
          <Col className="userinfo" sm={12} md={1}>
            <div className="dateposted">Posted: {this.timePassed(this.props.date)} ago</div>
          </Col>
        </Row>

          <Row className="show-grid-buttons">

              { (this.state.toBeUpdated)
                ? (<form onSubmit={ this.handlePostUpdate }>

                    <label className="col-md-2 col-sm-3 col-xs-4 control-label" for="title" >Title</label>
                    <textarea
                      id="title"
                      className="form-control input-lg"
                      rows='1'
                      type='text'
                      placeholder={ this.state.title }
                      value={ this.state.title }
                      onChange={ this.handleTitleChange }></textarea><span>
                    <label className="col-md-2 col-sm-3 col-xs-4 control-label" for="textarea1">Text</label>
                    <textarea
                      id="textarea1"
                      className="form-control input-lg"
                      rows='5'
                      type='text'
                      placeholder={ this.props.text }
                      value={ this.state.text }
                      onChange={ this.handleTextChange }></textarea> </span> <span>
                    <input
                      className="myButton"
                      id="open"
                      type='submit'
                      value='Update' /> </span>

                  </form>)
                : null}

          </Row>

        <hr/>
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

// on delete -> cancel & submit, error: index.js:44 Uncaught TypeError: Cannot read property 'parentNode' of null
// how to incorporate ${this.props.name} in the delete confirmation modal message?
