import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import {
  Grid,
} from '@material-ui/core/';
import { 
  Biker,
  Chix,
  Dapper,
} from './characters/';

const useStyles = makeStyles(theme => ({
  characters: {
    // border: '1px solid red',
  },
}));

export default function Characters() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.characters}>
      <Grid container>
        <Grid item xs={1}>
          <Biker />
        </Grid>
        <Grid item xs={1}>
          <Chix />
        </Grid>
        <Grid item xs={1}>
          <Dapper />
        </Grid>
      </Grid>
      
    </div>
  );
}