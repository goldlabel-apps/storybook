import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SVGTimeMachine from './SVGTimeMachine';
import {
  AppBar,
  Button,
  // IconButton,
  Toolbar,
  // Typography,
} from '@material-ui/core/';
import IconPlay from '@material-ui/icons/ArrowForward';
import IconStop from '@material-ui/icons/Stop';
const useStyles = makeStyles(theme => ({
  timeMachine: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
          <Button 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu">
            <IconPlay /> Play
          </Button>
          <div className={classes.grow} />
          <Button 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu">
            <IconStop /> Stop
          </Button>
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