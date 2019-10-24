
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
    Cloud
} from '../graphics';
// import { scudCloud } from './greensock';

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

                    <div
                        className={cn(classes.sky)} />
                    <div
                        style={{ zIndex: 4 }}
                        className={cn(classes.ground)} />

                    <div
                        style={{
                            zIndex: 100001,
                            bottom: 10,
                            right: 5
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
                            top: 25,
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
