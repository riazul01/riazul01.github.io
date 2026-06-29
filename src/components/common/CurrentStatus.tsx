import Typography from "@mui/material/Typography";
import { alpha, badgeClasses, type SxProps } from "@mui/material";
import StyledBadge from "components/styled/StyledBadge";

interface CurrentStatusProps {
  title: string;
  sx?: SxProps;
}

const CurrentStatus = ({ title, sx }: CurrentStatusProps) => {
  return (
    <StyledBadge
      overlap="circular"
      variant="dot"
      sx={[
        (theme) => ({
          pl: 2.75,
          pr: 1.75,
          mx: "auto",
          borderRadius: 16,
          bgcolor: alpha(theme.palette.primary.main, 0.3),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          [`& .${badgeClasses.badge}`]: {
            left: 12,
            right: "unset",
            top: "50%",
            transform: "translateY(-50%)",
            height: 8.75,
            width: 8.75,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography variant="overline" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </StyledBadge>
  );
};

export default CurrentStatus;
