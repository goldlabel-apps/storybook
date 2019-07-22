import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';

const useStyles = makeStyles(theme => ({
  dashboardIndicator: {
    maxWidth: 460,
  },
}));

export default function DashboardIndicator() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }

  return (
    <div className={cn(classes.dashboardIndicator)}>
Dashboard Indicator
    </div>
  );
}