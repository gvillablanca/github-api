import React, {Component} from 'react';
import './../App.css';
import 'react-bootstrap';

class Repository extends Component{
    state={
      langData:null
    }
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        <div className="col-sm-12">
          <div>*{this.props.name}</div>
        </div>
      );
    }
  }
  class LanguageBox extends Component{
    constructor(props){
      super(props);
      
    }
    percentCal = () =>{
      return "Hello";
    }
    render(){
      return(
        <div>
        {this.props.langData.map((data,index)=>{
          <div>{data[index]}</div>
        })}
        </div>
      );
    }
  }

  export default Repository;