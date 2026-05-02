import type { SxProps, BoxProps } from "@mui/material";
import Box from "@mui/material/Box";

interface TabPanelProps extends BoxProps {
  children?: React.ReactNode;
  index: string;
  value: string;
  sx?: SxProps;
}

const TabPanel = ({ children, value, index, sx, ...rest }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={[
        (theme) => ({
          width: 240,
          borderRight: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.elevation1,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
