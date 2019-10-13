
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    // Button,
    AppBar,
    Fab,
    // Avatar,
    // IconButton,
    Toolbar,
    // Typography,
} from '@material-ui/core/';
import IconFlipCard from '@material-ui/icons/RefreshTwoTone';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    bottombar: {
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

class Bottombar extends Component {
    render() {
        const { classes, fabAction } = this.props;
        return (
            <div className={cn(classes.bottombar)}>
                <AppBar
                    position="fixed"
                    color="secondary"
                    className={classes.appBar}>
                    <Toolbar>
                        {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton> */}
                        <Fab
                            color={`primary`}
                            aria-label={`Flip card`}
                            className={classes.fabButton}
                            onClick={() => {
                                fabAction()
                            }}>
                            <IconFlipCard />
                        </Fab>
                        <div className={classes.grow} />
                        {/* <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton> */}
                    </Toolbar>
                </AppBar>

                {/* <Button
                        className={cn(classes.footerBtn)}
                        variant={`contained`}
                        color={`secondary`}
                        onClick={() => {
                            window.location.assign('https://listingslab-software.github.io/react-playing-cards/');
                        }}>
                        Docs
                    </Button>
                    <Button
                        className={cn(classes.footerBtn)}
                        variant={`contained`}
                        color={`primary`}
                        onClick={() => {
                            window.location.assign('https://github.com/listingslab-software/react-playing-cards');
                        }}>
                        <GithubIcon /> GitHub
                    </Button> */}
            </div>
        );
    }
}

export default withStyles(styles)(Bottombar);
