import React, { Component } from 'react';
import TaskComponent from './TaskComponent';
import SubmitComponent from './SubmitComponent';

class App extends Component {
   
   constructor(props){
    super(props);
    this.state = {
      text: '',
      tasks:['walk the dog', 'finish homework']
      
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
   };

   //track changes in the text bar

   handleChange(event){
    this.setState({text: event.target.value});
   };
  
   handleSubmit(){
    this.setState({tasks:[...this.state.tasks, this.state.text]})
   }
  
   
   render () {
   
    return (
      <div>
      <SubmitComponent
      handleChange = {this.handleChange}
      handleSubmit = {this.handleSubmit}
      text = {this.state.text}/>
      <TaskComponent todo = {this.state.tasks} />
      </div>
    )
  }
};


export default App;