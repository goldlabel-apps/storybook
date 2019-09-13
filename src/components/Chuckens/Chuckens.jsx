
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Hippy} from './';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function Chuckens(props) {
  const classes = useStyles();
  
  
  
  return (
    <div className={classes.grow}>
      <Hippy />
    </div>
  );
}

