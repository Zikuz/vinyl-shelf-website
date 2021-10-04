import React, {Component} from 'react';
import img from '../images/img3.jpg';
import styled from 'styled-components';

const LoginPageMain = styled.div`
  min-height: 85vh;
`

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: top;
  position: relative;
`
const LoginForm = styled.form`
  padding: 20px;
  border-radius: 5px;
`
const RegisterFormHeader = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  letter-spacing: 1rem;
  color: #fff;
`
const HeaderFormText = styled.h2`
  margin-bottom: 4rem;
`

const FormContainer = styled.div`
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
`
const RegisterInput = styled.input`
  display: block;
  font-size: 1.1rem;
  font-family: inherit;
  background-color: rgba(#fff, 0.5);
  border-radius: 0.5rem;
  border-bottom: 3px solid transparent;
  border: none;
  padding: 1.4rem 2rem;
  width: 95%;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`

const FormBtn = styled.button`
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  width: 95%;
  position: relative;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.397);
  color: #fff;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`

const ErrorFormMessage = styled.span`
  font-weight: bold;
  color: #fff;
  text-decoration: underline;
  font-size: 1.2rem;
`

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
      <LoginPageMain>
        <LoginFormContainer style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <LoginForm onSubmit={this.handleSubmit} noValidate>
            <RegisterFormHeader>
                <HeaderFormText>Sign up</HeaderFormText>
            </RegisterFormHeader>

            <FormContainer>
              <RegisterInput type="text" onChange={this.handleChange} value={username} placeholder="Name" id="username" name="username" />
              {this.state.errors.username && <ErrorFormMessage>{this.messages.username}</ErrorFormMessage>}
            </FormContainer>

            <FormContainer>
              <RegisterInput type="password" onChange={this.handleChange} value={password} placeholder="Password" id="password" name="password"  />
              {this.state.errors.password && <ErrorFormMessage>{this.messages.password}</ErrorFormMessage>}
            </FormContainer>

            <FormContainer>
              <RegisterInput type="password" onChange={this.handleChange} value={password_confirm} placeholder="Confirm password" id="password_confirm" name="password_confirm" />
              {this.state.errors.password_confirm && <ErrorFormMessage>{this.messages.password_confirm}</ErrorFormMessage>}
            </FormContainer>
        
            <FormContainer>
              <FormBtn>SIGN UP</FormBtn>
            </FormContainer>
          </LoginForm>
        </LoginFormContainer>
      </LoginPageMain>
    );
  }
}

