
import React, { Component } from 'react';
// import debounce from 'debounce';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Game.Style';
import {
    CssBaseline
} from '@material-ui/core/';
import {
    Barn,
    ChuckenGotchi,
    Cloud,
} from '../graphics';
import ReactAudioPlayer from 'react-audio-player';
// import { scudCloud } from './greensock';

const mp3 = {
    title: `Chicken Impossible`,
    description: `Funny Mission Impossible Chicken Theme`,
    photo: `https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/jpg%2Fchicken-impossible.jpg?alt=media&token=89632f43-0c1b-40a4-a6be-ad769bbdf8dc`,
    url: `https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/mp3%2Fchicken_impossible.mp3?alt=media&token=eeba9ebc-89a3-4678-a010-b767dd6e643b`,
    bytes: 435930,
    seconds: 27
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.nextZIndex = 1;
        this.state = {
            viewport: {
                orientation: `portrait`,
                innerWidth: 360,
                innerHeight: 600,
            },
            time: {
                unix: Date.now()
            }
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getNextZIndex() {
        const { nextZIndex } = this.state;
        console.log('getNextZIndex', nextZIndex)
        return null;
    }

    updateDimensions = () => {
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        let orientation;
        innerWidth < innerHeight ? orientation = `portrait` : orientation = `landscape`;
        this.setState({
            viewport: {
                orientation,
                innerWidth,
                innerHeight,
            }
        });
    };

    // scudClouds = (payload) => {
    //     //console.log('scudClouds()', payload);
    //     scudCloud(`cloud1`);
    // }

    render() {
        const {
            classes
        } = this.props;
        const { viewport } = this.state;
        // console.log(viewport)
        return (
            <div className={cn(classes.game)}>
                <CssBaseline />

                <div className={cn(classes.gameContainer)}>

                    <ReactAudioPlayer
                        style={{
                            zIndex: 30000,
                            top: 8,
                            left: 8,
                        }}
                        className={cn(classes.audio)}
                        src={mp3.url}
                        autoPlay
                        controls
                    />

                    <ChuckenGotchi
                        style={{
                            zIndex: 50000,
                            bottom: 75,
                        }}
                        className={cn(classes.chuckenGotchi)}
                        id={`chucken-gotchi`}
                        colours={{
                            stroke: `rgba(0, 0, 0, 0.75)`,
                            fill: `rgba(255, 255, 255, 0.95)`,
                        }}
                    />

                    <div
                        className={cn(classes.sky)} />
                    <div
                        style={{ zIndex: 4 }}
                        className={cn(classes.ground)} />

                    <div
                        style={{
                            zIndex: 100001,
                            bottom: 8,
                            left: 8
                        }}
                        className={cn(classes.viewportInfo)}>

                        <div
                            style={{ zIndex: 100002 }}
                            className={cn()}>
                            {viewport.orientation} ({viewport.innerWidth}x{viewport.innerHeight}px)
                        </div>

                    </div>
                    <Cloud
                        style={{
                            zIndex: 5,
                            top: 80,
                            left: 150,
                        }}
                        className={cn(classes.cloud1, classes.startPoint)}
                        id={`cloud1`}
                        cloud={{
                            backgroundColor: `rgba(255, 255, 255, 0.75)`,
                        }} />
                    <Cloud
                        style={{
                            zIndex: 10,
                            top: 100,
                            left: 10,

                        }}
                        className={cn(classes.cloud2, classes.startPoint)}
                        id={`cloud2`}
                        cloud={{
                            backgroundColor: `rgba(255, 255, 255, 0.75)`,
                        }} />

                    <Barn
                        style={{
                            zIndex: 16,
                            top: `25%`,
                            left: `15%`,
                        }}
                        className={cn(classes.barn, classes.startPoint)} />



                </div>
            </div>
        );
    }
}
export default (
    withStyles(styles, { withTheme: true })(Game)
);

/*
    chickenImpossible: {
      title: `Chicken Impossible`,
      description: `Funny Mission Impossible Chicken Theme`,
      photo: `https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/jpg%2Fchicken-impossible.jpg?alt=media&token=89632f43-0c1b-40a4-a6be-ad769bbdf8dc`,
      url: `https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/mp3%2Fchicken_impossible.mp3?alt=media&token=eeba9ebc-89a3-4678-a010-b767dd6e643b`,
      bytes: 435930,
      seconds: 27
    },
*/