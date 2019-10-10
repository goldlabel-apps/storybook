
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Egg,
  Fertilised,
  Hen,
  Chick,
  PointOfLay,
  Pullet,
} from './';
import {
  Grid,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  chucken:{
    maxHeight: 125,
  }
}));

export default function Chuckens(props) {
  const classes = useStyles();
  const colour = {};
  const gridWidth = 6;

  return (
    <div className={classes.grow}>
      <Grid container>
        <Grid item xs={gridWidth}>
            <Egg 
              className={classes.chucken} 
              colour={colour}
            />
        </Grid>
        <Grid item xs={gridWidth}>
          <Fertilised 
            className={classes.chucken} 
            colour={colour} 
          />
        </Grid>
        <Grid item xs={gridWidth}>
          <Chick 
            className={classes.chucken} 
            colour={colour} 
          />
        </Grid>
        <Grid item xs={gridWidth}>
          <Pullet 
            className={classes.chucken} 
            colour={colour} 
          />
        </Grid>
        <Grid item xs={gridWidth}>
          <PointOfLay 
            className={classes.chucken} 
            colour={colour} 
          />
        </Grid>
        <Grid item xs={gridWidth}>
          <Hen 
            className={classes.chucken} 
            colour={colour} 
          />
        </Grid>
      </Grid>
    </div>
  );
}

