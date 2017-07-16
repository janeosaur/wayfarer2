import React, { Component } from 'react'
import PostIndiv from './PostIndiv'

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map( post => {
      return (
       <PostIndiv
          key={post._id}
          title={post.title}
          name={post.name}
          user={post.user}
          text={post.text}
          uniqueID={post._id}
          date={post.date}
          onPostDelete={ this.props.onPostDelete }
          onPostUpdate={ this.props.onPostUpdate } />
      )
    })
    return (
      <div className="post-list">
        {postNodes}
      </div>
    )
  }
}

export default PostList;
