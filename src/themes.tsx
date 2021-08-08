import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
  },
});
