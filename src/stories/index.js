import React from 'react';
import { storiesOf } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from '../theme/mui';
import { 
  withKnobs, 
//  number,
//  object,
//  text,
} from '@storybook/addon-knobs';

import {
  Chuckens,
  GPXReplay,
  TimeMachine,
  StoryTitle,
} from '../components';

const stories = storiesOf('listingslab', module);

stories.addParameters({ options: { 
  // panelPosition: 'right',
  showPanel: false,
}})


stories.add('Chuckens', () => (
  <React.Fragment>
  <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
    <StoryTitle story={{
        version: `0.0.1`,
        title: `Chuckens`,
        description: `Open Source example of creating a Firestore/Cloud Functions powered RESTful API`,
      }} />
    <GPXReplay />
  </MuiThemeProvider>
</React.Fragment>
))

// stories.add('Time Machine SVG', () => (
//     <React.Fragment>
//     <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
//       <StoryTitle story={{
//           version: `0.0.3`,
//           title: `Time Machine`,
//           description: `Animated Scalar Vector Graphic`,
//         }} />
//       <TimeMachine />
//     </MuiThemeProvider>
//   </React.Fragment>
// ))


stories.addDecorator(withKnobs);
