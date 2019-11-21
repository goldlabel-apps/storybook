import packageJSON from "../../package.json";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
// import viewports from "./viewports";
import { files, color, select, text, withKnobs } from "@storybook/addon-knobs";
import {
  CodeWorx,
  CakeLady,
  // ChuckenAnimation,
  // Mapbox,
  MaterialUI,
  ReactPlayingCards,
  WordPress,
  ZooParty
} from "../components/";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const stories = storiesOf("Stories", module);

stories.addParameters({
  // viewport: {
  //   viewports,
  //   defaultViewport: "baseline"
  // },
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: true,
    theme: themes.dark
  }
});

stories.addDecorator(withKnobs);

const playingCard = {
  facing: `up`,
  rank: `Ace`,
  suit: `Spades`,
  borderColour: `##333`,
  faceColour: `#f5f5f5`,
  backColour: `#3C779B`,
  blackSuit: `#1c1c19`,
  redSuit: `#d43943`
};

stories.add("ReactPlayingCards", () => (
  <ReactPlayingCards
    cardObj={{
      advert: files(`Advert`, ".png, .jpg"),
      borderColour: color(`Card Border`, playingCard.borderColour),
      faceColour: color(`Card Face`, playingCard.faceColour),
      backColour: color(`Card Back`, playingCard.backColour),
      blackSuit: color(`Black Suit`, playingCard.blackSuit),
      redSuit: color(`Red Suit`, playingCard.redSuit),
      rank: select(
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
        playingCard.rank
      ),
      suit: select(
        `Suit`,
        {
          Diamonds: `D`,
          Hearts: `H`,
          Spades: `S`,
          Clubs: `C`
        },
        playingCard.suit
      )
    }}
  />
));

stories.add("WordPress", () => (
  <WordPress
    wordpress={{
      siteUrl: text(`siteUrl`, `https://listingslab.io/`)
    }}
  />
));

stories.add("MaterialUI", () => (
  <MaterialUI
    mui={{
      primary: color(`Primary`, `#000`),
      secondary: color(`Secondary`, `#ccc`)
    }}
  />
));

stories.add("ZooParty", () => (
  <ZooParty
    storybook={{
      version: 3
    }}
  />
));

stories.add("CakeLady", () => (
  <CakeLady
    storybook={{
      title: text(`Title`, `Blank Component`),
      backgroundColor: color(`Background Color`, `#3C779B`)
    }}
  />
));

stories.add("CodeWorx", () => (
  <CodeWorx
    animation={{
      baseDuration: select(
        `Speed`,
        {
          Fast: 0.75,
          Normal: 1,
          Slow: 2.25
        },
        1
      )
    }}
  />
));
