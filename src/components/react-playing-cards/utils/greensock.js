import { TimelineLite, Power2 } from "gsap";

const baseDuration = 1;

const shrink = (div, callback) => {
  const timeline = new TimelineLite();
  timeline.set(div, {
    scale: 1
  });
  timeline.to(div, baseDuration * 1, {
    scale: 0.8,
    ease: Power2.easeOut,
    onComplete: callback
  });
};

const flipIn = (div, callback) => {
  const timeline = new TimelineLite();
  timeline.to(div, baseDuration * 0.25, {
    rotationY: "+=90",
    ease: Power2.easeOut,
    onComplete: callback
  });
};

const flipOut = (div, callback) => {
  const timeline = new TimelineLite();
  // timeline.set(div, {
  //   rotationY: "0",
  // });
  timeline.to(div, baseDuration * 0.25, {
    rotationY: "0",
    ease: Power2.easeIn,
    onComplete: callback
  });
};



export function animateCard(divId, animation, callback) {
  switch (animation) {
    case `flipIn`:
      flipIn(document.getElementById(divId), callback);
      break;
    case `flipOut`:
      flipOut(document.getElementById(divId), callback);
      break;
    case `shrink`:
      shrink(document.getElementById(divId), callback);
      break;
    default:
  }
}
