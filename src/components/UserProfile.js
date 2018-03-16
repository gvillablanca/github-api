import React, {Component} from 'react';
import './../App.css';
import 'react-bootstrap';
import Repository from './Repository';
var axios = require('axios');

class UserProfile extends Component{
    constructor(props){
      super(props);
    }
    getRepo=()=>{
      let repo_url=this.props.repos_url;
      this.props.getSelect(repo_url);
     
    }
    render(){
      return(
        <a href="#" className="list-group-item result" onClick={this.getRepo}>
          <img src={this.props.avatar_url} width="100px" className="rounded-circle"/>
          <div className="box">
            <span>Nick: {this.props.login}</span> - <span>ID: {this.props.id}</span><br/>
            <a href={this.props.html_url} target="_blank">Link a perfil de Github.</a>
            
          </div>
        </a>
      );
    }
  }
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

  export default UserProfile;
  