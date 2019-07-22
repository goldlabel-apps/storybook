import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
  boolean,
} from '@storybook/addon-knobs';
import {
  AnimatedSVG,
  ImportWizard,
} from '../components';
// import StoryAnimatedSVG from './AnimatedSVG.js';

const stories = storiesOf('🍒Experimental', module);
stories.addParameters({ options: { 
  panelPosition: 'right' 
}});
stories.add('🍎Import Wizard', () => (
  <ImportWizard disabled={boolean('Disabled', false)}/>
));
stories.add('🍏Animated SVG', () => (
  <AnimatedSVG disabled={boolean('Disabled', false)}/>
))
stories.addDecorator(withKnobs);

// https://gist.github.com/roachhd/1f029bd4b50b8a524f3c