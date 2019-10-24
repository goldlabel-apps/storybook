import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        background: 'rgba(255,255,255, 0.1)',
        borderRadius: theme.spacing(),
        // maxWidth: 360,
        border: '1px solid rgba(255,255,255, 0.15)'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '50%'

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function Player(props) {
    const { mp3 } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.details}>
                <Typography component="h5" variant="h5">
                    {mp3.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {mp3.description}
                </Typography>
                <ReactAudioPlayer
                    src={mp3.url}
                    autoPlay
                    controls
                />
            </div>
        </React.Fragment>
    );
}
