import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  Grid,
  Tab,
  Tabs,
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
} from '../../components/CharacterSelect/characters';

const useStyles = makeStyles(theme => ({
  character:{
    maxHeight: '68vh',
  }
}));

function TabPanel(props) {
  const { index } = props;
  const css = useStyles();
  switch(index) {
    case 0:
      return <Biker className={cn(css.character)}/>;
    case 1:
      return <Chix className={cn(css.character)}/>;
    case 2:
      return <Dapper className={cn(css.character)}/>;
    case 3:
      return <Hippy className={cn(css.character)}/>;
    case 4:
      return <Hipster className={cn(css.character)}/>;
    case 5:
      return <Mumma className={cn(css.character)}/>;
    case 6:
      return <Punk className={cn(css.character)}/>;
    case 7:
      return <Rasta className={cn(css.character)}/>;
    case 8:
      return <Rocker className={cn(css.character)}/>;
    case 9:
      return <Youngun className={cn(css.character)}/>;
    default: {
      return null;
    }
  }
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function SwipableTabs(props) {
  const css = useStyles();
  const [value, setValue] = React.useState(0);
  const {list} = props;
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={css.swipableTabs}>
      
      <Grid container>
        <Grid item xs={12} className={cn()}>

        <Grid container>
          <Grid item xs={1} className={cn()}></Grid>
          <Grid item xs={10} className={cn()}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor={`secondary`}
              textColor={`primary`}
              aria-label={`Responsive, swipable tabs`}
            >
              {list.map((item, i) => {
                return (
                  <Tab label={item.label} {...a11yProps(i)} />
                );
              })}
            </Tabs>
          </Grid>
          <Grid item xs={1} className={cn()}></Grid>
        </Grid>
          
        </Grid>
        <Grid item xs={12} className={cn()}>

          <Grid container>
            <Grid item xs={1} className={cn()}></Grid>
            <Grid item xs={10} className={cn()}>
              <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {list.map((item, i) => {
                  return (
                    <TabPanel value={value} index={i}>
                      {item.label}
                    </TabPanel>
                  );
                })}
              </SwipeableViews>
            </Grid>
            <Grid item xs={1} className={cn()}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}


/*
          <IconButton 
            variant={`contained`}
            color={`primary`}
            onClick={(e) => {
              e.preventDefault();
              console.log ('Back');
            }}>
              <IconLeft />
          </IconButton>
*/