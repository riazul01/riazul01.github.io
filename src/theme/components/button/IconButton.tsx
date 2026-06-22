import type { Theme, Components } from "@mui/material/styles";
import { alpha } from "@mui/material";

const IconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: alpha(theme.palette.text.primary, 0.7),
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: `${alpha(theme.palette.background.default, 0.1)} !important`,
      backdropFilter: "blur(2px)",
      transition: theme.transitions.create(
        ["color", "background-color", "border-color"],
        {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        },
      ),
      "&:hover": {
        color: alpha(theme.palette.text.primary, 1),
      },
    }),
  },
};

export default IconButton;
