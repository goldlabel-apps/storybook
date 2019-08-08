import React from 'react';
import { storiesOf } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from '../theme/mui';
import { 
  withKnobs, 
  // number,
  // object,
  // text,
} from '@storybook/addon-knobs';

import {
  CharacterSelect,
  StoryTitle,
} from '../components';

const stories = storiesOf('listingslab', module);

stories.addParameters({ options: { 
  // panelPosition: 'right',
  showPanel: false,
}})

stories.add('Character Select', () => (
  <React.Fragment>
    <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
      <StoryTitle story={{
        version: `0.0.3`,
        title: `Character Select`,
        description: `As a user, I want to be able to 
        select a character.`,
      }} />
      <CharacterSelect />
    </MuiThemeProvider>
  </React.Fragment>
  
))

stories.addDecorator(withKnobs);
