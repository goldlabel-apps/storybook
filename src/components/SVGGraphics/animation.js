import { TimelineMax, Linear, Bounce } from 'gsap';
const baseDuration = 1;

export function animateBlokey () {
  const blokey = document.getElementById('blokey');
  const blokeyTL = new TimelineMax();
  blokeyTL
    .to(blokey, baseDuration, {
      y: +400,
      ease: Bounce.easeOut
    })
    .to(blokey, baseDuration, {
      y: 25,
      ease: Bounce.easeIn
    });
}

export function animateClouds () {
  const cloudLeft = document.getElementById('cloud-left');
  const cloudTop = document.getElementById('cloud-top');
  const cloudBottom = document.getElementById('cloudBottom');
  const cloudRight = document.getElementById('cloudRight');
  const cloudLeftTL = new TimelineMax({ repeat: -1 });
  cloudLeftTL
    .set(cloudLeft, { x: -50 })
    .to(cloudLeft, baseDuration * 10, { x: 3100, ease: Linear.easeNone });
  const cloudTopTL = new TimelineMax({ repeat: -1 });
  cloudTopTL
    .set(cloudTop, { x: -50 })
    .to(cloudTop, baseDuration * 8, { x: 3100, ease: Linear.easeNone });
  const cloudBottomTL = new TimelineMax({ repeat: -1 });
  cloudBottomTL
    .set(cloudBottom, { x: -50 })
    .to(cloudBottom, baseDuration * 12, { x: 3100, ease: Linear.easeNone });
  const cloudRightTL = new TimelineMax({ repeat: -1 });
  cloudRightTL
    .set(cloudRight, { x: -50 })
    .to(cloudRight, baseDuration * 16, { x: 3100, ease: Linear.easeNone });
}
