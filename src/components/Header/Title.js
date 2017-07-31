import React from 'react';

export default class Title extends React.Component{
  render(){
    return(
      <div>
        <h1> It's Johnny! </h1>
        <h3> { this.props.title == null ? "This is My First React App! " : this.props.title } </h3> 
      </div>
    );
  }
}
