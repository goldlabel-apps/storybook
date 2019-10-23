
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './Game.Style';
import {
    CssBaseline
} from '@material-ui/core/';
import {
    Cloud
} from '../graphics';
import { scudCloud } from './greensock';

class Game extends Component {

    componentDidMount() {
        // console.log('Init Game');
        /* 
            Start clouds
        */
        this.scudClouds(`init`);
    }

    scudClouds = (payload) => {
        /* 
            Initialises the cloud scudding animation 
            from the greensock.js file 
        */
        //console.log('scudClouds()', payload);
        scudCloud(`cloud1`);
    }

    render() {
        const {
            classes
        } = this.props;

        return (
            <div className={cn(classes.game)}>
                <CssBaseline />
                <div className={cn(classes.gameContainer)}>
                    <div className={cn(classes.sky)}>
                        <Cloud
                            id={`cloud1`}
                            cloud={{
                                backgroundColor: `rgba(255, 255, 255, 0.5)`,
                            }} className={cn(classes.cloud1)} />
                        <Cloud
                            id={`cloud2`}
                            cloud={{
                                backgroundColor: `rgba(255, 255, 255, 0.5)`,
                            }} className={cn(classes.cloud2)} />
                    </div>
                    <div className={cn(classes.ground)} />
                </div>
            </div>
        );
    }
}
export default (
    withStyles(styles, { withTheme: true })(Game)
);
