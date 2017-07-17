import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      date: '',
      showForm: false,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = window.Myvars.uid; // grabs logged in user's uid
    let name = window.Myvars.displayName; // grabs logged in user's display name
    let image = window.Myvars.image; // grabs logged in user's image
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    let date = Date.now();
    if (!window.Myvars.uid) {
      alert('You must be logged in to post');
      return;
    } else if (!text || !title) {
      alert('Please enter both fields');
      return;
    }
    this.props.onPostSubmit(
      { user: user, name: name, image: image, title: title, text: text, date:date, city: this.props.cityName });
    this.setState({title: '', text: ''});
    this.setState({ showForm: false})
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  closeForm(){
    this.setState({ showForm: false });
  }

  render() {
    return (
      <div className="post-form">
        <button type="button" className="myButton" onClick={() => this.setState({ showForm: true})}> Add A Post </button>
        { (this.state.showForm)
          ? (<form className="form" onSubmit={ this.handleSubmit }>
              <textarea
                type='text'
                placeholder='Title'
                value={ this.state.name }
                onChange={ this.handleTitleChange } />
              <textarea
                type='text'
                rows='5'
                className="form-control"
                placeholder='Text'
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                className="myButton"
                type='submit'
                value='Submit Post'
                />
              <a className="myButton" onClick={this.closeForm}> Cancel </a>
            </form>)
          : null}
      </div>
    )
  }
}

export default PostForm;
