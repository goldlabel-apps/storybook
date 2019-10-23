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
            height: '100vh',
            // border: '1px solid #eee',
            position: 'relative',
            // 
        },
        element: {
            position: 'absolute',
            zIndex: 1000000
        },
        sky: {
            height: '44vh',
            position: 'relative',
            backgroundImage: 'linear-gradient(skyblue, teal)',
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
            <div
                id={`game`}
                className={cn(classes.cardTableContainer)}>
                <Cloud className={cn(classes.element)} />
                <div className={cn(classes.sky)} />
                <div className={cn(classes.ground)} />
            </div>
        </MuiThemeProvider>
    );
}
