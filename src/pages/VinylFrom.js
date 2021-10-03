import React from 'react';
import styled from 'styled-components';

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

const VinylFormContainer = styled.div`

`

const VinylForm = () => {
    return (
        <VinylFormMain>
            <AddVinylForm>
                <VinylFormHeader>
                    <VinylFormHeaderText>Add New Vinyl</VinylFormHeaderText>
                </VinylFormHeader>
                <VinylFormContainer>

                </VinylFormContainer>
            </AddVinylForm>
        </VinylFormMain>
    );
}
 
export default VinylForm;
