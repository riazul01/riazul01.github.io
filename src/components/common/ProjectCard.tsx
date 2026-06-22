import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import type { Project } from "data/about";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  console.log(data);
  return (
    <Box
      sx={{
        width: 1,
        backgroundColor: "#0b0b0b",
        border: "1px solid #171717",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        "&:hover": {
          borderColor: "#262626",
        },
      }}
    >
      {/* Project Preview Image Layer */}
      <Box sx={{ width: 1, position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" // Replace with your dynamic project image source
          alt="Project dashboard sneak peek"
          sx={{
            width: 1,
            height: { xs: 200, sm: 240 },
            objectFit: "cover",
            objectPosition: "top center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1,
            height: "60px",
            background: "linear-gradient(to bottom, rgba(11,11,11,0), #0b0b0b)",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Typography & Context Content Block */}
      <Box sx={{ p: 3.5 }}>
        <Stack direction="column" spacing={1.5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ededed",
            }}
          >
            Enterprise Analytics Dashboard
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#a3a3a3",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            A high-performance monitoring interface engineered to aggregate raw
            systems data stream variables into responsive charting layouts.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
