import React, {Component} from 'react';
import './style.css';
// import { TweenLite } from 'gsap';
import Steps from './Steps';
import {
  Box,
  Button,
  Card,
  CardHeader,
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card className={`card`}>
              <CardHeader 
                title={`Steps.jsx`}
                subheader={`All SVG elements can be controlled in several ways just as any DOM 
                object can be. Some people like CSS. My preference is Tweening.`}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Steps/>
          </Grid>
          <Grid item xs={6}>
            <Card className={`card`}>
              <Typography variant={`h6`}>
                CSS
              </Typography>
              <Typography variant={`body1`}>
                You can apply classes conditionally to any of the element in your svg
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={`card`}>
              <Typography variant={`h6`}>
                Tweening
              </Typography>
              <Typography variant={`body1`}>
                Using an animation library like Greensock
              </Typography>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Button
              color={`secondary`}
              variant={`outlined`}
              onClick={(e) => {
                e.preventDefault();
                this.applyCSS ();
              }}>
              CSS
            </Button>
          </Grid> */}
          {/* <Grid item xs={12}>
            <Button
              color={`primary`}
              variant={`outlined`}
              onClick={(e) => { 
                e.preventDefault();
                console.log ('Betterer');
              }}>
              Betterer
            </Button>
          </Grid> */}
          {/* <Grid item xs={12}>
            <Box>
              <Typography variant={`body1`}>
                CSS selectors
              </Typography>
            </Box>
          </Grid>
           */}

        </Grid>
      </React.Fragment>
    );
  }
}
export default AnimatedSVG;
