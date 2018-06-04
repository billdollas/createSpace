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

const data = this.state;

  e.preventDefault();
  this.props.onSubmit(data);
  this.setState({
    username: '',
    password: '',
    email: ''
  });
 }

 render(){
  return (
    <div className='registerFormCont'>
    <div className='regFormContainer'>
    <div className='regFormTxt'>
    <h1> Register </h1>
    </div>
    <form onSubmit={this.handleSubmit} className='regForm'>

    <label className='regFormLabel'>
    <h3 className='regLabelTxt'> Username: </h3>
    <div>
    <input
    className='regInput'
    type='text'
    name='username'
    value={this.state.username}
    onChange={this.handleInputChange}
    />
    </div>
    </label>

    <label className='regFormLabel'>
    <h3 className='regLabelTxt'> Password: </h3>
    <div>
    <input
    className='regInput'
    type='password'
    name='password'
    value={this.state.password}
    onChange={this.handleInputChange}
    />
    </div>
    </label>

    <label className='regFormLabel'>
    <h3 className='regLabelTxt'> Email: </h3>
    <div>
    <input
    className='regInput'
    type='text'
    name='email'
    value={this.state.email}
    onChange={this.handleInputChange}
    />
    </div>
    </label>
    <div className='regButton'>
    <button type='submit'> Register </button>
    </div>
    </form>
    </div>
    </div>
    )
 }
}

export default Register;
