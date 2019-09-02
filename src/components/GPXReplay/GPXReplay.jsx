
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gpxReplay: {
    flexGrow: 1,
  },
  menuIcon:{
    marginRight: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function GPXReplay(props) {
  const classes = useStyles();
  return (
    <div className={classes.gpxReplay}>
      gpx Replay
    </div>
  );
}

