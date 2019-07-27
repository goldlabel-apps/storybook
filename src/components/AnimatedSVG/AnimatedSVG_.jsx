import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import SVGGraphic from './SVGGraphic';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 460,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function AnimatedSVG() {

  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  this.state = {
    cssVisible: false,
  };  

  function toggleCssVisible() {
    this.setState({cssVisible: !this.state.cssVisible});
  }

  const {
    cssVisible,
  } = this.state;

  return (
    <React.Fragment>
      <SVGGraphic />
      <Grid container spacing={1}>
        
        <Grid item>

          <Button
            color={`secondary`}
            variant={`contained`}
            onClick={(e) => {
              e.preventDefault();
              this.toggleCssVisible ();
              // window.location.assign('https://greensock.com/react', '_blank')
            }}>
            CSS Selectors
          </Button>
        </Grid>

        <Grid item>
          <Button
            color={`primary`}
            variant={`contained`}
            onClick={(e) => { 
              e.preventDefault();
              console.log ('CSS');
              // window.location.assign('https://greensock.com/react', '_blank')
            }}>
            GSAP
          </Button>
        </Grid>
        <Grid item xs={12}>
          
          <Box>
            <Typography variant={`body1`}>
              CSS selectors
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant={`body1`}>
              Greensock animation
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </React.Fragment>
    
  );
}