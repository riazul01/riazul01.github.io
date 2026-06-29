import ProjectCard from "components/common/ProjectCard";
import ProjectSlider from "components/common/ProjectSlider";
import { PROJECTS } from "data/about";

const Projects = () => {
  return (
    <ProjectSlider
      title="Latest Work"
      SliderCard={ProjectCard}
      data={PROJECTS}
    />
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
