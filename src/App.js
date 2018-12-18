import React, { Component } from 'react';
import Todolist from './components/todoList/todoList';
import data from './data/defaultTasks.json';

class App extends Component {
  render() {
    return (
      <section>
        <Todolist tasks={data}></Todolist>
      </section>
    );
  }
}

export default App;
