import React, { Component } from 'react';
import TokenService from '../services/TokenService';
import { Link } from 'react-router-dom';
import axios from 'axios';
const base = process.env.REACT_APP_BASE_URL;

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      username: ''
    }
    this.logout = this.logout.bind(this);
    // this.checkLogin = this.checkLogin.bind(this);
  }

  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
    console.log('logged out!');
    this.setState(this.props.history.push('/'));
  }

  // checkLogin() {
  //   axios(`${base}/isLoggedIn`, {
  //     headers: {
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //   }).then(resp => console.log(resp))
  //   .catch(err => console.log(err));
  // }

  // componentDidMount() {
  //   this.checkLogin();
  // }






  render() {
    return (
      <div>
      <div className='picCont'>
        <div className='profilePic'>
        Picture
        </div>
        </div>
        <div> Hello </div>

        <div className='logoutCont'>
        <h1 onClick={this.logout}> Logout </h1>
        </div>
        </div>

    )
  }

}

export default Profile;

    // if(this.state.id){}
