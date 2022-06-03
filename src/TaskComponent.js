import React, { Component } from 'react';

class TaskComponent extends Component {
   render () {
     return (
       <div>
         <h1>{this.props.todo[0]}</h1>
         <h1>{this.props.todo[1]}</h1>
       </div>
     )
   }

}

export default TaskComponent;