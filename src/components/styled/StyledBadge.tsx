import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  [`& .${badgeClasses.badge}`]: {
    color: theme.palette.success.main,
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 1.5px ${theme.palette.common.white}`,
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));

export default StyledBadge;
