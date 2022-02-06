import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  
  handleUserNameChange = (name) =>{
      this.setState({username:name})

  }

handlePasswordChange = (password) => {
    this.setState({password:password})
}
handleLogin = () => {
    alert(`Username: ${this.state.username} Password ${this.state.password}`)
}


  //** */

  render() {
    return (
      <div>
        <input onChange={e => this.handleUserNameChange(e.target.value)} placeholder="username" ></input>
        <input onChange={e=> this.handlePasswordChange(e.target.value)} placeholder="password"></input>
        <button onClick={this.handleLogin}>LOGIN</button>
      </div>
    );
  }
}

export default Login;
