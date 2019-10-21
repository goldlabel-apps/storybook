import packageJSON from "../../package.json";
import { /* color, files, */ select, withKnobs } from "@storybook/addon-knobs";
import { PokerClient } from "../components/PokerClient";
import { Game } from "../components/ChuckenGotchi";
import { MP3 } from "../components/MP3";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const stories = storiesOf("listingslab", module);

stories.addParameters({
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: false,
    theme: themes.dark
  },
  viewport: {
    viewports,
    defaultViewport: "baseline"
  }
});

stories.addDecorator(withKnobs);

stories.add("Chicken Game", () => (
  // data: /src/common/chuckens.js
  <Game
    chuckens={select(
      `Chuckens`,
      {
        Default: `default`,
        Scarlet: `red`,
        Bluey: `blue`,
        Midnight: `black`,
        Lilly: `green`,
        Violet: `purple`,
        Sunshine: `yellow`
      },
      `default`
    )}
  />
));

stories.add("Card Table", () => (
  // data: /src/common/brands.js
  <PokerClient
    brand={select(
      `Switch Brands`,
      {
        "White Label": `whitelabel`,
        "Fancy Spade": `fancyspade`,
        "Red Heart": `redHeart`
      },
      `whitelabel`
    )}
  />
));

stories.add("Audio", () => <MP3 />);
