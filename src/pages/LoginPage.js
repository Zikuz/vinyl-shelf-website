import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import img from '../images/img4.jpg';
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
const LoginFormHeader = styled.div`
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
export const LoginInput = styled.input`
  display: block;
  font-size: 1.1rem;
  font-family: inherit;
  background-color: rgba(#fff, 0.5);
  border-radius: 0.5rem;
  border: none;
  padding: 1.4rem 2rem;
  width: 95%;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.4);
  }
`

export const FormBtn = styled.button`
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

const RegisterLinkText = styled.span`
  font-weight: bold;  
`

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
      <LoginPageMain>
        <LoginFormContainer style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <LoginForm onSubmit={this.handleSubmit} noValidate>
            <LoginFormHeader>
                <HeaderFormText>Sign in</HeaderFormText>
            </LoginFormHeader>

            <FormContainer>
              <LoginInput type="text" onChange={this.handleChange} value={username} placeholder="Name" id="username" name="username" />
              {this.state.errors.username && <ErrorFormMessage>{this.messages.username}</ErrorFormMessage>}
            </FormContainer>

            <FormContainer>
              <LoginInput type="password" onChange={this.handleChange} value={password} placeholder="Password" id="password" name="password"  />
              {this.state.errors.password && <ErrorFormMessage>{this.messages.password}</ErrorFormMessage>}
            </FormContainer>
        
            <FormContainer>
              <FormBtn>SIGN IN</FormBtn>
            </FormContainer>

            <NavLink to='/register' style={{color: '#fff',  fontSize: '1.3rem'}}>
              Don't have account? <RegisterLinkText>Sign up</RegisterLinkText>
            </NavLink>
          </LoginForm>
        </LoginFormContainer>
      </LoginPageMain>
    );
  }
}


 