import React, {Component} from 'react';
import styled from 'styled-components';
import InputUi from '@mui/material/TextField';
import ButtonUi from '@mui/material/Button';
import backGroungImage from '../images/img10.jpg';
import VinylImg from '../icons/vinyl3.svg'
import AddIcon from '../icons/add.svg'


const VinylFormMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    width: 100%;
    background-size: cover;
    background-position: top;
    position: relative;
    background-image: linear-gradient(to bottom, rgba(105, 103, 103, 0.5), rgba(129, 129, 129, 0.5)), url(${backGroungImage});

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
    text-align: center;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 1rem;
    min-height: 60vh;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

    @media(max-width: 450px) {
        min-height: 95vh;
    }

`
const VinylInputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    text-align: center;
    
    @media(max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: min-content;
    }
`

const Input = styled(InputUi)`
    background-color: rgba(250,250,250,0.9);
    border-radius: 5px;
    height: fit-content;
`

const VinylFormBox = styled.div`
    min-height: 20vh;
    background-color: rgba(250,250,250,0.9);
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 5px;
`

const VinylInputImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(250,250,250,0.9);
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.1);
    border-radius: 5px;
    margin: 0.5rem 0;
    padding: 5px;
    min-height: 10vh;
    width: fit-content;
`

const VinylImage = styled.img`
    width: auto;
    max-height: 150px;
    padding: 10px;
`


const Tracklist = styled.ol`
    display: grid;
    overflow: auto;
    text-align: left;
    padding: 10px 30px;
    height: 15vh;   
    font-size: 1.3rem;
`

const Track = styled.li``

const VinylFormButton = styled(ButtonUi)`
    padding: 2rem;
`

const InputTrackList = styled(InputUi)``

class VinylForm extends Component {

    state = {
        band: '',
        name: '',
        date: '',
        img:  '',
        track: '',
        tracklist: [],
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    handleTracklist = e => {
        const tracklist = this.state.tracklist
        const track = this.state.track
        if (track) {
            this.setState({
                tracklist: [...tracklist,track],
                track: '',
            })
        }
    }

    handleImageUpload = e => {
        const file = e.target.files[0]
        const img = URL.createObjectURL(file)

        this.setState({
            img 
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()

        const {band, name, date, img} = this.state
        
        if (band && name && date && img ) {
            this.setState({
                band: '',
                name: '',
                date: '',
                img: '',
                tracklist: [],
            })
        }
    }

    render() { 
        const {band, name, date, track, tracklist, img} = this.state

        return (
            <VinylFormMain>
                <VinylFormHeader>
                    <VinylFormHeaderText>Add New Vinyl</VinylFormHeaderText>
                    <VinylFormHeaderText2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eum debitis, vitae ullam ex ut asperiores architecto ducimus temporibus fuga aspernatur modi est doloribus atque, suscipit, cum repellendus officia hic?</VinylFormHeaderText2>
                </VinylFormHeader>
                <AddVinylForm onSubmit={this.handleSubmit}>
                    <VinylInputsContainer>
                        <Input type="text" onChange={this.handleChange} value={band} name="band" label="Band" autoComplete="off" variant="filled" />
                        <Input type="text" onChange={this.handleChange} value={name} name="name" label="Name" autoComplete="off" variant="filled" />
                        <Input type="text" onChange={this.handleChange} value={date} name="date" label="Release date" autoComplete="off" variant="filled" />
                    </VinylInputsContainer>
                    
                    <VinylInputImage>
                        <ButtonUi variant="contained" component="label">Upload Image<input type="file" onChange={this.handleImageUpload} accept="image/*" hidden /></ButtonUi>
                        {img ? <VinylImage src={img} alt="img" /> : <VinylImage src={VinylImg} alt="img" />}
                    </VinylInputImage>

                    <VinylFormBox>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InputTrackList type="text" onChange={this.handleChange} value={track} name="track" autoComplete="off" label="Tracklist" variant="filled" />
                            <VinylFormButton variant="contained" onClick={this.handleTracklist}><img src={AddIcon} alt="+"/></VinylFormButton>
                        </div>
                        <Tracklist>
                            {tracklist.map(track => <Track key={track}>{track}</Track>)}
                        </Tracklist>
                    </VinylFormBox> 

                    <VinylFormButton variant="contained" type="submit">Create Vinyl</VinylFormButton>
                </AddVinylForm>
            </VinylFormMain> 
        );
    }
}

export default VinylForm;

