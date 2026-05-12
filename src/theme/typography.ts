import type { TypographyVariantsOptions } from "@mui/material/styles";

export const fontFamily = {
  montserrat: ["Montserrat", "sans-serif"].join(","),
};

const typography: TypographyVariantsOptions = {
  fontFamily: fontFamily.montserrat,
  h1: {
    fontSize: "3rem", // 48px
    fontWeight: 700,
  },
  h2: {
    fontSize: "2.5rem", // 40px
    fontWeight: 700,
  },
  h3: {
    fontSize: "2rem", // 32px
    fontWeight: 700,
  },
  h4: {
    fontSize: "1.75rem", // 28px
    fontWeight: 700,
  },
  h5: {
    fontSize: "1.5rem", // 24px
    fontWeight: 700,
  },
  h6: {
    fontSize: "1.25rem", // 20px
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "1.125rem", // 18px
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: "1rem", // 16px
    fontWeight: 500,
  },
  body1: {
    fontSize: "1rem", // 16px
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
  },
  caption: {
    fontSize: "0.75rem", // 12px
    fontWeight: 400,
  },
  overline: {
    fontSize: "0.7rem", // 11.2px
    lineHeight: 2.25,
    letterSpacing: 1.5,
    fontWeight: 600,
  },
};

export default typography;
