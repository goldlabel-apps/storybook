import { /* color, files, */ select, withKnobs } from "@storybook/addon-knobs";
import { CardTable } from "../components/PokerClient";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";

const stories = storiesOf("Poker Client", module);

stories.addParameters({
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: true,
    theme: themes.dark
  },
  viewport: {
    viewports,
    defaultViewport: "tiny"
  }
});

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
