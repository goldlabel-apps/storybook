import React from "react";
const RankAce = props => {
    let suitColour;
    const { c, suit } = props;
    switch (suit) {
        case 'Clubs':
            suitColour = c.black;
            break;
        case 'Diamonds':
            suitColour = c.red;
            break;
        case 'Hearts':
            suitColour = c.red;
            break;
        case 'Spades':
            suitColour = c.black;
            break;
        default:
            suitColour = `#ccc`;
    }
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="RankAce" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M12.562,21.793 L8.495,0.026 L6.306,0 L6.31,0.015 L5.765,0.012 L1.708,21.793 L0.003,21.794 L0,24.096 L5.45,24.096 L5.453,21.793 L3.881,21.793 L4.505,18.459 L9.767,18.451 L10.391,21.793 L8.724,21.791 L8.72,24.094 L14.17,24.096 L14.173,21.793 L12.562,21.793 Z M4.974,15.959 L7.141,4.398 L9.3,15.953 L4.974,15.959 L4.974,15.959 Z" id="Fill-6" fill={suitColour}></path>
            </g>
        </svg >
    )
};
export default RankAce;
