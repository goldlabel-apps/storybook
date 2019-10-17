import { color, files, select, withKnobs } from "@storybook/addon-knobs";
import { 
  CardTable,
  PlayingCard,
  Player
} from "../components/";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";

const stories = storiesOf("Casino Lego", module);

const newViewports = {
  iPhone: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  galaxyS5: {
    name: 'Galaxy S5',
    styles: {
      height: '640px',
      width: '360px',
    },
  },
  ipadPortrait: {
    name: 'iPad Portrait',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
};

stories.addParameters({
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: true,
    theme: themes.dark
  },
  viewport: {
    viewports: newViewports,
    defaultViewport: 'galaxyS5',
  },
});

stories.add('Card Table', () => (
  <CardTable 
      rank={select(
        `Players`,
        {
          Two: `2`,
          Three: `3`,
          Four: `4`,
          Five: `5`,
          Six: `6`,
        },
        `2  `
      )}
  
  />
))

stories.add('Player', () => (
  <Player />
))

stories.add("Playing Card", () => (
  <PlayingCard
    advert={files(`Advert`, ".png, .jpg")}
    rank={select(
      `Rank`,
      {
        Ace: `A`,
        Two: `2`,
        Three: `3`,
        Four: `4`,
        Five: `5`,
        Six: `6`,
        Seven: `7`,
        Eight: `8`,
        Nine: `9`,
        Ten: `T`,
        Jack: `J`,
        Queen: `Q`,
        King: `K`
      },
      `K`
    )}
    suit={select(
      `Suit`,
      {
        Diamonds: `D`,
        Hearts: `H`,
        Spades: `S`,
        Clubs: `C`
      },
      `S`
    )}
    redSuit={color(`Red Suits`, `#D33E43`)}
    blackSuit={color(`Black Suits`, `#010000`)}
    face={color(`Face`, `#F7F6F1`)}
    back={color(`Back`, `#C62F47`)} // 276473
    border={color(`Borders`, `#ddd`)}
    facing={select(
      `Facing`,
      {
        Up: `up`,
        Down: `down`
      },
      `up`
    )}
  />
));

stories.addDecorator(withKnobs);