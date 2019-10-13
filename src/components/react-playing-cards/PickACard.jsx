import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    SingleCard,
    SelectRadio,
} from './components';
import {animateCard} from './utils/greensock';

const styles = theme => ({
    controls: {
        padding: theme.spacing(2),
    },
    colorSwatch: {
        marginTop: 1,
        width: theme.spacing(2),
        height: theme.spacing(2),
        background: 'rgba(0,0,0,0.1)',
        border: '1px solid #ccc',
        borderRadius: theme.spacing(0.5),
    },
    colorSelect: {
        padding: theme.spacing(1),
    }
});

class PickACard extends Component {

    state = {
        facing: `up`,
        suit: `C`,
        rank: `A`
    }

    componentDidMount(){
        this.playAnimation(`selectedCard`);
    }

    componentDidUpdate(){
        // console.log ('componentDidUpdate');
        this.playAnimation(`selectedCard`);
    }
    
    playAnimation = (divId) => {
        animateCard(divId, `shrink`, () => {
            // console.log ('First animation complete');
        })
    }
    
    onRankSelect = (rank) => {
        this.setState({ rank });
    }

    onSuitSelect = (suit) => {
        this.setState({ suit });
    }

    flipCard = () => {
        let facing = `down`;
        if (this.state.facing !== 'up') {
            facing = `up`;
        }
        this.setState({ facing });
    }

    render() {
        let colours = {
            "red": "#d43943",
            "black": "#1c1c19",
            "bgLight": "white",
            "bgDark": "black",
            "borders": "#333"
        };
        const { classes } = this.props;
        const { rank, suit, facing } = this.state;
        // let suitColour = rankSuit({ action: `getSuitColour`, rank, suit }).value;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div id={`selected`} className={cn(classes.padded)}>
                            <div id={`selectedCard`}>
                                <SingleCard cardObj={{
                                    card: `${suit}${rank}`,
                                    facing,
                                    colours
                                }} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div id={`selects`} className={cn(classes.controls)}>
                            <Typography variant={`button`}>
                                {`Pick a Suit`}
                            </Typography>
                            <SelectRadio selectObj={{
                                id: `select-suit`,
                                title: `Pick a Suit`,
                                value: suit,
                                onSelect: this.onSuitSelect,
                                items: [
                                    { label: `Spades`, value: `S` },
                                    { label: `Clubs`, value: `C` },
                                    { label: `Diamonds`, value: `D` },
                                    { label: `Hearts`, value: `H` },
                                ]
                            }} />
                            
                            <Typography variant={`button`}>
                                {`Pick a Rank`}
                            </Typography>
                            <SelectRadio selectObj={{
                                id: `select-suit`,
                                title: `Rank`,
                                value: rank,
                                onSelect: this.onRankSelect,
                                items: [
                                    { label: `Two`, value: `2` },
                                    { label: `Three`, value: `3` },
                                    { label: `Four`, value: `4` },
                                    { label: `Five`, value: `5` },
                                    { label: `Six`, value: `6` },
                                    { label: `Seven`, value: `7` },
                                    { label: `Eight`, value: `8` },
                                    { label: `Nine`, value: `9` },
                                    { label: `Ten`, value: `T` },
                                    { label: `Jack`, value: `J` },
                                    { label: `Queen`, value: `Q` },
                                    { label: `King`, value: `K` },
                                    { label: `Ace`, value: `A` },
                                ]
                            }} />
                            
                            {/* <Typography variant={`button`}>
                                {`Colours`}
                            </Typography>
                            <Grid container className={cn(classes.colorSelect)}>
                                <Grid item xs={1}>
                                    <div className={cn(classes.colorSwatch)} style={{
                                        background: colours.cards.red
                                    }} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant={`body2`}>
                                        {`Diamonds & Hearts`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={cn(classes.colorSelect)}>
                                <Grid item xs={1}>
                                    <div className={cn(classes.colorSwatch)} style={{
                                        background: colours.cards.black
                                    }} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant={`body2`}>
                                        {`Spades & Clubs`}
                                    </Typography>
                                </Grid>
                            </Grid> */}
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PickACard);
