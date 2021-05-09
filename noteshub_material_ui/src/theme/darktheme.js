import { createMuiTheme } from "@material-ui/core";

const darktheme = createMuiTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif `,
  },
  colors: {
    red: '#FF0000'
  },
  palette: {
      type: "dark",
  }
})

export default darktheme;