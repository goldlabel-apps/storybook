import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  Grid,
  IconButton,
} from '@material-ui/core/';
import IconLeft from '@material-ui/icons/ArrowBack';
import IconRight from '@material-ui/icons/ArrowForward';
import { 
  Biker,
} from './characters/';
import { 
  Dropdown,
} from '../';

const useStyles = makeStyles(theme => ({
  characterSelect: {
  },
  selectDropdown: {
  },
  vertAligned:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered:{
    textAlign: 'center',
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function CharacterSelect() {
  const css = useStyles();
  return (
    <div className={cn(css.characterSelect)} >

      <Grid container>
        <Grid item xs={12} className={cn(css.selectDropdown, css.centered)}>
          <Dropdown />
        </Grid>
      </Grid>
      
      <Grid container>
        <Grid item xs={4}
          className={cn(css.vertAligned)}>
          <IconButton 
            variant={`contained`}
            color={`primary`}
            onClick={(e) => {
              e.preventDefault();
              console.log ('Back');
            }}>
              <IconLeft />
          </IconButton>
        </Grid>
        
        <Grid item xs={4}
          className={cn(css.centered)}>
          <Biker className={cn()}/>
        </Grid>
        
        <Grid item xs={4}
          className={cn(css.vertAligned)}>
          <IconButton 
            variant={`contained`} 
            color={`primary`}
            onClick={(e) => {
              e.preventDefault();
              console.log ('Forward')
            }}>
              <IconRight />             
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
