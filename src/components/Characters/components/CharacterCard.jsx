import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import cn from 'classnames';
import {
  // Grid,
  Card,
} from '@material-ui/core/';
// import { 
//   Biker,
// } from './characters/';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(),
  },
}));

export default function CharacterCard(props) {
  const {children} = props;
  console.log ('CharacterCard', children)
  const classes = useStyles();
  return (
    <Card className={cn(classes.card)}>
        {children}
    </Card>
  );
}