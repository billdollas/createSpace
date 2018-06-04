import React, { Component } from 'react';

class Film extends Component {
constructor(props){
  super(props);

  this.reroute = this.reroute.bind(this);
}

reroute(){
  this.props.history.push('/spaces/film');
}

render() {


  return(

    <div>
    <div className='filmTxt'>
      <h1> Film </h1>
    </div>
     </div>

    )

}
}

export default Film;
