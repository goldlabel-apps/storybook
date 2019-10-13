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
      suit={ select(`Suit`, {
        Diamonds: `D`,
        Hearts: `H`,
        Spades: `S`,
        Clubs: `C`
      })}
      rank={ select(`Rank`, {
        Two: `2`,
        Three: `3`,
        Four: `4`,
        Five: `5`
      })}
      cardRed={color(`Hearts & Diamonds`, `#d43943`)}
      cardBlack={color(`Spades & Clubs`, `#1c1c19`)}
      cardBgLight={color(`Light Background`, `#eee`)}
      cardBgDark={color(`Dark Background`, `#222`)}
      cardBgDark={color(`Borders`, `#333`)}
      advert={files(
        `Advert`, 
        '.png, .jpg', 
        `https://firebasestorage.googleapis.com/v0/b/react-playing-cards.appspot.com/o/Advert.png?alt=media&token=8a632636-8409-428c-a042-5f4724f427f6`
      )}
    />
  </React.Fragment>
))

stories.addDecorator(withKnobs);
