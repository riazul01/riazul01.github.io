import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Splash = () => {
  return (
    <Stack
      sx={{
        width: 1,
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size="3rem" aria-label="Loading..." />
    </Stack>
  );
};

export default Splash;
