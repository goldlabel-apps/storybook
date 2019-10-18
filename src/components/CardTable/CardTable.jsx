import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../../common/style/theme';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardTableContainer: {
    // margin: theme.spacing(0),
    height: '100vh',
    border: '1px solid green',
    overflow: 'hidden'
  },
  cardTable: {
  },
}));

export default function CardTable() {

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <div id={`card-table`}>
        <Container 
          className={cn(classes.cardTableContainer)}
          maxWidth={false} style={{ 
            backgroundColor: '#CCC',
            borderRadius: 20,
          }}>
            
        </Container>
      </div>
    </MuiThemeProvider>
  );
}
