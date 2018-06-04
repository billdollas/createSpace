import React, { Component } from 'react';

class Categorized extends Component {
   constructor(props) {
  super(props);

 }

render(){

  const posts = this.props.posts.map( el => {

    if (el.category === this.props.match.params.category){

      return el

    }



  })

  const filteredPosts = posts.map( el => {

    const userId = el.userid;
    const content = el.content;
    const category = el.category;

  //   const username = this.props.users.find(user => {
  // return Number(user.id) === userId;
  // });
return(
  <div>

    <p key={el.key}>{el.content}</p>

    <h4>{el.username}</h4>

  </div>

  )

  })

  console.log(filteredPosts)

  return(

    <div>{filteredPosts}</div>

  )
}

}

export default Categorized;


