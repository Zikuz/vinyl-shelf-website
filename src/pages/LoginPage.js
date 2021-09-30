import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/RegisterPage.css'
import img from '../images/img4.jpg';

export default class LoginPage extends Component {

  state = {
    username: '',
    password: '',
    
    errors: {
      username: false,
      password: false,
    }
  }

  messages = {
    username: 'Invalid username',
    password: 'Invalid password',
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

  handleSubmit = e => {
    e.preventDefault()

    const validation = this.formValidation()

    if (validation.correct) {
      this.setState({
        username: '',
        password: '',
      
        errors: {
          username: false,
          password: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username:!validation.username,
          password: !validation.password,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let password = false;
    let correct = false;

    if (this.state.username === 'ziku' && this.state.password === '12345') {
      username = true;
      password = true;
    }

    if (username && password) {
      correct = true;
    }

    return ({
      correct,
      username,
      password,
    })
  }

  render() {
    const {username, password} = this.state
    
    return (
      <div className="main">
        <div className="main-form" style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <form onSubmit={this.handleSubmit} noValidate className="form">
            <div className="form-header-container">
                <h2 className="form-header-text">Sign in</h2>
            </div>

            <div className="form-container">
              <input type="text" className="form_input" onChange={this.handleChange} value={username} placeholder="Name" id="username" name="username" />
              {this.state.errors.username && <span className="error_form_message">{this.messages.username}</span>}
            </div>

            <div className="form-container">
              <input type="password" className="form_input" onChange={this.handleChange} value={password} placeholder="Password" id="password" name="password"  />
              {this.state.errors.password && <span className="error_form_message">{this.messages.password}</span>}
            </div>
        
            <div className="form-container">
              <button className="btn btn-green">SIGN IN</button>
            </div>
            <NavLink to='/register' className="form-register-link-container">Don't have account? <span className="form-register-link-text">Sign up</span></NavLink>
          </form>
        </div>
      </div>
    );
  }
}


 