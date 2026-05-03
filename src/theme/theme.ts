import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/CssBaseline";
import Stack from "./components/layout/Stack";
import Tabs from "./components/tab/Tabs";
import Tab from "./components/tab/Tab";
import Button from "./components/button/Button";
import ButtonBase from "./components/button/ButtonBase";

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiStack: Stack,
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiTabs: Tabs,
    MuiTab: Tab,
    MuiCssBaseline: CssBaseline,
  },
});
