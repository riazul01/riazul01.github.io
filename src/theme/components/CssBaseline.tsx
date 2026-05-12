import type { Theme, Components } from "@mui/material/styles";
import keyframes from "./styles/keyframes";

const CssBaseline: Components<Theme>["MuiCssBaseline"] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      backgroundColor: theme.palette.background.default,
    },
    ...keyframes(),
  }),
};

export default CssBaseline;
