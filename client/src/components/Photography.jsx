import React, { Component } from 'react';

class Photography extends Component {
constructor(props){
  super(props);

  this.reroute = this.reroute.bind(this);
}

reroute(){
  this.props.history.push('/spaces/photo');
}
render() {

  return(

    <div>
    <div className='photoTxt'>
      <h1 onClick={this.reroute}> Photography </h1>
    </div>
     </div>

    )

}
}

export default Photography;
