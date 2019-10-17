// import {
//     CardBack,
//     CardFront,
//     FaceJack,
//     FaceQueen,
//     FaceKing,
//     IconClub,
//     IconDiamond,
//     IconHeart,
//     IconSpade,
//     Rank2,
//     Rank3,
//     Rank4,
//     Rank5,
//     Rank6,
//     Rank7,
//     Rank8,
//     Rank9,
//     RankA,
//     RankJ,
//     RankK,
//     RankQ,
//     RankT,
// } from './cardElements'
import {
    Card,
    Typography
} from '@material-ui/core/';
import React, { Component } from 'react';
import defaultCardObj from '../../common/data/defaultCardObj';
import cn from 'classnames';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    singleCard: {
        position: 'relative',
        maxWidth: 360,
        margin: 'auto'
    },
    rankIcon: {
        position: 'absolute',
        width: '25%',
        left: '17%',
        top: '8%',
    },
    suitIcon: {
        position: 'absolute',
        width: '35%',
        left: '52%',
        top: '8%',
    },
    lowerCard: {
        // 
        position: 'absolute',
        width: '90%',
        left: '5%',
        bottom: '4%',
    },
    faceCard: {
        width: '90%',
        height: '50%',
        overflow: 'hidden',
    },
    advertImage: {
        width: '100%'
    },
    card: {
        padding: '8px',
    }
});

class PlayingCard extends Component {

    state = {
        cardObj: this.props.cardObj || defaultCardObj,
    }

    componentDidUpdate(prevProps) {
        if (this.props.cardObj !== prevProps.cardObj) {
            this.setState({
                cardObj: this.props.cardObj
            })
        }
    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <div className={cn(classes.singleCard)}>
                <Card className={cn(classes.card)}>

                    <Typography>
                        facing: {this.state.facing}
                    </Typography>
                    {/* <Typography>
                        borderColour: {borderColour}
                    </Typography>
                    <Typography>
                        Face Colour: {faceColour}
                    </Typography>
                    <Typography>
                        Back Colour: {backColour}
                    </Typography>
                    <Typography>
                        Black Suit: {blackSuit}
                    </Typography>
                    <Typography>
                        Red Suit: {redSuit}
                    </Typography>
                    <Typography>
                        rank: {rank}
                    </Typography>
                    <Typography>
                        suit: {suit}
                    </Typography> */}

                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(PlayingCard);
