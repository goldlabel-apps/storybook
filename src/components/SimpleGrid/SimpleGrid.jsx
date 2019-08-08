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
    Mumma,
    Punk,
    Rasta,
    Rocker,
    Youngun,
  } from '../CharacterSelect/characters/';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(),
  },
}));

export default function SimpleGrid(props) {
  const {children} = props;
  console.log ('SimpleGrid', children)
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
          <Youngun />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Rocker />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Rasta />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Punk />
        </Grid>
        <Grid item xs={1} className={cn()}></Grid>
        <Grid item xs={1} className={cn()}></Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Hipster />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Hippy />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Dapper />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Chix />
        </Grid>
        <Grid item xs={gridWidth} className={cn(classes.gridItem)}>
          <Mumma />
        </Grid>
        <Grid item xs={1} className={cn()}></Grid>
      </Grid>
    </div>
  );
}