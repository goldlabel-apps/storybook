## Animated SVG

Consider two techniques for visually conveying animation on the web

### Frame by Frame

Traditional animation technique is to create a series of images which change over time and then play them in series to create the same effect as the stickman flick books we all made as kids.

We're talking gifs. Wonderful, old fashioned things that they are, and of course, still widely used in environments like Slack with gifys. Love em or hate em they're fat, slow and limited.

<!-- ![wombat](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/wombat.gif?alt=media&token=7eeb3859-990a-4fa7-aeae-4704e23590fe) -->

### Tween

Fast processors gave us a new technique. Here we take an object and modify it's visual propeties over time. This time-based Interpolation can be handled by scripting languages like JS and many concrete paradigns have emerged; fades, swipes etc.

[Greensock's GSAP](https://greensock.com/gsap) is one. It's ridulously stable across all device, easy to use and therefore was widely used.

### Some code

First we'll create a div element with an id="animateMe". We'll put a png in it.

```html
<div id="animateMe">
    <img src="/some.png" />
</div>
```

Because we want to to see it here in React/Storybook, we'll add and configure a few things. First we'll add the Greensock library. 

```shell
yarn add gsap -W
```
Import the Tweening stuff into the React Component.

```javascript
import {TweenLite} from 'gsap';
```

