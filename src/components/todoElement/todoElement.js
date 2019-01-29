import React, { Component } from "react";


export default class todoElement extends Component {
  constructor(name,done){
    super(name,done);
    this.state = {
      do:this.props.done
    }
  }

  changeEvent(){
    this.setState({do:!this.state.do})
  }

  render() {
    return (
      <li>
        <label htmlFor="">
          <input type="checkbox" onChange={this.changeEvent.bind(this)} defaultChecked={this.state.do}/> {this.props.name}
        </label>
      </li>
    )
  }
}