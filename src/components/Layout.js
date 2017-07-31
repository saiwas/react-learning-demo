import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "Welcome State Title ~~~"
    }
  }

  render(){
    setTimeout(() =>{
      this.setState({title: "Change To Welcome Johnny ~~~"})
    }, 2000);

    return(
      <div>
        < Header title={this.state.title}/>
        < Header title=" This is the second title !"/>
        < Footer />
      </div>
    );
  }
}
