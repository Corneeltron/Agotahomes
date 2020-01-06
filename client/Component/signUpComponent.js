import React from 'react';


class SignUp extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

handleSubmit(e){
  e.preventDefault();
  console.log('Inside HandleSubmit', this.state.username, this.state.password)
  this.getData()
}

handleChange(e){
  e.preventDefault();
  console.log('Inside Handle Change')
  this.setState({
    username : document.getElementById('username').value,
    password: document.getElementById('password').value
  })
}

getData(){
  console.log('Inside Get Data')
  fetch('http://localhost:3000/api/signup', {
    method : 'POST',
    headers : {
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
//on submit needs to "redirect" to home page
render(){
    return(
     <div>
       <form onSubmit= {this.handleSubmit} >
         <label>Enter User Name</label>
         <input id='username' onChange={this.handleChange} placeholder= "userName" />
         <label>Enter Password</label>
         <input id='password'onChange={this.handleChange} placeholder= "password" />
         <button type="submit">Submit</button>
       </form> 
     </div>
  )
}
}

export default SignUp;
