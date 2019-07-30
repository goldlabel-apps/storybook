import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
  // number,
  // object,
} from '@storybook/addon-knobs';
import {
  // ç
  // AnimatedSVG,
  REKA,
} from '../components';

const stories = storiesOf('🇬🇧listingslab', module);

stories.addParameters({ options: { 
  panelPosition: 'right' 
}});

// stories.add('🍓 AnimatedSVG', () => (
//   <AnimatedSVG 
//     score={ number('Score', 1000) }
//     goal={ number('Goal', 10000) }
//     options={ object('Options', {
//       expires:{
//         unixEpoch: 1565100000000,
//         readable: `Tuesday, 6 August 2019 14:00`, 
//       }
//     })}
//   />
// ))

stories.add('🍌 REKA', () => (
  <REKA />
))

stories.addDecorator(withKnobs);
