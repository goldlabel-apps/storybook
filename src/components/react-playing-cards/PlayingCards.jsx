import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './style/theme';
import cn from 'classnames';
import {
    SingleCard,
} from './components';
import {animateCard} from './utils/greensock';

const styles = () => ({
    container: {
        margin: 'auto',
        maxWidth: 800,
    }
});

class PlayingCards extends Component {

    state = {
        whitelabel:{
            title: `Whitelabel Project Title`,
            advert: {
                image: `advert_default.png`
            },
            colours: {
                redSuit: `orange`,
                blackSuit: `green`,
                face: `#eee`,
                back: `blue`,
                border: `red`
            }
        },
        currentCard: {
            suit: `S`,
            rank: `A`,
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
            border
        } = this.props;
        this.setState({whitelabel:{
            ...this.state.whitelabel,
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
                border
            } = nextProps;
            
            this.setState({whitelabel:{
                ...this.state.whitelabel,
                colours: {
                    redSuit,
                    blackSuit,
                    face,
                    back,
                    border
                }
            }})
        }
    }

    componentDidUpdate(props){
        
        // storybook override
        // console.log (props);
        // this.playAnimation(`selectedCard`);

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

    onRankSelect = (rank) => {
        // this.setState({ rank });
    }

    onSuitSelect = (suit) => {
        // this.setState({ suit });
    }

    render() {
        // console.log (this.props);
        const { classes } = this.props;
        const { 
            currentCard, 
            whitelabel 
        } = this.state;

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className={cn(classes.container)}>
                <React.Fragment>
                    <div id={`selectedCard`}>
                        <SingleCard 
                            cardObj={currentCard}
                            whitelabel={whitelabel} 
                        />
                    </div>
                </React.Fragment>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(PlayingCards);
