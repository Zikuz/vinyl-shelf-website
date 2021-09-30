import React, {Component} from 'react';
import '../styles/RegisterPage.css';
import img from '../images/img3.jpg';

export default class RegisterPage extends Component {

  state = {
    username: '',
    password: '',
    password_confirm: '',
    
    errors: {
      username: false,
      password: false,
      password_confirm: false,
    }
  }

  messages = {
    username: 'Username must be at least 4 characters',
    password: 'Password must be at least 5 characters',
    password_confirm: 'Passwords do not match'
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
        password_confirm: '',
      
        errors: {
          username: false,
          password: false,
          password_confirm: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username:!validation.username,
          password: !validation.password,
          password_confirm: !validation.password_confirm,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let password = false;
    let password_confirm = false;
    let correct = false;

    if (this.state.username.length > 3) {
      username = true;
    }

    if (this.state.password.length > 4) {
      password = true;
    }

    if (this.state.password_confirm === this.state.password && this.state.password_confirm.length > 4) {
      password_confirm = true;
    }

    if (username && password && password_confirm) {
      correct = true;
    }

    return ({
      correct,
      username,
      password,
      password_confirm
    })
  }

  render() {
    const {username, password, password_confirm} = this.state
    return (
      <div className="main">
        <div className="main-form" style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <form onSubmit={this.handleSubmit} noValidate className="form">
            <div className="form-header-container">
                <h2 className="form-header-text">Sign up</h2>
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
              <input type="password" className="form_input" onChange={this.handleChange} value={password_confirm} placeholder="Confirm password" id="password_confirm" name="password_confirm" />
              {this.state.errors.password_confirm && <span className="error_form_message">{this.messages.password_confirm}</span>}
            </div>
        
            <div className="form-container">
              <button className="btn btn-green">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

