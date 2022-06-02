import React, { Component } from 'react';
import TaskComponent from './TaskComponent';

class App extends Component {
   
   constructor(props){
    super(props);
    this.state = {
      tasks:['walk the dog', 'finish homework', 'empty the trunk']
    };
   };
   
    render () {
      return (
        <div>
          
          {this.state.tasks.map((currTask) =>{
           return  <TaskComponent task = {currTask} />
          })};
          
        </div>
      )
    }
 
 }
 


export default App;