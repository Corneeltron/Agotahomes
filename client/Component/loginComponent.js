import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      username : document.getElementById('loginUsername').value,
      password : document.getElementById('loginPassword').value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.loginUser()
  }

  loginUser(){
    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        "username" : this.state.username,
        "password" : this.state.password
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error in fetch'))
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter Your Username</label>
        <input id='loginUsername' placeholder='username' onChange={this.handleChange}></input>
        <label>Enter Your Password</label>
        <input id='loginPassword' placeholder='password' onChange={this.handleChange}></input>
        <button>Login</button>
      </form>
    )
  }
}

export default Login;