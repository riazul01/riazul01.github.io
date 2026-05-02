import type { Theme, Components } from "@mui/material/styles";

const Tab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: {
      minWidth: "unset",
      minHeight: "unset",
    },
  },
};

export default Tab;
