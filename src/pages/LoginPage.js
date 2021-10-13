import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import img from '../images/img4.jpg';
import styled from 'styled-components';
import ButtonUi from '@mui/material/Button'
import InputUi from '@mui/material/TextField';

const LoginButton = styled(ButtonUi)`
`

const LoginInput = styled(InputUi)`
  width: 100%;
  color: #fff;
  background-color: #fff;
  border-radius: 5px;
`

const LoginPageMain = styled.div`
  min-height: 85vh;
`

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  width: 100%;
  background-size: cover;
  background-position: top;
  position: relative;
`

const LoginForm = styled.form`
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`

const LoginFormHeader = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  letter-spacing: 1rem;
  color: #fff;

  @media(max-width: 450px) {
    font-size: 2rem;
  }

  @media(max-width: 400px) {
    font-size: 1rem;
  }
`
const HeaderFormText = styled.h2`
  margin-bottom: 4rem;
`

const FormContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ErrorFormMessage = styled.span`
  color: #fff;
  font-family: Arial;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 5px 0;
  background-color: red;
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
    const type = e.target.type;
    if (type === "text" || type === "password") {
      this.setState({
        [e.target.name]: e.target.value
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
      setTimeout(() => {
        this.setState({
          errors: {
            username: false,
            password: false,
          }
        })
      }, 3000);
      
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
    console.log();
    return (
      <LoginPageMain>
        <LoginFormContainer style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <LoginForm onSubmit={this.handleSubmit} noValidate>
            <LoginFormHeader>
                <HeaderFormText>Sign in</HeaderFormText>
            </LoginFormHeader>
            

            <FormContainer>
              <LoginInput type="text" onChange={this.handleChange} value={username} id="username" name="username" label="Name" autoComplete="off" variant="filled"/>
            </FormContainer>

            <FormContainer>
              <LoginInput type="password" onChange={this.handleChange} value={password} id="password" name="password" label="Password" autoComplete="off" variant="filled" />
            </FormContainer>
        
            <FormContainer>
              <LoginButton variant="contained" type="submit">SIGN IN</LoginButton>
            </FormContainer>
            <ErrorBox>
              {this.state.errors.username && <ErrorFormMessage>{this.messages.username}</ErrorFormMessage>}
              {this.state.errors.password && <ErrorFormMessage>{this.messages.password}</ErrorFormMessage>}
            </ErrorBox>
            <NavLink to='/register' style={{color: '#fff',  fontSize: '1.3rem'}}>
              Don't have account? <RegisterLinkText>Sign up</RegisterLinkText>
            </NavLink>
          </LoginForm>
        </LoginFormContainer>
      </LoginPageMain>
    );
  }
}


 