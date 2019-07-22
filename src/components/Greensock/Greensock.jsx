import React, {Component} from 'react';
import {TweenLite} from 'gsap';
import {
  Button
} from '@material-ui/core/';

class Greensock extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  }

  render(){
    return (
      <div ref={div => this.myElement = div}>
        <Button
          color={`secondary`}
          variant={`contained`}
          onClick={(e) => {
            e.preventDefault();
            window.location.assign('https://greensock.com/react', '_blank')
          }}>
          Greensock
        </Button>
    </div>);
  }
}
export default Greensock;