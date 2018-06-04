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
          <div className='loginFormCont'>
          <form className='loginForm'>
          <div className='loginFormTxt'>
          <h1> LOGIN </h1>
          </div>
          <label className='loginFormLabel'>
            Username:
            <div>
            <input type='text'
            className='loginInput'
            name='username'
            onChange={this.handleInputChange}
            value={this.state.username}
            />
            </div>
          </label>
          <label className='loginFormLabel'>
            Password:
            <div>
            <input type='password'
            className='loginInput'
            name='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            />
            </div>
          </label>

          <button type='submit' onClick={this.handleSubmit}> LOGIN </button>
          </form>
          </div>
         </div>
      )
  }
}
