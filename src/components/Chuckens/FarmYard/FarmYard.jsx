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
    FarmyardSVG
} from '../graphics';

export default function Farmyard(props) {
    const useStyles = makeStyles(theme => ({
        cardTableContainer: {
            height: '100vh',
            border: '1px solid white',
        },
    }));

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <Container id={`card-table`} className={cn(classes.cardTableContainer)}>
                <FarmyardSVG />
            </Container>
        </MuiThemeProvider>
    );
}
