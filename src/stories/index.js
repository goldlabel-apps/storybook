
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';
import {
  ImportWizard
} from '../components';


const stories = storiesOf('[WIP]', module);
 
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Import Wizard
stories.add('Import Wizard', () => (
  <ImportWizard disabled={boolean('Disabled', false)}/>
));


// Knobs for React props
stories.add('Knobs with buttons', () => (
  <button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Storybook')}
  </button>
));
 
// Knobs as dynamic variables.
stories.add('Dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);
 
  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});
