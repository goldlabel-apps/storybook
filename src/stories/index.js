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
  CodeWorx,
  CakeLady,
  // Steve,
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





stories.add("WordPress", () => <WordPress
  site={{
    siteURL: select(
      `Select Site`,
      {
        listingslab: {
          title: `Listingslab`,
          url: `https://listingslab.io/`,
          avatar: `https://i1.wp.com/listingslab.io/wp-content/uploads/2019/10/cropped-logo512-1.png?w=190&ssl=1`,
        },
        crashCourses: {
          title: `Crash Courses`,
          url: `https://crash-courses.com.au/`,
          avatar: `https://crash-courses.com.au/wp-content/uploads/2019/07/Icon.png`,
        },
      },
      1
    )
  }}
  colors={{
    primary: color(`Theme Primary`, `#fab385`),
    secondary: color(`Theme Secondary`, `#6e4229`),
  }}
/>
);

stories.add("MaterialUI", () => (
  <MaterialUI
    colors={{
      primary: color(`Primary`, `#2ccbd3`),
      secondary: color(`Secondary`, `#11b0b9`)
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

stories.add("ReactPlayingCards", () => <ReactPlayingCards />);

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

// stories.add("Steve", () => <Steve
//   colors={{
//     primary: color(`Primary`, `#fab385`),
//     secondary: color(`Secondary`, `#6e4229`),
//   }}
// />);

// stories.add("Mapbox", () => (
//   <Mapbox
//     mapbox={{
//       asdhas: 123
//     }}
//   />
// ));