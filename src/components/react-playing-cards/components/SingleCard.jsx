// Single card to rule them all
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    RankA,
    Rank2,
    Rank3,
    Rank4,
    Rank5,
    Rank6,
    Rank7,
    Rank8,
    Rank9,
    RankT,
    RankJ,
    RankQ,
    RankK,
    ClubIcon,
    DiamondIcon,
    HeartIcon,
    PokerFace,
    IconSpade,
    CardFront,
} from './cardElements'

const styles = (theme) => ({
    singleCard: {
        position: 'relative',
    },
    rankIcon: {
        position: 'absolute',
        width: '25%',
        left: '19%',
        top: '8%',
    },
    suitIcon: {
        position: 'absolute',
        width: '34%',
        left: '50%',
        top: '8%',
    },
    advert: {
        position: 'absolute',
        width: '90%',
        left: '5%',
        bottom: '4%',
    },
    advertImage: {
        width: '100%'
    },
});

class SingleCard extends Component {

    render() {
        const {
            classes,
            cardObj,
            whitelabel,
        } = this.props;

        // console.log ('cardObj,', cardObj)

        const {colours} = whitelabel;
        let suit = cardObj.suit
        
        let suitColour;
        let suitIcon = <PokerFace c={colours} and={suitColour} />;

        switch (cardObj.suit) {
            case 'C':
                suit = "Clubs";
                suitColour = colours.blackSuit;
                suitIcon = <ClubIcon c={colours} />;
                break;
            case 'D':
                suit = "Diamonds";
                suitColour = colours.redSuit;
                suitIcon = <DiamondIcon c={colours} />;
                break;
            case 'H':
                suit = "Hearts";
                suitColour = colours.redSuit;
                suitIcon = <HeartIcon c={colours} />;
                break;
            case 'S':
                suit = "Spades";
                suitColour = colours.blackSuit;
                suitIcon = <IconSpade c={colours} />;
                break;

            default:
                suit = "Bad Suit";
        }

        let rank;
        let rankIcon = <PokerFace c={colours} />;
        switch (cardObj.rank) {
            case 'A':
                rank = "Ace";
                rankIcon = <RankA c={colours} suit={suit} />;
                break;
            case '2':
                rank = "Two";
                rankIcon = <Rank2 c={colours} suit={suit} />;
                break;
            case '3':
                rank = "Three";
                rankIcon = <Rank3 c={colours} suit={suit} />;
                break;
            case '4':
                rank = "Four";
                rankIcon = <Rank4 c={colours} suit={suit} />;
                break;
            case '5':
                rank = "Five";
                rankIcon = <Rank5 c={colours} suit={suit} />;
                break;
            case '6':
                rank = "Six";
                rankIcon = <Rank6 c={colours} suit={suit} />;
                break;
            case '7':
                rank = "Seven";
                rankIcon = <Rank7 c={colours} suit={suit} />;
                break;
            case '8':
                rank = "Eight";
                rankIcon = <Rank8 c={colours} suit={suit} />;
                break;
            case '9':
                rank = "Nine";
                rankIcon = <Rank9 c={colours} suit={suit} />;
                break;
            case 'T':
                rank = "Ten";
                rankIcon = <RankT c={colours} suit={suit} />;
                break;
            case 'J':
                rank = "Jack";
                rankIcon = <RankJ c={colours} suit={suit} />;
                break;
            case 'Q':
                rank = "Queen";
                rankIcon = <RankQ c={colours} suit={suit} />;
                break;
            case 'K':
                rank = "King";
                rankIcon = <RankK c={colours} suit={suit} />;
                break;
            default:
                rank = "Bad Rank";
        }
        console.log ('rank', rank);
        return (
            <div
                className={cn(classes.singleCard)}
            >
                <div className={cn(classes.rankIcon)}>
                    {rankIcon}
                </div>

                <div className={cn(classes.suitIcon)}>
                    {suitIcon}
                </div>

                <div className={cn(classes.advert)}>
                    <img
                        src={`/adverts/Advert.png`}
                        className={cn(classes.advertImage)}
                        alt={`Advert`}
                    />
                </div>

                <div className={cn(classes.cardFront)}>
                    <CardFront 
                        c={colours} 
                        suit={suit} 
                        rank={rank} 
                    />
                </div>

            </div >
        );
    }
}

export default withStyles(styles)(SingleCard);
