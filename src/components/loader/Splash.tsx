import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Splash = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size="3rem" aria-label="Loading…" />
    </Stack>
  );
};

export default Splash;
