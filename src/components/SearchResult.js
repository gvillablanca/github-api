import React, {Component} from 'react';
import './App.css';
import 'react-bootstrap';

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

  export default SearchResult;