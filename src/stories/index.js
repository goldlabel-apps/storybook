import packageJSON from "../../package.json";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";
import {
  // files
  color,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import {
  CakeLady,
  ChuckenAnimation,
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
  viewport: {
    viewports,
    defaultViewport: "baseline"
  },
  options: {
    panelPosition: "right",
    showPanel: true,
    showNav: true,
    theme: themes.dark
  }
});

stories.addDecorator(withKnobs);

stories.add("ChuckenAnimation", () => (
  <ChuckenAnimation
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

stories.add("WordPress", () => <WordPress />);
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
      title: text(`Title`, `ZooParty. 7th Birthday Invitation`),
      version: 1
    }}
  />
));

stories.add("ReactPlayingCards", () => <ReactPlayingCards />);

stories.add("CakeLady", () => (
  <CakeLady
    storybook={{
      title: text(`Title`, `Blank Component`),
      backgroundColor: color(`Background Color`, `#3C779B`)
    }}
  />
));
