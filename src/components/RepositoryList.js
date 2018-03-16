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
        <div className="panel-heading">Repositorios</div>
        <div className="panel-body">
          <div className="row center-items skill">
            {this.props.repoInfo.map((repos,index) =>(
              <Repository key={index} {...repos} />
            ))}
          </div>
        </div>
        </div>
      );
    }
  }

  export default RepositoryList;