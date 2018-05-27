import React, { Component } from 'react';

class Register extends Component {
 constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: '',
    email: ''
  }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

  handleInputChange(e) {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  })
 }

 handleSubmit(e) {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    username: '',
    password: '',
    email: ''
  });
 }

 render(){
  return (
    <div>
    <h1> Register </h1>
    <form onSubmit={this.handleSubmit}>

    <label>
    <h3> Username </h3>
    <input
    type='text'
    name='username'
    value={this.state.username}
    onChange={this.handleInputChange}
    />
    </label>

    <label>
    <h3> Password </h3>
    <input
    type='password'
    name='password'
    value={this.state.password}
    onChange={this.handleInputChange}
    />
    </label>

    <label>
    <h3> Email </h3>
    <input
    type='text'
    name='email'
    value={this.state.email}
    onChange={this.handleInputChange}
    />
    </label>

    <button type='submit'> Register </button>
    </form>
    </div>
    )
 }
}

export default Register;
