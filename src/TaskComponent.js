import React, { Component } from 'react';

class TaskComponent extends Component {
   render () {
     return (
       <div>
       <span>{this.props.task}     </span>  
       <button id = {this.props.id} onClick = {() => this.props.handleDelete(this.props.id)}>Delete</button>
       
       </div>
     )
   }

};

export default TaskComponent;