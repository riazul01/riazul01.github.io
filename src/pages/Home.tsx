import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DarkVeil from "components/animations/DarkVeil";
import CurrentStatus from "components/common/CurrentStatus";

const Home = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: `calc(100vh - 96px)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: 1, height: "80%", position: "absolute" }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </Box>

      <Stack
        direction="column"
        sx={{
          p: 3,
          gap: 1,
          width: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            my: 3,
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: 700,
            background: (theme) =>
              `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Creating Inovative <br /> Digital Experiences
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ pb: 5, textAlign: "center", maxWidth: 650, fontWeight: 500 }}
        >
          A Full Stack Web Developer, Backed by proven technical expertise and
          creativity to develop impactful tools that enhance business and
          usability.
        </Typography>

        <Stack sx={{ gap: 1.5, justifyContent: "center" }}>
          <Button variant="contained" color="primary">
            Explore My Work
          </Button>
          <Button variant="contained" color="contrast">
            Let’s Collaborate
          </Button>
        </Stack>
      </Stack>

      <CurrentStatus
        title="Available"
        sx={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default Home;
