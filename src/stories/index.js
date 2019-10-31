import packageJSON from "../../package.json";
import React from "react";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";
import viewports from "./viewports";
import {
  // select,
  // color,
  // files
  text,
  withKnobs,
  color
} from "@storybook/addon-knobs";
import { Blank, ZooParty } from "../components/";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const stories = storiesOf("Stories", module);

stories.addParameters({
  viewport: {
    viewports,
    defaultViewport: "printA4Landscape"
  },
  options: {
    panelPosition: "right",
    showPanel: false,
    showNav: false,
    theme: themes.dark
  }
});

stories.addDecorator(withKnobs);

stories.add("ZooParty", () => (
  <ZooParty storybook={{
    title: text (`Title`,`ZooParty. 7th Birthday Invitation`),
    version: 1,
  }} />
));

stories.add("Blank", () => (
  <Blank storybook={{
    title: text (`Title`,`Blank Component`),
    backgroundColor: color(`Background Color`, `#3C779B`),
  }} />
));
