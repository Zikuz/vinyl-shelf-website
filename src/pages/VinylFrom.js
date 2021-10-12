import React, {Component} from 'react';
import styled from 'styled-components';
import img from '../images/img10.jpg';
import InputUi from '@mui/material/TextField';
import ButtonUi from '@mui/material/Button';

const Input = styled(InputUi)`
    background-color: #fff;
    border-radius: 5px;
    
`

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

    @media(max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
    }
`

const VinylFormHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.35);
    padding: 10px 0;

    @media(max-width: 450px) {
        height: 90vh;
    }
`

const VinylFormHeaderText = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 10px;
    color: #fff;
`

const VinylFormHeaderText2 = styled.span`
    font-size: 1.3rem;
    width: 80%;
    text-align: center;
    padding: 10px;
    color: #fff;
`

const AddVinylForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 1rem;
    min-height: 60vh;
    width: 100%;
    background: #dee2e6;

    @media(max-width: 450px) {
        height: 95vh;
    }
`

// const VinylFormButton = styled(ButtonUi)`
//     /* width: 50%; */
//     padding: 2rem;
//     text-decoration: underline;
// `

class VinylForm extends Component {

    state = {
        band: '',
        name: '',
        date: '',
        img: '',
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    render() { 
        const {band, name, date} = this.state

        return (
            <VinylFormMain>
                <VinylFormHeader>
                    <VinylFormHeaderText>Add New Vinyl</VinylFormHeaderText>
                    <VinylFormHeaderText2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eum debitis, vitae ullam ex ut asperiores architecto ducimus temporibus fuga aspernatur modi est doloribus atque, suscipit, cum repellendus officia hic?</VinylFormHeaderText2>
                </VinylFormHeader>
                <AddVinylForm>
                        <Input type="text" onChange={this.handleChange} value={band} name="band" label="Band" variant="outlined" />
                        <Input type="text" onChange={this.handleChange} value={name} name="name" label="Name" variant="outlined" />
                        <Input type="text" onChange={this.handleChange} value={date} name="date" label="Date" variant="outlined" />
                        {/* <ButtonUi variant="contained" component="label">Upload Image<input type="file" hidden accept="image/png, image/jpeg" /></ButtonUi> */}
                        {/* <ButtonUi containerElement='label' label='My Label'><input type="file" onChange={ex} /></ButtonUi> <div></div> */}
                        {/* <VinylFormButton>Create Vinyl</VinylFormButton> */}
                </AddVinylForm>
            </VinylFormMain> 
        );
    }
}

export default VinylForm;

