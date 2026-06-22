import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  [`& .${badgeClasses.badge}`]: {
    color: theme.palette.success.main,
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 3px ${theme.palette.background.default}`,
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid currentColor",
      content: '""',
    },
  },
}));

export default StyledBadge;
