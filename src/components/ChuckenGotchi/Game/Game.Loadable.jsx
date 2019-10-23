import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../../common/style/theme';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline
} from '@material-ui/core/';
import {
    Cloud
} from '../graphics';
// import { scudCloud } from './greensock';

export default function Game(props) {
    const useStyles = makeStyles(theme => ({
        cardTableContainer: {
            position: 'relative',
            height: '100vh',
            border: '1px solid rgba(255,255,255,0.5)',
        },
        sky: {
            position: 'relative',
            height: '49vh',
            backgroundImage: 'linear-gradient(skyblue, teal)',
        },
        cloud1: {
            position: 'absolute',
            zIndex: 1,
            transform: 'scale(0.85)',
            top: '5%',
            left: '20%'
        },
        cloud2: {
            position: 'absolute',
            transform: 'scale(0.75)',
            zIndex: 2,
            top: '0%',
            left: '30%'
        },
        ground: {
            height: '66vh',
            position: 'relative',
            backgroundImage: 'linear-gradient(darkgreen, limegreen )',
        }
    }));

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <div className={cn(classes.cardTableContainer)}>
                <div className={cn(classes.sky)}>
                    <Cloud cloud={{
                        backgroundColor: `rgba(255, 255, 255, 0.5)`,
                    }} className={cn(classes.cloud1)} />
                    <Cloud cloud={{
                        backgroundColor: `rgba(255, 255, 255, 0.5)`,
                    }} className={cn(classes.cloud2)} />
                </div>
                <div className={cn(classes.ground)} />
            </div>
        </MuiThemeProvider>
    );
}
