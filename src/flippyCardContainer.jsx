import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import PropTypes from 'prop-types';
import Card from './eachCard';

const CardsContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 80px;
`;

const HeaderStuff = styled.div`
    width: 100%;
`;

const PageHeader = styled.h3`
    justify-content: center;
`;

class FlippyCardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...props.cardSelector,
            ...props.returnButton,
            ...props.pageTitle,
        }
    }
    render() {
        const cardsIndex = this.props.cardSelector;
        const title = this.props.pageTitle[cardsIndex-1];
        let cardsContent;

        switch(cardsIndex) {
//----------EDIT THE FUCK OUT OF THESE. IT'S LITERALLY ALL THE CARD CONTENT----------
//--------obvs frontText is what goes on the front and backText is the other---------
//----------And if you want to change the colours of the cards do that too-----------
            case 1: cardsContent = <div>
                    <Card frontText={'red1f'} backText={'red1b'} cardColor={'pink'}/> 
                    <Card frontText={'red2f'} backText={'red2b'} cardColor={'pink'}/> 
                    <Card frontText={'red3f'} backText={'red3b'} cardColor={'pink'}/>
                </div>;
                break;

            case 2: cardsContent = <div>
                    <Card frontText={'green1f'} backText={'green1b'} cardColor={'lightgreen'}/>
                    <Card frontText={'green2f'} backText={'green2b'} cardColor={'lightgreen'}/>
                    <Card frontText={'green3f'} backText={'green3b'} cardColor={'lightgreen'}/>
                </div>;
                break;

            case 3: cardsContent = <div>
                    <Card frontText={'yellow1f'} backText={'yellow1b'} cardColor={'yellow'}/>
                    <Card frontText={'yellow2f'} backText={'yellow2b'} cardColor={'yellow'}/>
                    <Card frontText={'yellow3f'} backText={'yellow3b'} cardColor={'yellow'}/>
                </div>;
                break;

            case 4: cardsContent = <div>
                    <Card frontText={'blue1f'} backText={'blue1b'} cardColor={'lightblue'}/>
                    <Card frontText={'blue2f'} backText={'blue2b'} cardColor={'lightblue'}/>
                    <Card frontText={'blue3f'} backText={'blue3b'} cardColor={'lightblue'}/>
                </div>;
                break;

            default: cardsContent = <div>Nothing to see here...</div>;
        }

        return(
            <div>
                <HeaderStuff>
                    <button className='backButton' onClick={this.props.returnButton}>Go Back</button>
                    <PageHeader>{title}</PageHeader>
                </HeaderStuff>
                <CardsContainer>
                    {cardsContent}
                </CardsContainer>
            </div>
        );
    }
}

FlippyCardContainer.propTypes = {
    cardSelector: PropTypes.number,
    returnButton: PropTypes.func,
    pageTitle: PropTypes.array,
};

export default FlippyCardContainer;