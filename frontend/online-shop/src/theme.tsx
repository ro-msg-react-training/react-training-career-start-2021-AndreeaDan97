import { createMuiTheme } from "@material-ui/core/styles";

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
    fontFamily: "'Quicksand', sans-serif",
    fontSize: 18,
  },
  shape: {
    borderRadius: 40,
  },
});

export default theme;
