import packageJSON from "../../package.json";
import {
  /* color, files, */ select,
  withKnobs,
  text
} from "@storybook/addon-knobs";
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
    showNav: true,
    theme: themes.light
  },
  viewport: {
    viewports,
    defaultViewport: "baseline"
  }
});

stories.addDecorator(withKnobs);

stories.add("ChuckenGotchi", () => (
  // data: /src/common/chuckens.js
  <Game
    chuckens={select(
      `Chucken Select`,
      {
        Random: `random`,
        Scarlet: `red`,
        Bluey: `blue`,
        Midnight: `black`,
        Lilly: `green`,
        Violet: `purple`,
        Sunshine: `yellow`
      },
      `random`
    )}
  />
));

stories.add("PokerClient", () => (
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

stories.add("MP3", () => (
  <MP3 freeText={text("User Input> Text", "Default text.")} />
));
