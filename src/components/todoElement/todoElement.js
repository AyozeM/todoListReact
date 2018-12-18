import React, { Component } from "react";


export default class todoElement extends Component {
  constructor(name,done){
    super(name,done);
    this.state = {
      do:this.props.done
    }
  }

  changeEvent(){
    this.state.do = !this.state.do;
    this.render();
  }

  render() {
    return (
      <li><input type="checkbox" onChange={this.changeEvent.bind(this)} defaultChecked={this.state.do}/> {this.props.name}</li>
    )
  }
}