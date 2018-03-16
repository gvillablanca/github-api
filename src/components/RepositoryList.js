import React, {Component} from 'react';
import './../App.css';
import 'react-bootstrap';
import Repository from './Repository';
var axios = require('axios');

class RepositoryList extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div className="panel panel-default">
        <div className="panel-heading">
        <h3>Repositorios</h3>
        <span>Presione el nick para despleagr repositorios</span>
        </div>
        <div className="panel-body">
          <div className="row left-items ">
          <ul class="skill">
           <li>{this.props.repoInfo.map((repos,index) =>(
              <Repository key={index} {...repos} />
            ))}</li>
          </ul>
            
          </div>
        </div>
        </div>
      );
    }
  }

  export default RepositoryList;