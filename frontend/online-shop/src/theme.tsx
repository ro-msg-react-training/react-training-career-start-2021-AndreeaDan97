import { createMuiTheme } from "@material-ui/core/styles";

const googleFont = "'Quicksand', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4040",
    },
    secondary: {
      main: "#99CCFF",
    },
    background: {
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ff4040",
    },
  },
  typography: {
    fontFamily: googleFont,
    fontSize: 18,
  },
  shape: {
    borderRadius: 40,
  },
});

export default theme;
