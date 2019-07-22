import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core/';
import SVGPaywall from './SVGPaywall';

const useStyles = makeStyles(theme => ({
  dashboardIndicator: {
    margin: 'auto',
    maxWidth: 460,
  },
  grow:{
    flexGrow: 1,
  },
  bordered: {
    border: '1px solid red',
  },
  centered: {
    textAlign: 'center',
  },
}));

export default function DashboardIndicator(props) {

  const classes = useStyles();
  
  const { percentComplete } = props;

  // const [expanded, setExpanded] = React.useState(false);

  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }

  return (
    <div className={cn(classes.dashboardIndicator)}>
      <Card>
        <Grid container
          className={cn()}
        >
          <Grid item xs={12}>
            <SVGPaywall />
          </Grid>
          <Grid item xs={12}
            className={cn(classes.centered, classes.grow)}
          >
            <Typography>
              {percentComplete}/100
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}