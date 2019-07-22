import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
  number,
} from '@storybook/addon-knobs';
import {
  Animator,
  AnimatedSVG,
  ImportWizard,
  DashboardIndicator,
} from '../components';
// import StoryAnimatedSVG from './AnimatedSVG.js';

const stories = storiesOf('🍏 Experimental', module);
stories.addParameters({ options: { 
  panelPosition: 'right' 
}});

stories.add('🍏 GSAP', () => (
  <Animator />
))

stories.add('🍏 Card', () => (
  <AnimatedSVG />
))

stories.add('🍏 Wizard', () => (
  <ImportWizard />
));


const label = '% Complete';
const defaultValue = 73;
const options = {
   range: true,
   min: 0,
   max: 100,
   step: 1,
};


stories.add('🍏 ', () => (
  <DashboardIndicator
    percentComplete={number(label, defaultValue, options)}
  />
))

stories.addDecorator(withKnobs);

// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c