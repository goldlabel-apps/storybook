import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';

import {
    SingleCard,
} from './components';
import {animateCard} from './utils/greensock';
import theme from './style/theme';
import { withStyles } from '@material-ui/styles';

const styles = () => ({});

class PlayingCards extends Component {

    state = {
        currentCard: {
            suit: this.props.suit,
            rank: this.props.rank,
            facing: this.props.facing
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
        const { 
            redSuit,
            blackSuit,
            face,
            back,
            border,
            suit,
            rank,
            advert,
            facing
        } = this.props;
        this.setState({whitelabel:{
            ...this.state.whitelabel,
            advert,
            currentCard:{
                suit,
                rank,
                facing
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
                advert,
                facing
            } = nextProps;
            this.setState({
                advert,
                currentCard: {
                    suit,
                    rank,
                    facing
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

    render() {
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
