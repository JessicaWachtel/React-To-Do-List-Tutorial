import React, { Component } from 'react';
import TaskComponent from './TaskComponent';
import SubmitComponent from './SubmitComponent';

class App extends Component {
   
   constructor(props){
    super(props);
    this.state = {
      text: '',
      tasks:['walk the dog', 'finish homework'],
      
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
   };

   //track changes in the text bar

   handleChange(event) {
    this.setState({text: event.target.value});
   }
   
   handleSubmit (){
    this.setState({tasks:[...this.state.tasks, this.state.text]});
    this.setState({text: ''});
   };

   handleDelete (id){
     //make a shallow copy of state
     let copy = [...this.state.tasks];
     copy.splice(id, 1);
     this.setState({tasks:copy});   
   };
   
   render () {
   
    return (
      <div>
      <SubmitComponent
      handleChange = {this.handleChange}
      handleSubmit = {this.handleSubmit}
      text = {this.state.text}/>
      
      {this.state.tasks.map((currTask, index) =>{
        return <TaskComponent task = {currTask} id = {index} handleDelete = {this.handleDelete}/>
      })}

      </div>
    )
  }
};


export default App;