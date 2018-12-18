import React from 'react'
import Todoelement from '../todoElement/todoElement';
import './todoList.css';

export default class todoList extends React.Component{
  constructor(props){
    super(props);
  }

  
  render(){
    return(
      <ul>
        {
          this.props.tasks.map((e,i) =><Todoelement name={e.name} done={e.state} key={i}></Todoelement>)
        }
        <li className="add">Añadir tarea</li>
      </ul>
    )
  }
}