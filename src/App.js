import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
import Repository from './components/Repository';
import RepositoryList from './components/RepositoryList';
import UserProfile from './components/UserProfile';
import SearchResult from './components/SearchResult';
import SearchBox from './components/SearchBox';
import './App.css';
var axios = require('axios');

class App extends Component {
 constructor(){
   super();
 }
 state = {
   name: "America&Genoveva",
   userInfo: [{

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
           <div className="App-title">Github Search</div>
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

export default App;