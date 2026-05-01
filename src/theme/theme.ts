import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/CssBaseline";

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiCssBaseline: CssBaseline,
  },
});
