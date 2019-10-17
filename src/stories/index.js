import { color, files, select, withKnobs } from "@storybook/addon-knobs";
import {
  AvatarSelect,
  CardTable,
  Chips,
  DealerChip,
  PlayingCard,
  Player,
  TimeBank
} from "../components/";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";
import defaultCardObj from "../common/data/defaultCardObj";
// import CasinoLegoReadme from "../components/README.md";

const stories = storiesOf("Poker Client", module);

stories.addParameters({
  //   readme: {
  //     content: CasinoLegoReadme,
  //     sidebar: CasinoLegoReadme
  //   },
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: true,
    theme: themes.dark
  },
  viewport: {
    viewports,
    defaultViewport: "galaxyS5"
  }
});

stories.add("Dealer Chip", () => (
  <DealerChip
    c={{
      colourRim: color(`Rim Colour`, "white"),
      colourLight: color(`Light Colour`, "green"),
      colourDark: color(`Dark Colour`, "blue")
    }}
  />
));
stories.add("Time Bank", () => <TimeBank />);
stories.add("Chips", () => <Chips />);
stories.add("Avatar Select", () => <AvatarSelect />);

stories.add("Card Table", () => (
  <CardTable
    rank={select(
      `Players`,
      {
        Two: `2`,
        Three: `3`,
        Four: `4`,
        Five: `5`,
        Six: `6`
      },
      `2`
    )}
  />
));

stories.add("Player", () => <Player />);

stories.add("Playing Card", () => (
  <PlayingCard
    cardObj={{
      advert: files(`Advert`, ".png, .jpg"),
      facing: select(
        `Facing`,
        {
          Up: `up`,
          Down: `down`
        },
        `down`
      ),
      borderColour: color(`Border Colour`, defaultCardObj.borderColour),
      faceColour: color(`Face Colour`, defaultCardObj.faceColour),
      backColour: color(`Back Colour`, defaultCardObj.backColour),
      blackSuit: color(`Black Suit`, defaultCardObj.blackSuit),
      redSuit: color(`Red Suit`, defaultCardObj.redSuit),
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
        defaultCardObj.rank
      ),
      suit: select(
        `Suit`,
        {
          Diamonds: `D`,
          Hearts: `H`,
          Spades: `S`,
          Clubs: `C`
        },
        defaultCardObj.suit
      )
    }}
  />
));

stories.addDecorator(withKnobs);
