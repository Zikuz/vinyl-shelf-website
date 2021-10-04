import React from 'react';
import styled from 'styled-components';
import { LoginInput } from './LoginPage';

const VinylFormMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
`

const AddVinylForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 85vh;
`

const VinylFormHeader = styled.div`
    background-color: rgb(233, 233, 233);
    height: 10vh;
    width: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VinylFormHeaderText = styled.span`
    font-size: 2rem;
    letter-spacing: 0.2rem;
`

const VinylFormContainer = styled.div``
const Input = styled(LoginInput)``

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
                </VinylFormContainer>
            </AddVinylForm>
        </VinylFormMain>
    );
}
 
export default VinylForm;
