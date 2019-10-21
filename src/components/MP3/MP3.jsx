import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../common/style/theme';
import { withStyles } from '@material-ui/core/styles';
// import cn from 'classnames';
import {
    CssBaseline,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/';
import mp3 from '../../common/data/mp3';

import InboxIcon from '@material-ui/icons/VolumeUp';

const styles = theme => ({
    gridItem: {
        border: '1px solid #ccc',
    },
});

class MP3 extends Component {

    render() {
        // const {
        //     classes,
        // } = this.props;
        const soundArr = [];
        for (const section in mp3) {
            const sectionObj = mp3[section];
            for (const mp3 in sectionObj) {
                soundArr.push(sectionObj[mp3]);
            }
        }
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <CssBaseline />
                <List component="nav" aria-label="mp3 list">
                    { soundArr.map ((item, i) => {
                        return (
                            <ListItem key={`mp3_${i}`} button>
                                <ListItemIcon>
                                    <InboxIcon color={`secondary`} />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={item.title}
                                    secondary={item.description}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </MuiThemeProvider>
        );    
    }
}

export default withStyles(styles, { withTheme: true })(MP3);
