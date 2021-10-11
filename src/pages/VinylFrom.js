import React from 'react';
import styled from 'styled-components';
import { LoginInput, FormBtn } from './LoginPage';
import img from '../images/img10.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const VinylFormMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    width: 100%;
    background-size: cover;
    background-position: top;
    position: relative;
    background-image: linear-gradient(to bottom, rgba(105, 103, 103, 0.5), rgba(129, 129, 129, 0.5)), url(${img});
`

const AddVinylForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    min-height: 50vh;
    width: 400px;
    background-color: #fff;
`

const VinylFormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100%;
    background-color: rgb(233, 233, 233);
`
const VinylFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 40vh;
    width: 100%;
`

const VinylFormHeaderText = styled.span`
    font-size: 2rem;
    letter-spacing: 0.2rem;
`

const Input = styled(LoginInput)`
    width: 50%;
`

const VinylFormButton = styled(FormBtn)`
    width: 50%;
    padding: 1rem;
`

const VinylForm = () => {
    return (
        <VinylFormMain>
            <AddVinylForm>
                <VinylFormHeader>
                    <VinylFormHeaderText>Add New Vinyl</VinylFormHeaderText>
                </VinylFormHeader>
                <VinylFormContainer>
                    <TextField type="text" label="Band" variant="outlined" />
                    <TextField type="text" label="Name" variant="outlined" />
                    <TextField type="text" label="Date" variant="outlined" />
                    <Button variant="contained" component="label">Upload Image<input type="file" hidden accept="image/png, image/jpeg" /></Button>
                    <Button
                        containerElement='label' // <-- Just add me!
                        label='My Label'>
                        <input type="file" />
                    </Button>
                    <VinylFormButton>Create Vinyl</VinylFormButton>
                </VinylFormContainer>
            </AddVinylForm>
        </VinylFormMain> 
    );
}
 
export default VinylForm;
