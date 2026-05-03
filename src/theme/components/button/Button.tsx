import type { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    contrast: true;
  }
}

const Button: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  variants: [
    {
      props: { variant: "contained", color: "contrast" },
      style: ({ theme }) => ({
        color: `${theme.palette.common.black} !important`,
        backgroundColor: theme.palette.common.white,
      }),
    },
  ],
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "unset",
      borderRadius: Number(theme.shape.borderRadius) * 10,
      transition: theme.transitions.create("background", {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1, 3),
      fontSize: theme.typography.h6.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(0.75, 2.5),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5, 1.75),
      fontSize: theme.typography.body2.fontSize,
    }),
    startIcon: {
      marginRight: 6,
    },
    endIcon: {
      marginLeft: 6,
    },
  },
};

export default Button;
