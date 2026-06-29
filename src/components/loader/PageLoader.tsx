import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const PageLoader = () => {
  return (
    <Stack
      sx={{
        width: 1,
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="column" spacing={3}>
        <CircularProgress
          size="3rem"
          aria-label="Loading..."
          sx={{ mx: "auto" }}
        />
        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: 400 }}>
          Please Wait...
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PageLoader;
