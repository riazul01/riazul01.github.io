import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/CssBaseline";
import Stack from "./components/layout/Stack";
import Tabs from "./components/tab/Tabs";
import Tab from "./components/tab/Tab";

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiStack: Stack,
    MuiTabs: Tabs,
    MuiTab: Tab,
    MuiCssBaseline: CssBaseline,
  },
});
