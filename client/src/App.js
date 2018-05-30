import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Art from './components/Art';
import Photography from './components/Photography';
import Film from './components/Film';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import {Route, Switch } from 'react-router-dom';
import TokenService from './services/TokenService';
const base = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      spaces: []
    };

  this.register = this.register.bind(this);
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





  render() {
    return (
      <div className="App">
        <Switch>

          <Route
          exact path= '/'
          render= { props => {
            return(
              <div className='spacesCont'>
              <div>
              <Art />
              </div>
              <div className='borderOne'></div>
              <div>
              <Photography />
              </div>
              <div className='borderTwo'></div>
              <div>
              <Film />
              </div>
              <p> Hello  </p>
              </div>
              )
          }}
          />

          <Route
          path='/login'
          render= { props => {
            return(
              <div>
              <Login />
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
              <Profile />
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
