import React from 'react';
import ReactCardFlipper from 'react-card-flipper';
import PropTypes from 'prop-types';
import './App.css';
import styled from 'styled-components';

const InnerCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    height: 70%;
    width: 70%;
    background: ${props=>props.cardColor};
`;

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.frontText,
            ...props.backText,
            ...props.cardColor,
        };
    }

    //Change card sizes here if you want
    render() {
        const frontText = this.props.frontText;
        const backText = this.props.backText;
        const bgc = this.props.cardColor;
        return (
            <div>
                <ReactCardFlipper 
                    width="200px" 
                    height="300px" 
                    behavior="click"
                >
                    <InnerCard cardColor={bgc}>
                        <h3>{frontText}</h3>
                    </InnerCard>
                    <InnerCard cardColor={bgc}>
                        <h3>{backText}</h3>
                    </InnerCard>
                </ReactCardFlipper>
            </div>
        );
    }
}

Card.propTypes = {
    frontText: PropTypes.string,
    backtext: PropTypes.string,
    cardColor: PropTypes.string,
}

export default Card;