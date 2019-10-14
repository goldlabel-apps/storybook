import React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  withKnobs,
  color,
  files,
  select,
} from '@storybook/addon-knobs';
import {PlayingCards} from '../components/react-playing-cards';

const stories = storiesOf('React Playing Cards', module);

stories.addParameters({ options: { 
  panelPosition: 'right',
  showPanel: true,
}})

stories.add('Pick a card, any card', () => (
  <React.Fragment>
    <PlayingCards 
      advert={files(
        `Advert`, 
        '.png, .jpg', 
        `/.png`
      )}
      suit={ select(`Suit`, {
        Diamonds: `D`,
        Hearts: `H`,
        Spades: `S`,
        Clubs: `C`
      }, `C`)}
      rank={ select(`Rank`, {
        Two: `2`,
        Three: `3`,
        Four: `4`,
        Five: `5`
      })}
      redSuit={color(`Red Suits`, `#D33E43`)}
      blackSuit={color(`Black Suits`, `#010000`)}
      face={color(`Face`, `#F7F6F1`)} 
      back={color(`Back`, `#276473`)} // D33E43
      border={color(`Borders`, `#1A1919`)}
    />
  </React.Fragment>
))

stories.addDecorator(withKnobs);
