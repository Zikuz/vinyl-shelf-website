import React from 'react';
import styled from 'styled-components';
import { LoginInput } from './LoginPage';
import img from '../images/img10.jpg';

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
    background-color: rgb(233, 233, 233);
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VinylFormHeaderText = styled.span`
    font-size: 2rem;
    letter-spacing: 0.2rem;
`

const VinylFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled(LoginInput)``

const VinylFormButton = styled.button`
`


const VinylForm = () => {
    return (
        <VinylFormMain>
            <AddVinylForm>
                <VinylFormHeader>
                    <VinylFormHeaderText>Add New Vinyl</VinylFormHeaderText>
                </VinylFormHeader>
                <VinylFormContainer>
                    <label htmlFor="band">Band:</label>
                    <Input type="text" id="band" placeholder="band"></Input>
                    <label htmlFor="name">Name:</label>
                    <Input type="text" id="name" placeholder="name"></Input>
                    <label htmlFor="date">Date:</label>
                    <Input type="text" id="date" placeholder="date"></Input>
                    <label htmlFor="image">Image:</label>
                    <Input type="file" id="image" accept="image/png, image/jpeg"></Input>
                </VinylFormContainer>
                <VinylFormButton>Create</VinylFormButton>
            </AddVinylForm>
        </VinylFormMain>
    );
}
 
export default VinylForm;
