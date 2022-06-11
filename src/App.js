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
   
   };

   //track changes in the text bar

   handleChange(event) {
    this.setState({text: event.target.value});
  }
   
  
   
   render () {
   
    return (
      <div>
      <SubmitComponent
      handleChange = {this.handleChange}
      text = {this.state.text}/>
      <TaskComponent todo = {this.state.tasks} />
      </div>
    )
  }
};


export default App;