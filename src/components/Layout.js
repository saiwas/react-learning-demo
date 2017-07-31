import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  // constructor(){
  //   super();
  //   this.name = 'Johnny';
  // }

  // getHelloWorld(){
  //   return "Hello World!";
  // }

  // render(){
  //   return(
  //     <h1>THis is { this.name }! { this.getHelloWorld() }</h1>
  //   );
  // }
  render(){
    return(
      <div>
        < Header />
        < Footer />
      </div>
    );
  }
}
