import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid:'',
      category:'',
      content: ''
    }
    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }

  handleInputChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      category:'',
      content:''
    });
  }

  render() {
    return(

      <div className='postContainer'>
      <div className='postTxt'>
      <h1>POST</h1>
      </div>
      <div className='postFormCont'>
      <form className='postForm' onSubmit={this.handleSubmit}>
      <select name='category'>
      <option value='art'>Art</option>
      <option value='film'>Film</option>
      <option value='photo'> Photo </option>
      </select>
      <label>
      <input
      type='text'
      onChange={this.handleInputChange}
      value={this.state.content}
      name='content'
      />
      </label>
      </form>
      </div>

      </div>


      )
  }







}
