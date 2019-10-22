import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../common/style/theme';
import { withStyles } from '@material-ui/core/styles';
// import cn from 'classnames';
import {
    // Card,
    Avatar,
    CssBaseline,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core/';
import InboxIcon from '@material-ui/icons/VolumeUp';
import listMP3 from './listMP3';
import ReactAudioPlayer from 'react-audio-player';

const styles = theme => ({
    gridItem: {
        border: '1px solid #ccc',
    },
});

class MP3 extends Component {

    render() {
        const {
            titleText,
        } = this.props;
        const soundArr = [];
        let currentMP3 = null;
        for (const section in listMP3) {
            const sectionObj = listMP3[section];
            for (const mp3 in sectionObj) {
                if (currentMP3 === null) {
                    currentMP3 = sectionObj[mp3];
                }
                soundArr.push(sectionObj[mp3]);
            }
        }

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <CssBaseline />

                <Typography variant={`h6`}>
                    {titleText}
                </Typography>

                {console.log('currentMP3', currentMP3.url)}

                <ReactAudioPlayer
                    src={currentMP3.url}
                    autoPlay
                    controls
                />

                <List component="nav" aria-label="mp3 list">
                    {soundArr.map((item, i) => {
                        return (
                            <ListItem key={`mp3_${i}`} button
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(item)
                                }}
                            >
                                <ListItemIcon>
                                    <InboxIcon color={`primary`} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.title}
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
