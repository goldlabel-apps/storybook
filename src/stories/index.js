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
import { Blank } from "../components/";

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

stories.add("Blank", () => (
  <Blank storybook={{
    title: text (`Title`,`Blank Component`),
    backgroundColor: color(`Background Color`, `#3C779B`),
  }} />
));
