import React, { PureComponent, Component } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { AnimatedSVG } from '../components';

export default (storybook, module) => {
  storybook
    .storiesOf(' 🌴 AnimatedSVG', module)
    .add(' 🌴 Requirements', () => (
      <React.Fragment>
        ok
      </React.Fragment>
    ))

    .add(' 🌴 hm-land-reg.js', () => (
      <React.Fragment>
        ok
      </React.Fragment>
    ));
  storybook.addDecorator(withKnobs);
};