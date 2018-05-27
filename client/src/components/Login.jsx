import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    this.setState({
    [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      username:'',
      password:''
    });
  }

  render() {
    return (

        <div>
          <h1> LOGIN </h1>
          <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type='text'
            name='username'
            onChange={this.handleInputChange}
            value={this.state.username}
            />
          </label>
          <label>
            Password:
            <input type='password'
            name='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            />
          </label>

          <button type='submit'> LOGIN </button>
          </form>
         </div>
      )
  }
}
