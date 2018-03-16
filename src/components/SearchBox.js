import React, {Component} from 'react';
import './../App.css';
import 'react-bootstrap';
var axios = require('axios');

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
            <label for="pName" class="control-label col-sm-12">
            <h3>Nombre perfil de github</h3>            
            </label>
            <div class="col-sm-10">
              <input id="pName" type="text" value={this.state.username}
              onChange={(event)=> this.setState({username:event.target.value})} placeholder="Ingrese nombre de perfil..." className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10 ">
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </div>
        </form>
        
      );
    }
  }

  export default SearchBox;