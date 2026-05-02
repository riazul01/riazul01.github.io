import type { Theme, Components } from "@mui/material/styles";
import { tabsClasses } from "@mui/material";

const Tabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {},
    vertical: {
      [`& .${tabsClasses.indicator}`]: {
        left: 0,
        right: "auto",
      },
    },
  },
};

export default Tabs;
