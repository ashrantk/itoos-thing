import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import FlippyCard from './FlippyCard'

const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColourButton = styled.button`
  text-align: center;
  position: relative;
  background: rgba(${props => props.buttonColorR}, ${props => props.buttonColorG}, ${props => props.buttonColorB}, ${props => props.editOpacity * 0.075 + 0.25});
  width: 100%;
  z-index:-1;
  padding: 30px 30px;
  &::before{
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  font-size: 16px;
  opacity: 1;
	position:  absolute;
	top: 45%;
	left: 0;
	bottom: 0;
  right: 0;
`;

const MiddleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200%;
`;

class App extends Component {
  state = {
    redOpacity: 0,
    greenOpacity: 0,
    yellowOpacity: 0,
    blueOpacity: 0,
  }

  onClickRed() 

  render() {
    return (
      <div className="App">
        <ButtonsContainer>
          <ButtonContainer>
            <ColourButton buttonColorR={255} buttonColorG={0} buttonColorB={0} editOpacity={this.state.redOpacity}>
              <Content>TEXT #1</Content>
            </ColourButton>
            <MiddleButtons>
              <ColourButton buttonColorR={0} buttonColorG={255} buttonColorB={0} editOpacity={this.state.greenOpacity}>
              <Content>TEXT #2</Content>
              </ColourButton>
              <ColourButton buttonColorR={255} buttonColorG={255} buttonColorB={0} editOpacity={this.state.yellowOpacity}>
              <Content>TEXT #3</Content>
              </ColourButton>
            </MiddleButtons>
            <ColourButton buttonColorR={0} buttonColorG={0} buttonColorB={255} editOpacity={this.state.blueOpacity}>
              <Content>TEXT #4</Content>
            </ColourButton>
          </ButtonContainer>
        </ButtonsContainer>
        
      </div>
    );
  }
}

export default App;
