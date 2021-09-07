import React, {Component} from 'react';
import '../styles/RegisterPage.css'

export default class RegisterPage extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password") {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault()

      this.setState({
        username: '',
        password: '',
        confirmPassword: '',
      })
    
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} noValidate>
          
            <label htmlFor="username">Username</label>
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} placeholder='Name' />

            <label htmlFor="password">Password</label>     
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password' />

            <label htmlFor="confirmPassword">Confirm password</label>     
            <input type="password" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder='Confirm password' />
          
            <button>Register</button>
        </form>
      </div>
    );
  }
}
