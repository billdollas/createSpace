import React, { Component } from 'react';

class Art extends Component {
constructor(props){
  super(props);

  this.reroute = this.reroute.bind(this);
}

reroute(){
  this.props.history.push('/spaces/art');
}


render() {

  return(

    <div>
    <div className='artTxt'>
      <h1 onClick={this.reroute}> Art </h1>
    </div>
     </div>

    )

}
}

export default Art;

