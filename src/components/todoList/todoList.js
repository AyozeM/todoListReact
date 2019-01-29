import React from 'react'
import Todoelement from '../todoElement/todoElement';
import './todoList.css';

export default class todoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks:this.props.tasks,
      newTaskText:''
    };
  }
  
  changeInputText = event => {
    this.setState({newTaskText:event.currentTarget.value})
  }
  
  enterkeyMethod = event =>{
    if(event.key === 'Enter'){
      this.addTask();
    }
  }
  addTask(){
    const newTaskText = this.state.newTaskText.trim();
    if(newTaskText.length > 0){
      const actualTasks = this.state.tasks;
      actualTasks.push({name:newTaskText,state:false});
      this.setState({tasks:actualTasks,newTaskText:''});
    }else{
      alert('debe escribir algo')
    }
  }
  render(){
    return(
      <section className="container mt-5">
        <input type="text" className="form-control" value={this.state.newTaskText} onChange={this.changeInputText} onKeyPress={this.enterkeyMethod}/>
        <ul>
          {
            this.state.tasks.map((e,i) =><Todoelement name={e.name} done={e.state} key={i}></Todoelement>)
          }
          <li className="add" onClick={this.addTask.bind(this)}><strong>+</strong> Añadir tarea</li>
        </ul>
      </section>
    )
  }
}