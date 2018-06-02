import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Art from './components/Art';
import Photography from './components/Photography';
import Film from './components/Film';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import {Route, Switch, Link } from 'react-router-dom';
import TokenService from './services/TokenService';
const base = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      isLoggedIn: '',
      user: '',
      content: ''
    };

  this.register = this.register.bind(this);
  this.login = this.login.bind(this);
  }

  componentDidMount() {
    fetch(`${base}/spaces`)
    .then(resp => resp.json())
    .then(data => this.setState({
      spaces: data.spaces
    }));
  }

  //auth shit begins

  register(data) {
    axios(`${base}/users`, {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token)
    })
    .catch(err => console.log(`err: ${err}`));
  }

  login(data) {
    axios(`${base}/users/login`, {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token),
      console.log(resp.data.user),
      this.setState(this.props.history.push('/profile'));
    })
    .catch(err => console.log(`err: ${err}`));
  }

  authClick(ev) {
    ev.preventDefault();
    axios(`${base}/profile`, {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  // checkLogin() {
  //   axios(`${base}/isLoggedIn`, {
  //     headers: {
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //   }).then(resp => console.log(resp))
  //   .catch(err => console.log(err));
  // }




  render() {
    return (
      <div className="App">
        <Switch>

          <Route
          exact path= '/'
          render= { props => {
            return(
              <div>

              <div className='spacesCont'>
              <div>
              <Art />
              </div>
              <div>
              <Photography />
              </div>
              <div>
              <Film />
              </div>
              <div className='mainTxt'>
              <h1>createspace...</h1>
              </div>
              <div className='userCont'>
              <Link to='/login' style={{ textDecoration: 'none' }}><h1 className='loginTxt'>Login</h1></Link>
              <Link to='/register' style={{ textDecoration: 'none' }}><h1 className='regTxt'>Register</h1></Link>
              </div>
              </div>
              </div>
              )
          }}
          />

          <Route
          path='/login'
          render= { props => {
            return(
              <div>
              <Login
              user={this.state.user}
              isLoggedIn={this.state.isLoggedIn}
              onLogin={this.login}
              {...props}
              />
              </div>

              )
          }}
          />

          <Route
          path='/register'
          render= { props => {
            return(
              <div>
              <Register
              onSubmit={this.register}
              />
              </div>
              )
          }}
          />

          <Route
          path='/profile'
          render= { props => {
            return(
              <div>
              <Profile
              {...props}
              />
              </div>
              )
          }}

          />


        </Switch>
      </div>
      );
  }
}

export default App;
