import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SVGTimeMachine from './SVGTimeMachine';
import {
  AppBar,
  // Button,
  IconButton,
  Toolbar,
  Tooltip,
} from '@material-ui/core/';

import IconPlay from '@material-ui/icons/PlayArrow';
import IconStop from '@material-ui/icons/Stop';
import IconPause from '@material-ui/icons/Pause';
import IconReplay from '@material-ui/icons/Replay';
import IconLoop from '@material-ui/icons/Loop';

const useStyles = makeStyles(theme => ({
  timeMachine: {
    flexGrow: 1,
  },
  menuIcon:{
    marginRight: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function TimeMachine(props) {
  const classes = useStyles();
  return (
    <div className={classes.timeMachine}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Play">
            <IconButton 
              variant={`contained`}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                console.log ('Play');
            }}>
              <IconPlay className={classes.menuIcon} />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Stop">
            <IconButton 
              variant={`contained`}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                console.log ('Stop')
              }}>
              <IconStop className={classes.menuIcon} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Pause">
            <IconButton 
              variant={`contained`}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                console.log ('Pause')
              }}>
              <IconPause className={classes.menuIcon} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Replay">
            <IconButton 
              variant={`contained`}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                console.log ('Replay')
              }}>
              <IconReplay className={classes.menuIcon} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Loop">
            <IconButton 
              variant={`contained`}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault();
                console.log ('Loop')
              }}>
              <IconLoop className={classes.menuIcon} />
            </IconButton>
          </Tooltip>

          <div className={classes.grow} />


        </Toolbar>
      </AppBar>

      <SVGTimeMachine />
    </div>
  );
}














/*
// import {
//   Grid,
//   Paper,
//   Typography,
// } from '@material-ui/core/';
*/