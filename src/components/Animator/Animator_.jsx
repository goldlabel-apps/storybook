import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  Button
} from '@material-ui/core/';
import {
  TweenLite,
} from 'gsap';

const useStyles = makeStyles(theme => ({
  animator: {
    margin: 'auto',
    maxWidth: 460,
    border: '1px solid #ccc',
  },
  padded: {
    margin: theme.spacing(2),
  },
}));

export default function Animator() {
  const classes = useStyles();
  // const [
  //   expanded, 
  //   setExpanded,
  // ] = React.useState(false);
  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }
  return (
    <div className={cn(classes.animator)}>
      <div className={cn(classes.padded)}>
        
      </div>
    </div>
  );
}