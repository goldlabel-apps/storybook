import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';

import {
    SingleCard,
} from './components';
import {animateCard} from './utils/greensock';
// import cn from 'classnames';
import theme from './style/theme';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
    // container: {
    //     margin: 'auto',
    //     maxWidth: 800,
    // }
});

class PlayingCards extends Component {

    state = {
        currentCard: {
            suit: this.props.suit,
            rank: this.props.rank,
        },
        whitelabel:{
            title: `Whitelabel Project Title`,
            advert: {
                image: `advert_default.png`
            },
            colours: {
                redSuit: this.props.redSuit,
                blackSuit: this.props.blackSuit,
                face: this.props.face,
                back: this.props.back,
                border: this.props.border
            }
        },
    }

    componentDidMount(){
        const { title } = this.state.whitelabel;
        window.document.title = title;
        this.playAnimation(`selectedCard`);
        const { 
            redSuit,
            blackSuit,
            face,
            back,
            border,
            suit,
            rank,
            advert
        } = this.props;
        this.setState({whitelabel:{
            ...this.state.whitelabel,
            advert,
            currentCard:{
                suit,
                rank
            },
            colours: {
                redSuit,
                blackSuit,
                face,
                back,
                border
            }
        }})
    }

    componentWillUpdate(nextProps, nextState) {
        
        if (nextProps !== this.props) {

            const { 
                redSuit,
                blackSuit,
                face,
                back,
                border,
                suit,
                rank,
                advert
            } = nextProps;
            
            this.setState({
                advert,
                currentCard: {
                    suit,
                    rank
                },
                whitelabel:{
                    ...this.state.whitelabel,
                    colours: {
                        redSuit,
                        blackSuit,
                        face,
                        back,
                        border
                    }
                }
            })
        }
    }

    flipCard = () => {
        // let facing = `down`;
        // if (this.state.facing !== 'up') {
        //     facing = `up`;
        // }
        // this.setState({ facing });
    }

    playAnimation = (divId) => {
        animateCard(divId, `shrink`, () => {
            // console.log ('Animation complete');
        })
    }

    render() {
        // console.log (this.props);
        // const { classes } = this.props;
        const { 
            currentCard, 
            whitelabel,
            advert,
        } = this.state;

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                    <div id={`selectedCard`}>
                        <SingleCard 
                            advert={advert}
                            cardObj={currentCard}
                            whitelabel={whitelabel} 
                        />
                    </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(PlayingCards);
