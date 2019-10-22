import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    // const theme = useTheme();
    // const photo = `https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/png%2Fredheart192.png?alt=media&token=eea3e969-ce28-495b-8f85-ccaa9b35ddb6`;
    // console.log(mp3)
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
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
                </CardContent>
                {/* <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div> */}
            </div>
            <CardMedia
                className={classes.cover}
                image={mp3.photo}
                title="Live from space album cover"
            />
        </Card>
    );
}
