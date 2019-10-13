// Single card to rule them all
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    RankAce,
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
    SpadeIcon,
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
        } = this.props;
        const c = cardObj.colours;
        let suit;
        let suitColour;
        let suitIcon = <PokerFace c={c} and={suitColour} />;
        switch (cardObj.card[0]) {
            case 'C':
                suit = "Clubs";
                suitColour = c.black;
                suitIcon = <ClubIcon c={c} />;
                break;
            case 'D':
                suit = "Diamonds";
                suitColour = c.red;
                suitIcon = <DiamondIcon c={c} />;
                break;
            case 'H':
                suit = "Hearts";
                suitColour = c.red;
                suitIcon = <HeartIcon c={c} />;
                break;
            case 'S':
                suit = "Spades";
                suitColour = c.black;
                suitIcon = <SpadeIcon c={c} />;
                break;

            default:
                suit = "Bad Suit";
        }
        let rank;
        let rankIcon = <PokerFace c={c} />;
        switch (cardObj.card[1]) {
            case 'A':
                rank = "Ace";
                rankIcon = <RankAce c={c} suit={suit} />;
                break;
            case '2':
                rank = "Two";
                rankIcon = <Rank2 c={c} suit={suit} />;
                break;
            case '3':
                rank = "Three";
                rankIcon = <Rank3 c={c} suit={suit} />;
                break;
            case '4':
                rank = "Four";
                rankIcon = <Rank4 c={c} suit={suit} />;
                break;
            case '5':
                rank = "Five";
                rankIcon = <Rank5 c={c} suit={suit} />;
                break;
            case '6':
                rank = "Six";
                rankIcon = <Rank6 c={c} suit={suit} />;
                break;
            case '7':
                rank = "Seven";
                rankIcon = <Rank7 c={c} suit={suit} />;
                break;
            case '8':
                rank = "Eight";
                rankIcon = <Rank8 c={c} suit={suit} />;
                break;
            case '9':
                rank = "Nine";
                rankIcon = <Rank9 c={c} suit={suit} />;
                break;
            case 'T':
                rank = "Ten";
                rankIcon = <RankT c={c} suit={suit} />;
                break;
            case 'J':
                rank = "Jack";
                rankIcon = <RankJ c={c} suit={suit} />;
                break;
            case 'Q':
                rank = "Queen";
                rankIcon = <RankQ c={c} suit={suit} />;
                break;
            case 'K':
                rank = "King";
                rankIcon = <RankK c={c} suit={suit} />;
                break;
            default:
                rank = "Bad Rank";
        }



        return (
            <div
                className={cn(classes.singleCard)}
                id={cardObj.card}
            >

                <div className={cn(classes.rankIcon)}>
                    {rankIcon}
                </div>

                <div className={cn(classes.suitIcon)}>
                    {suitIcon}
                </div>

                <div className={cn(classes.advert)}>
                    <img
                        className={cn(classes.advertImage)}
                        alt={`Advert`}
                        src={`/adverts/Advert.png`}

                    />
                </div>

                <div className={cn(classes.cardFront)}>
                    <CardFront c={c} suit={suit} rank={rank} />
                </div>

            </div >
        );
    }
}

export default withStyles(styles)(SingleCard);








/*

const cardName = `${rank} of ${suit}`;

<Typography variant={`h5`} className={cn(classes.padded)}>
                    {cardName}
                </Typography>
<div className={cn(classes.padded)}>
                    <Divider />
                    <div className={cn(classes.padded)}>
                        <Grid container >
                            <Grid item xs={11}>
                                <Typography variant={`body1`}>
                                    Card Background Colour
                            </Typography>
                                <Typography variant={`body2`}>
                                    {c.bgLight}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <div className={cn(classes.colorSwatch)} style={{
                                    background: c.bgLight
                                }} />
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <div className={cn(classes.padded)}>

                    </div>
                    <Divider />
                </div>


            // onMouseEnter={() => {
            //     animateCard(cardObj.card, 'burp', this.animatingFalse);
            // }}
            // onMouseLeave={() => {
            //     animateCard(cardObj.card, 'reset', this.animatingFalse);
            // }}
            // onClick={(e) => {
            //     e.preventDefault();
            //     animateCard(cardObj.card, 'flipIn', this.halfFlipped);
            // }}

*/