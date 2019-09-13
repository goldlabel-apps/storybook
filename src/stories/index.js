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
  CharacterSelect,
  StoryTitle,
} from '../components';

const stories = storiesOf('listingslab', module);

stories.addParameters({ options: { 
  // panelPosition: 'right',
  showPanel: false,
}})

stories.add('Chuckens 0.0.4', () => (
  <React.Fragment>
  <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
    <StoryTitle story={{
        title: `Chuckens`,
        description: `A collection of 6 SVG Graphics representing lifecycle stages of a chicken.`,
        tech: `Open Source example of creating a Firestore/Cloud Functions powered RESTful API`,
      }} />
    <Chuckens />
  </MuiThemeProvider>
</React.Fragment>
))


stories.add('Character Select 0.0.4', () => (
  <React.Fragment>
  <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
    <StoryTitle story={{
        title: `Character Select`,
        description: `Swipable SVG Image carosel`,
      }} />
    <CharacterSelect />
  </MuiThemeProvider>
</React.Fragment>
))

stories.addDecorator(withKnobs);
