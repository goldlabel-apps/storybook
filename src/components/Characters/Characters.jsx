import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import cn from 'classnames';
import {
  Grid,
  // Card,
} from '@material-ui/core/';
import { 
  Biker,
  Chix,
  Dapper,
  Hippy,
  Hipster,
} from './characters/';
// import CharacterCard from './CharacterCard';

const useStyles = makeStyles(theme => ({
  characters: {
    // border: '1px solid red',
  },
  gridItem: {
    border: '1px solid #eee',
    // padding: theme.spacing(),
  }
}));

export default function Characters() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const gridWidth = 2;
  return (
    <div className={cn(classes.characters)} >
      <Grid container>
        <Grid item xs={1} className={cn()}></Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Biker />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Chix />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Dapper />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Hippy />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Hipster />
        </Grid>
        <Grid item xs={1} className={cn()}></Grid>
      </Grid>
    </div>
  );
}