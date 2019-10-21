import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../../common/style/theme';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Container,
    CssBaseline
} from '@material-ui/core/';

import {
    Farmyard
} from '../graphics';

export default function Game(props) {
    const useStyles = makeStyles(theme => ({
        cardTableContainer: {
            height: '100vh',
            border: '1px solid #222',
            backgroundImage: 'linear-gradient(limegreen, darkgreen )',
        },
        graphic: {
            maxHeight: '99vh',
        }
    }));

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <Container
                id={`game`}
                className={cn(classes.cardTableContainer)}>
                <Farmyard className={cn(classes.graphic)} />
            </Container>
        </MuiThemeProvider>
    );
}
