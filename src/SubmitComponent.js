import React, { Component } from 'react';

class SubmitComponent extends Component {
   render () {
     return (
       <div>
         <input placeholder = "enter task" type="text" onChange = {this.props.handleChange} /> 
         <button onClick = {this.props.handleSubmit}>Submit</button>
           <h1>{this.props.text}</h1>  
       </div>
     )
   };

};

export default SubmitComponent;
