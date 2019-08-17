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
  TimeMachine,
  StoryTitle,
} from '../components';

const stories = storiesOf('listingslab', module);

stories.addParameters({ options: { 
  // panelPosition: 'right',
  showPanel: false,
}})

stories.add('Time Machine SVG', () => (
    <React.Fragment>
    <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
      <StoryTitle story={{
          version: `0.0.3`,
          title: `Time Machine`,
          description: `Animated Scalar Vector Graphic`,
        }} />
      <TimeMachine />
    </MuiThemeProvider>
  </React.Fragment>
))

// stories.add('Character Select', () => (
//   <React.Fragment>
//     <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
//       <StoryTitle story={{
//         version: `0.0.4`,
//         title: `Character Select`,
//         description: ``,
//       }} />
//       <CharacterSelect />
//     </MuiThemeProvider>
//   </React.Fragment>
// ))

stories.addDecorator(withKnobs);
