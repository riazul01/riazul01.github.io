import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Summary = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        color: "text.secondary",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "-0.02em",
      }}
    >
      Driven by curiosity and a passion for creating{" "}
      <Box
        component="span"
        sx={{
          px: 1,
          color: "white",
          fontWeight: 600,
          position: "relative",
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          borderRadius: 1,
        }}
      >
        meaningful web experiences
      </Box>
      . I thrive on learning new systems, tackling complex architecture
      challenges, and turning abstract ideas into{" "}
      <Box
        component="span"
        sx={{
          px: 1,
          color: "black",
          fontWeight: 600,
          backgroundColor: "warning.main",
          borderRadius: 1,
        }}
      >
        interactive digital applications
      </Box>
      .
    </Typography>
  );
};

export default Summary;
