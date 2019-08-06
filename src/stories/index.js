import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs, 
  // number,
  // object,
  // text,
} from '@storybook/addon-knobs';

import {
  // REKA,
  // SVGGraphics,
  Characters,
} from '../components';

const stories = storiesOf('🇬🇧listingslab', module);

stories.addParameters({ options: { 
  panelPosition: 'right' 
}})

stories.add('🌈 Characters', () => (
  <Characters />
))

// stories.add('SVG Graphics', () => (
//   <SVGGraphics 
//     title={ text('Title', 'Goal this month') }
//     score={ number('Score', 1000) }
//     goal={ number('Goal', 10000) }
//     options={ object('Options', {
//       expires:{
//         unixEpoch: 1565100000000,
//         readable: `Tues, 6 August 2pm`, 
//       }
//     })}
//   />
// ))

// stories.add('REKA', () => (
//   <REKA />
// ))

stories.addDecorator(withKnobs);
