import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
 number,
 object,
 text,
} from '@storybook/addon-knobs';

import {
  FileSystemNavigator,
  SimpleCard,
  SimpleRating,
  
} from '../components';

const stories = storiesOf('codeworx', module);

stories.addParameters({ options: { 
  panelPosition: 'right',
  showPanel: true,
}})

stories.add('SimpleCard', () => (
  <React.Fragment>
    <SimpleCard />
  </React.Fragment>
))

stories.add('SimpleRating', () => (
  <React.Fragment>
    <SimpleRating />
  </React.Fragment>
))

stories.add('FileSystemNavigator', () => (
  <React.Fragment>
    <FileSystemNavigator />
  </React.Fragment>
))

stories.addDecorator(withKnobs);
