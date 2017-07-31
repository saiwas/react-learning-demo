import React from 'react';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.name = 'Johnny';
  }

  getHelloWorld(){
    return "Hello World!";
  }

  render(){
    return(
      <h1>THis is { this.name }! { this.getHelloWorld() }</h1>
    );
  }
}
