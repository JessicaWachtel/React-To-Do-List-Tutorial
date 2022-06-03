import React, { Component } from 'react';
import TaskComponent from './TaskComponent';

class App extends Component {
   
   constructor(props){
    super(props);
    this.state = {
      tasks:['walk the dog', 'finish homework']
    };
   };
   
   render () {

    return (
      
      <TaskComponent todo = {this.state.tasks} />
    )
  }
};


export default App;