import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    AppBar,
    Avatar,
    Toolbar,
    Typography,
} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import brands from '../../../common/data/brands';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

export default function Topbar(props) {
  const classes = useStyles();
  const { 
    title,
    logo,
  } = props.brand;
  return (
    <AppBar position={`static`} color={`primary`}>
        <Toolbar>
            <Avatar src={logo} className={cn(classes.avatar)}/>
            <Typography variant="h6" className={cn(classes.grow)}>
                {title}
            </Typography>
            <IconButton 
                edge={`start`}
                color={`inherit`} 
                aria-label={`menu`}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  );
}
