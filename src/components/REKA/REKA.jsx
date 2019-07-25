import React, {Component} from 'react';
// import {TweenLite} from 'gsap';
import {
  // Button,
  Grid,
  Card,
  Typography,
} from '@material-ui/core/';

class REKA extends Component {

  render(){
    return (
      <div ref={div => this.myElement = div}>
        <Card>
          <Grid container>
            <Grid item xs={12}>
              <Typography>
                top
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                left
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                right
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                bottom
              </Typography>
            </Grid>
          </Grid>
        </Card>
    </div>);
  }
}
export default REKA;















/*

        <Button
          color={`secondary`}
          variant={`contained`}
          onClick={(e) => {
            e.preventDefault();
            window.location.assign('https://greensock.com/react', '_blank')
          }}>
          REKA
        </Button>



constructor(props){
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount(){
    // this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  }
*/