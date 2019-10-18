import { /* color, files, */ select, withKnobs } from "@storybook/addon-knobs";
import { CardTable } from "../components/PokerClient";
import { Farmyard } from "../components/Chuckens";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";

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
    defaultViewport: "tiny"
  }
});

stories.add("Farm Yard", () => (
  // see /src/common/chuckens.js
  <Farmyard
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

stories.addDecorator(withKnobs);
