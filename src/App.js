import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
var axios = require('axios');

class App extends Component {
  constructor(){
    super();
  }
  state = {
    name:"Genoveva&America",
    userInfo:[{
      
    }],
    repoInfo:[{

    }]
  }
  fetchData = (userData) =>{
    if(userData.total_count>0){
      console.log(userData.items);
      this.setState({userInfo:userData.items})
      console.log(this.state.userInfo);
    }else{
      console.log("No result Found..");
    }
  }
  getRepo = (repoData) =>{
    this.setState({repoInfo:repoData})
    console.log(repoData);
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
            <div className="App-title">Github API By - {this.state.name}</div>
        </div>
        <div className="container">
          <SearchBox onSubmit={this.fetchData}/><br/>
          <SearchResult userInfo={this.state.userInfo} getReposEvt={this.getRepo}/>
          <RepositoryList repoInfo={this.state.repoInfo}/>
        </div>
      </div>
    );
  }
}

class SearchBox extends Component{
  state = {username:""}
  searchUser = (event) =>{
    event.preventDefault();
    console.log(this.state.username);
    let url=`https://api.github.com/search/users?q=${this.state.username}`;
    axios.get(url)
      .then(resp =>{
        this.props.onSubmit(resp.data);
      })
  }
  
  render(){
    return(
      <form onSubmit={this.searchUser} className="form-horizontal">
        <div class="form-group">
          <label for="pName" class="control-label col-sm-2">Github Profile Name:</label>
          <div class="col-sm-10">
            <input id="pName" type="text" value={this.state.username}
            onChange={(event)=> this.setState({username:event.target.value})} placeholder="Enter the github user name." required className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10 ">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      
    );
  }
}
class SearchResult extends Component{
  constructor(props){
    super(props)
  }
  getSelection=(url)=>{
    console.log(url);
     axios.get(url)
      .then(repos=>{
        this.props.getReposEvt(repos.data);
      })
  }
  render(){
    return(      
      <div className="panel panel-default">
        <div className="panel-heading">Result</div>
        <div className="panel-body">
        {this.props.userInfo.map((user,index) => 
          <UserProfile key={index} {...user} getSelect={this.getSelection}/>
        )}
        </div>
      </div>
    );
  }
}
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
      <a href="#" className="list-group-item" onClick={this.getRepo}>
        <img src={this.props.avatar_url} width="100px"/>
        <div className="box">
          <span>{this.props.login}</span> - <span>{this.props.id}</span><br/>
          <a href={this.props.html_url} target="_blank">Profile</a>
          
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

class Repository extends Component{
  state={
    langData:[]
  }
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-sm-2" onClick={()=>{ this.getLanguage(this.props.languages_url)} }>
        <div>{this.props.name}</div>
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

export default App;
