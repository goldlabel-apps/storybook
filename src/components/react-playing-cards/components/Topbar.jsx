import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import {
    AppBar,
    // Avatar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    // Typography,
} from '@material-ui/core/';
import ExternalLinkIcon from '@material-ui/icons/Star';
import IconDrawer from '@material-ui/icons/Star';
// import {
//     ThemeChanger,
// } from './';

const styles = theme => ({
    list: {
        width: 250,
    },
    appBar: {
        background: 'none',
        boxShadow: 'none',
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
    grow: {
        flexGrow: 1
    }
});

class Topbar extends Component {

    state = {
        drawer: false,
    }

    closeDrawer = () => {
        this.setState({ drawer: false });
    }

    openDrawer = () => {
        this.setState({ drawer: true });
    }

    render() {
        const { classes } = this.props;
        const { drawer } = this.state;
        // console.log('drawer', drawer)
        return (
            <React.Fragment>
                <Drawer
                    anchor={`right`}
                    open={drawer}
                    onClose={this.closeDrawer}>
                    <div
                        className={classes.list}
                        role="presentation"
                        onKeyDown={this.closeDrawer}>
                        <List>
                            <ListItem
                                button
                                onClick={() => {
                                    window.open('https://react-playing-cards.com', '_self');
                                    this.closeDrawer();
                                }}>
                                <ListItemIcon>
                                    <ExternalLinkIcon color={`primary`} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Demo`}
                                    secondary={`hosted on Firebase`}
                                />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    window.open('https://github.com/listingslab-software/react-playing-cards', '_blank');
                                    this.closeDrawer();
                                }}>
                                <ListItemIcon>
                                    <ExternalLinkIcon color={`primary`} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Github`}
                                    secondary={`Open Source Repo`}
                                />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    window.open('https://listingslab-software.github.io/react-playing-cards/', '_blank');
                                    this.closeDrawer();
                                }}>
                                <ListItemIcon>
                                    <ExternalLinkIcon color={`primary`} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Docs`}
                                    secondary={`github.io`}
                                />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>

                <AppBar
                    className={cn(classes.appBar)}
                    position={`static`}
                    color={`default`}>
                    <Toolbar>
                        {/* <IconButton
                            onClick={() => {
                                window.location.assign('/');
                            }}>
                            <Avatar src={`/themes/${window.pwaConfig.brand.id}/logo192.png`} />
                        </IconButton>
                        <Typography variant="button" className={cn(classes.title)}>
                            {window.pwaConfig.brand.title}
                        </Typography> */}
                        {/* <ThemeChanger /> */}
                        <div className={cn(classes.grow)} />
                        <IconButton
                            color={`inherit`}
                            onClick={this.openDrawer}
                        >
                            <IconDrawer />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </React.Fragment >
        );
    }
}

export default withStyles(styles)(Topbar);
