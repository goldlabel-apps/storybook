import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../common/style/theme';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Container,
    CssBaseline
} from '@material-ui/core/';

const styles = theme => ({
    cardTableContainer: {
        height: '100vh',
        // border: '1px solid #222',
        // backgroundImage: 'linear-gradient(limegreen, darkgreen )',
        background: 'rgba(255,255,255, 0.05)'
    },
});

class PokerClient extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
                <div className={cn(classes.cardTableContainer)}>
                    Poker Client
                </div>
            </MuiThemeProvider>
        );    
    }
}

export default withStyles(styles, { withTheme: true })(PokerClient);
