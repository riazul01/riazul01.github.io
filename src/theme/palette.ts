import type { PaletteColorOptions, PaletteOptions } from "@mui/material/styles";
import {
  red,
  green,
  yellow,
  white,
  cyan,
  blue,
  purple,
  black,
  grey,
} from "./colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    contrast?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    contrast: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
  interface TypeBackground {
    elevation1: string;
    elevation2: string;
    elevation3: string;
    elevation4: string;
  }
}

const palette: PaletteOptions = {
  mode: "dark",
  action: {
    hover: black[300],
    selected: black[100],
    disabled: black[800],
  },
  primary: {
    lighter: blue[100],
    light: blue[400],
    main: blue[500],
    dark: blue[600],
    darker: blue[900],
  },
  secondary: {
    lighter: purple[100],
    light: purple[400],
    main: purple[500],
    dark: purple[600],
    darker: purple[900],
  },
  info: {
    lighter: cyan[100],
    light: cyan[400],
    main: cyan[500],
    dark: cyan[600],
    darker: cyan[900],
  },
  success: {
    lighter: green[100],
    light: green[400],
    main: green[500],
    dark: green[600],
    darker: green[900],
  },
  warning: {
    lighter: yellow[100],
    light: yellow[400],
    main: yellow[500],
    dark: yellow[600],
    darker: yellow[900],
  },
  error: {
    lighter: red[100],
    light: red[400],
    main: red[500],
    dark: red[600],
    darker: red[900],
  },
  divider: black[300],
  common: {
    white: white[100],
    black: black[950],
  },
  background: {
    default: black[950],
    elevation1: black[900],
    elevation2: black[800],
    elevation3: black[700],
    elevation4: black[600],
  },
  contrast: {
    lighter: black[100],
    light: black[400],
    main: black[500],
    dark: black[600],
    darker: black[950],
  },
  text: {
    primary: white[100],
    secondary: grey[600],
    disabled: grey[600],
  },
};

export default palette;
