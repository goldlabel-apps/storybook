import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ImportWizard() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant={`contained`} 
        color={`primary`} 
        className={classes.button}>
        Open Import Wizard
      </Button>
      
    </div>
  );
}