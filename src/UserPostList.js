import React, { Component } from 'react'
import $ from 'jquery-ajax'
import {Row, Col} from 'react-bootstrap'
import UserPosts from './UserPosts'

class UserPostList extends Component {
  render() {
    let postNodes = this.props.data.map( post => {
     return (
       <UserPosts
          key={post._id}
          title={post.title}
          city={post.city}
          name={ post.name }
          text={post.text}
          uniqueID={post._id}
          date={post.date}
          onPostDelete={ this.props.onPostDelete }
          onPostUpdate={ this.props.onPostUpdate } />
        )
      })
      return (
        <div className="user-post-list">
          <h3 className="user-post-header"> My most recent posts...</h3>
          {postNodes}
        </div>
      )
  }
}

export default UserPostList;
