import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import axios from 'axios';

const base = process.env.REACT_APP_BASE_URL;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    this.setState({
    [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.login(this.state);
    this.setState({
      username:'',
      password:''
    });
  }

  login(data) {
    axios(`${base}/users/login`, {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token),
      console.log(resp.data.user),
      this.setState(this.props.history.push('/profile')),
      this.setState(this.props.user = resp.data.user),
      this.setState(this.props.isLoggedIn = 'loggedIn')
      // this.setState(this.props.user = resp.data.user);
    })
    .catch(err => console.log(`err: ${err}`));
  }

  render() {
    return (

        <div className='loginContainer'>
          <div className='loginFormTxt'>
          <h1> LOGIN </h1>
          </div>
          <div className='loginFormCont'>
          <form className='loginForm'>
          <label className='loginFormLabel'>
            Username:
            <input type='text'
            name='username'
            onChange={this.handleInputChange}
            value={this.state.username}
            />
          </label>
          <label className='loginFormLabel'>
            Password:
            <input type='password'
            name='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            />
          </label>

          <button type='submit' onClick={this.handleSubmit}> LOGIN </button>
          </form>
          </div>
         </div>
      )
  }
}
