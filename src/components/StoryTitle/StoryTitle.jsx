import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Typography,
} from '@material-ui/core/';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(2),
  },
  pullRight: {
    textAlign: 'right',
  }
}));

export default function StoryTitle(props) {
  const classes = useStyles();
  const {story} = props;
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Typography 
            variant="h5"      
            component="h3">
            {story.title} 
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.pullRight}>
          <Typography component="p">
            <small>{story.version}</small>  
          </Typography>
        </Grid>
      </Grid>
      
      <Typography component="p">
        {story.description}
      </Typography>
      
    </Paper>
  );
}