import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../../common/style/theme';
import brands from '../../../common/data/brands';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Container,
    CssBaseline
} from '@material-ui/core/';

export default function CardTable(props) {

    const { table } = brands[props.brand].colours;
    const useStyles = makeStyles(theme => ({
        cardTableContainer: {
            height: '100vh',
            backgroundColor: table.gradientLight,
            border: '1px solid ' + table.border,
            borderRadius: 16,
            backgroundImage: 'radial-gradient(' + table.gradientLight + ', ' + table.gradientDark + ')',
        },
    }));

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <Container id={`card-table`} className={cn(classes.cardTableContainer)}>
                Card Table.
            </Container>
        </MuiThemeProvider>
    );
}
