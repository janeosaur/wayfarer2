import React, { Component } from 'react'
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
        <div className="">
          {postNodes}
        </div>
      )
  }
}

export default UserPostList;
