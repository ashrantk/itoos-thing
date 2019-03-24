import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
//import { FlippyCardContainerR, FlippyCardContainerG, FlippyCardContainerB, FlippyCardContainerY } from './flippyCardcontainer';

//DO NOT TOUCH
const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`;
//STILL NO
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
//KEEP SCROLLING
const Content = styled.div`
  font-size: 16px;
  opacity: 1;
	position:  absolute;
	top: 45%;
	left: 0;
	bottom: 0;
  right: 0;
`;
//ALMOST THERE
const MiddleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200%;
`;
//END OF DO NOT TOUCH
//for real though. real finicky style stuff that would 
//instantly break every other connected component :)

//PLS TOUCH AS MUCH AS YOU WANT
//Modify the formula in the props.editOpacity section. 
//rn its just 25% initial and grows by 7.5% each click
const ColourButton = styled.button`
  text-align: center;
  position: relative;
  background: rgba(${props => props.buttonColorR}, ${props => props.buttonColorG}, ${props => props.buttonColorB}, ${props => props.editOpacity * 0.075 + 0.25});
  width: 100%;
  padding: 30px 30px;
  &::before{
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

class App extends Component {
  //Change initial state values if you want
  //make something darker to start off or whatever
  state = {
    redO:0,
    greenO:0,
    yellowO:0,
    blueO:0,
    pageSwitcherIndex: 0,
  }

  //Handlers for darkening the cards and setting state
  //terrible code, its just the same function 4 times
  //but it was too much effort to make this better
  //but yeah feel free to change the increments, maybe go .5 or 2 or whatever
  onClickRed = () => {
    this.setState({ redO: this.state.redO + 1 });
    this.setState({ pageSwitcherIndex: 1 });
  }
  onClickGreen = () => {
    this.setState({ greenO: this.state.greenO + 1 });
    this.setState({ pageSwitcherIndex: 2 });
  }
  onClickYellow = () => {
    this.setState({ yellowO: this.state.redO + 1 });
    this.setState({ pageSwitcherIndex: 3 });
  }
  onClickBlue = () => {
    this.setState({ blueO: this.state.blueO + 1 });
    this.setState({ pageSwitcherIndex: 4 });
  }
  backButtonClick = () => {
    this.setState({ pageSwitcherIndex: 0 });
  }

  render() {
    //Just sets pager on a state dependant IF 
    //Decides whether you see card content or buttons
    let pager;
    if (this.state.pageSwitcherIndex === 0) {
      pager = 
      <ButtonsContainer>
        <ButtonContainer>
          <ColourButton 
            buttonColorR={255} 
            buttonColorG={0} 
            buttonColorB={0} 
            editOpacity={this.state.redO} 
            onClick={this.onClickRed}
          >
            <Content>TEXT #1</Content>
          </ColourButton>
          <MiddleButtons>
            <ColourButton 
              buttonColorR={0} 
              buttonColorG={255} 
              buttonColorB={0} 
              editOpacity={this.state.greenO} 
              onClick={this.onClickGreen}>
            <Content>TEXT #2</Content>
            </ColourButton>
            <ColourButton 
              buttonColorR={255} 
              buttonColorG={255} 
              buttonColorB={0} 
              editOpacity={this.state.yellowO} 
              onClick={this.onClickYellow}>
            <Content>TEXT #3</Content>
            </ColourButton>
          </MiddleButtons>
          <ColourButton 
            buttonColorR={0} 
            buttonColorG={0} 
            buttonColorB={255} 
            editOpacity={this.state.blueO} 
            onClick={this.onClickBlue}>
            <Content>TEXT #4</Content>
          </ColourButton>
        </ButtonContainer>
      </ButtonsContainer>;
    } else if (this.state.pageSwitcherIndex === 1) {
      pager = 
        <div>
          <button onClick={this.backButtonClick}></button>
          HELLO
        </div>;//<FlippyCardContainerR/>;
    } else if (this.state.pageSwitcherIndex === 2) {
      pager = <div>ALOHA</div>;//<FlippyCardContainerG/>;
    } else if (this.state.pageSwitcherIndex === 3) {
      pager = <div>SHALOM</div>;//<FlippyCardContainerB/>;
    } else if (this.state.pageSwitcherIndex === 4) {
      pager = <div>NAMASTE</div>;//<FlippyCardContainerY/>;
    }
    return (
      <div className="App">
        {/*
          The JSON.stringify just lets you see the state variables in the background. 
          comment out the line, it's not necessary, but it does show you the number of clicks
          so you get a relative sclae of how much darker the button gets
        */}
        <pre>
          <code>
            {JSON.stringify(this.state, undefined, 2)}
          </code>
        </pre>
        {/*
          pager is you content switcher for the page. literally the only important line, dont delete
          delete anything else, but if this goes you will see NOTHING
        */}
        {pager}
      </div>
    );
  }
}

export default App;
