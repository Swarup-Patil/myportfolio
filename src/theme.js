// src/theme.js
import CaslonFont from "./fonts/CaslonDoric-Regular-Trial.otf";
import GraphikFont from "./fonts/GraphikLCG-Regular.ttf";

const theme = {
  fonts: {
    caslon: '"caslon", serif',
    graphik: '"graphik", sans-serif',
  },
  fontFiles: {
    caslon: CaslonFont,
    graphik: GraphikFont,
  },
  colors: {
    background: "#e2e6e1",
    primary: "#1f1f1f",
    blue: "#1e2d44",
    orange: "#ff5741",
    grey: "#464d51",
  },
  MediaQueries: {
    xs: "(max-width: 576px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1200px)",
    xl: "(min-width: 1201px)",
  },
};

export default theme;
