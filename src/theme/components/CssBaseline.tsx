import type { Theme, Components } from "@mui/material/styles";

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
  }),
};

export default CssBaseline;
