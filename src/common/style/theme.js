import textColours from "./textColours";

const primary = "#ddd";
const secondary = "#ccc";
let text = textColours.light;

const theme = {
  typography: {
    fontFamily: "Helvetica"
  },
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    text,
    background: {
      default: "black"
    }
  }
};

export default theme;
