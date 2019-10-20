import packageJSON from "../../package.json";
import { /* color, files, */ select, withKnobs } from "@storybook/addon-knobs";
import { CardTable } from "../components/PokerClient";
import { Game } from "../components/Chuckens";
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

stories.add("Chicken Game", () => (
  // see /src/common/chuckens.js
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
  // see /src/common/brands.js
  <CardTable
    brand={select(
      `Brand`,
      {
        "White Label": `whitelabel`,
        "Fancy Spade": `fancyspade`,
        "Ugly as Oil": `ugly`
      },
      `whitelabel`
    )}
  />
));
