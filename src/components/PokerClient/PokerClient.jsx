import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../common/style/theme';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline
} from '@material-ui/core/';
import {
    Topbar
} from "./";
import brands from '../../common/data/brands';

const styles = theme => ({
    cardTableContainer: {
        height: 'calc(100vh - 65px)',
        // border: '1px solid #333',
        // backgroundImage: 'linear-gradient(limegreen, darkgreen )',
        // background: 'rgba(255,255,255, 0.05)'
    },
});

class PokerClient extends Component {

    render() {
        const {
            classes,
        } = this.props;
        let brand = brands[this.props.brand];
        let brandedTheme = theme;
        const {
            primary,
            secondary,
            background,
        } = brand.colours.mui;
        theme.palette.primary.main = primary;
        theme.palette.secondary.main = secondary;
        theme.palette.background.default = background;
        return (
            <MuiThemeProvider theme={createMuiTheme(brandedTheme)}>
                <CssBaseline />
                <Topbar brand={brand} />
                <div className={cn(classes.cardTableContainer)}>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PokerClient);
