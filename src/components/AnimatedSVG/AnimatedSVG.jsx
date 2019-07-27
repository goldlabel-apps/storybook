import React, {Component} from 'react';
import './style.css';
import { TweenLite } from 'gsap';
import SVGGraphic from './SVGGraphic';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@material-ui/core/';

class AnimatedSVG extends Component {
  constructor(props){
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount(){
    // this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  }

  applyCSS = () => {
    console.log ('applyCSS');
    // const element = document.getElementById('blokey');
    // element.classList.add(`sss`);
    document.getElementById("blokey").classList.add('isHidden');
  }

  render(){
    return (
      <React.Fragment>
        <SVGGraphic/>
        <div id={'thingo'}>
            dluahslid
        </div>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              color={`secondary`}
              variant={`contained`}
              onClick={(e) => {
                e.preventDefault();
                this.applyCSS ();
                // window.location.assign('https://greensock.com/react', '_blank')
              }}>
              apply CSS
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
          {/* <Grid item xs={12}>
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
          </Grid> */}
        </Grid>
      </React.Fragment>
    );
  }
}
export default AnimatedSVG;