import React, { Component } from 'react';

class TaskComponent extends Component {
   render () {
     return (
       <div>
         <h1>{this.props.task}</h1>
       </div>
     )
   }

}

export default TaskComponent;