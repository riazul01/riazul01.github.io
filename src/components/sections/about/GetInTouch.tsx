import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GetInTouch = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: 650,
        mx: "auto",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          fontSize: "caption.fontSize",
          letterSpacing: "0.2em",
          fontWeight: 600,
          mb: 3,
        }}
      >
        // NEXT STEPS
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          letterSpacing: "-0.04em",
          mb: 2,
        }}
      >
        Let's build something together
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          mb: 4,
        }}
      >
        I'm currently looking for new opportunities or open-source
        collaborations. If you have a project in mind or just want to chat, drop
        me a message.
      </Typography>

      <Button
        variant="contained"
        color="contrast"
        size="large"
        component="a"
        href="mailto:riazul.inbox@gmail.com"
      >
        👋 Say Hello
      </Button>
    </Box>
  );
};

export default GetInTouch;
