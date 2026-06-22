import Divider from "@mui/material/Divider";
import SectionWrapper from "components/sections/SectionWrapper";
import ProjectSlider from "components/common/ProjectSlider";
import ProjectCard from "components/common/ProjectCard";
import { PROJECTS } from "data/about";

const Projects = () => {
  return (
    <SectionWrapper>
      <ProjectSlider
        title="Selected Work"
        SliderCard={ProjectCard}
        data={PROJECTS}
      />
      <Divider sx={{ my: 6 }} />
    </SectionWrapper>
  );
};

export default Projects;

{
  /* <Typography
  variant="overline"
  sx={{
    color: "#a3a3a3",
    letterSpacing: "0.25em",
    fontWeight: 600,
    fontSize: "0.75rem",
    borderBottom: "1px solid #262626",
    pb: 0.5,
  }}
>
  Project Catalog
</Typography>; */
}

{
  /* <Grid container spacing={3.5}>
  {PROJECTS.map((project) => (
    <Grid size={{ xs: 12, md: 6 }} key={project.title}></Grid>
  ))}
</Grid>; */
}
