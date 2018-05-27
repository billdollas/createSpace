import React, { Component } from 'react';
import './App.css';
import Art from './components/Art';
import Photography from './components/Photography';
import Film from './components/Film';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import {Route, Switch } from 'react-router-dom';
const base = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      spaces: []
    };
  }

  componentDidMount() {
    fetch(`${base}/spaces`)
    .then(resp => resp.json())
    .then(data => this.setState({
      spaces: data.spaces
    }));
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
              <Register />
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
