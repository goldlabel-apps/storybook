import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
  // number,
  // object,
  // text,
} from '@storybook/addon-knobs';

import {
  Characters,
} from '../components';

const stories = storiesOf('listingslab', module);

stories.addParameters({ options: { 
  // panelPosition: 'right',
  showPanel: false,
}})

stories.add('Characters', () => (
  <Characters />
))

stories.addDecorator(withKnobs);
