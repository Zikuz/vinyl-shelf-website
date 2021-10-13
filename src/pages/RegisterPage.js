import React, {Component} from 'react';
import img from '../images/img3.jpg';
import styled from 'styled-components';
import ButtonUi from '@mui/material/Button'
import InputUi from '@mui/material/TextField';

const RegisterButton = styled(ButtonUi)`
  margin: 10px 0;
`

const RegisterInput = styled(InputUi)`
  width: 100%;
  color: #fff;
  background-color: #fff;
  border-radius: 5px;
  `

const LoginPageMain = styled.div`
  min-height: 85vh;
  `

const LoginFormContainer = styled.div`
text-align: center;
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
`

const RegisterFormHeader = styled.div`
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
  text-align: center;
  font-family: Arial;
  font-size: 1rem;
  border-radius: 5px;
  padding: 10px 0;
  background-color: red;
`

export default class RegisterPage extends Component {

  state = {
    name: '',
    password: '',
    password_confirm: '',
    
    errors: {
      name: false,
      password: false,
      password_confirm: false,
    }
  }

  messages = {
    name: 'Username must be at least 4 characters',
    password: 'Password must be at least 5 characters',
    password_confirm: 'Passwords do not match'
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
        name: '',
        password: '',
        password_confirm: '',
      
        errors: {
          name: false,
          password: false,
          password_confirm: false,
        }
      })
    } else {
      this.setState({
        errors: {
          name:!validation.name,
          password: !validation.password,
          password_confirm: !validation.password_confirm,
        }
      })

      setTimeout(() => {
        this.setState({
          errors: {
            name: false,
            password: false,
            password_confirm: false,
          }
        })
      }, 3000);
    }
  }

  formValidation = () => {
    let name = false;
    let password = false;
    let password_confirm = false;
    let correct = false;

    if (this.state.name.length > 3) {
      name = true;
    }

    if (this.state.password.length > 4) {
      password = true;
    }

    if (this.state.password_confirm === this.state.password && this.state.password_confirm.length > 4) {
      password_confirm = true;
    }

    if (name && password && password_confirm) {
      correct = true;
    }

    return ({
      correct,
      name,
      password,
      password_confirm
    })
  }

  render() {
    const {name, password, password_confirm} = this.state
    return (
      <LoginPageMain>
        <LoginFormContainer style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
          <LoginForm onSubmit={this.handleSubmit} noValidate>
            <RegisterFormHeader>
                <HeaderFormText>Sign up</HeaderFormText>
            </RegisterFormHeader>

            <FormContainer>
              <RegisterInput type="text" onChange={this.handleChange} value={name} placeholder="Name" id="name" name="name" label="Name" autoComplete="off" variant="filled" />
            </FormContainer>

            <FormContainer>
              <RegisterInput type="password" onChange={this.handleChange} value={password} placeholder="Password" id="password" name="password"  />
            </FormContainer>

            <FormContainer>
              <RegisterInput type="password" onChange={this.handleChange} value={password_confirm} placeholder="Confirm password" id="password_confirm" name="password_confirm" />
            </FormContainer>
        
            <ErrorBox>
              {this.state.errors.name && <ErrorFormMessage>{this.messages.name}</ErrorFormMessage>}
              {this.state.errors.password && <ErrorFormMessage>{this.messages.password}</ErrorFormMessage>}
              {this.state.errors.password_confirm && <ErrorFormMessage>{this.messages.password_confirm}</ErrorFormMessage>}
            </ErrorBox>

            <RegisterButton variant="contained" type="submit">SIGN UP</RegisterButton>
            
          </LoginForm>
        </LoginFormContainer>
      </LoginPageMain>
    );
  }
}

