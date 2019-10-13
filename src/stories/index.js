import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
 number,
 object,
 text,
} from '@storybook/addon-knobs';
import {PlayingCards} from '../components/react-playing-cards';

const stories = storiesOf('React Playing Cards', module);

stories.addParameters({ options: { 
  panelPosition: 'right',
  showPanel: false,
}})

stories.add('Pick a card, any card', () => (
  <React.Fragment>
    <PlayingCards />
  </React.Fragment>
))

stories.addDecorator(withKnobs);
