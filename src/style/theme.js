import textColours from "./textColours";

let pwaConfig = {
  brand:{
    colours:{
      cards:{}
    }
  }  
};

const { brand } = pwaConfig;
const primary = brand.colours.muiPrimary;
const secondary = brand.colours.muiSecondary;
let text = textColours.dark;
if (brand.colours.text === `light`) {
  text = textColours.light;
}
const theme = {
  palette: {
    primary: {
      main: primary || "#222"
    },
    secondary: {
      main: secondary || "#333"
    },
    text,
    background: {
      paper: brand.colours.cards.bgLight
    }
    // background: {
    //   default: secondary,
    //   paper: primary,
    //   appBar: secondary,
    //   contentFrame: primary
    // }
  },
  typography: {
    fontFamily: '"Helvetica", sans-serif'
  }
};

export default theme;
