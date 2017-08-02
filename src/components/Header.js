import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component{
  updateChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render(){
    // console.log(this.props);
    return(
      <div>
        < Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.updateChange.bind(this)}/>
      </div>
    );
  }
}
