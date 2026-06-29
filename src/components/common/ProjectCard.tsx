import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import type { Project } from "data/about";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Box
      sx={{
        width: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          mb: 2,
        }}
      >
        <Link href={data.href} target="_blank">
          <CardMedia
            component="img"
            image={data.image}
            alt="project_image"
            sx={{
              width: 1,
              height: 280,
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Link>
      </Box>

      <Box sx={{ px: 1 }}>
        <Typography
          variant="subtitle1"
          component={Link}
          href={data.href}
          target="_blank"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            mb: 0.75,
          }}
        >
          {data.title} - {data.subtitle}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
