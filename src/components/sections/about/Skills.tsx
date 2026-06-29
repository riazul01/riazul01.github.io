import Stack from "@mui/material/Stack";
import Typography, { typographyClasses } from "@mui/material/Typography";
import Iconify from "components/base/Iconify";
import { SKILLS_DATA } from "data/about";

const Skills = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Skills
      </Typography>

      {SKILLS_DATA.map((category, index) => (
        <Stack
          key={category.title}
          direction="column"
          spacing={2}
          sx={{ height: 1, mb: SKILLS_DATA.length - 1 !== index ? 4 : 0 }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              color: "text.secondary",
              textTransform: "uppercase",
              tracking: 1,
            }}
          >
            {category.title}
          </Typography>

          <Stack spacing={1.5} sx={{ flexWrap: "wrap" }}>
            {category.items.map((skill) => (
              <Stack
                key={skill.name}
                spacing={1}
                sx={(theme) => ({
                  px: 2,
                  py: 1,
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  alignItems: "center",
                  cursor: "default",
                  transition: theme.transitions.create("all", {
                    duration: 200,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                    transform: "translateY(-2px)",
                    [`& > .${typographyClasses.root}`]: {
                      color: "text.primary",
                    },
                  },
                })}
              >
                <Iconify
                  icon={skill.icon}
                  sx={{
                    fontSize: 18,
                    filter: skill.invert ? "invert(100%)" : "unset",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={(theme) => ({
                    fontWeight: 600,
                    color: "text.secondary",
                    transition: theme.transitions.create("color", {
                      duration: 200,
                      easing: theme.transitions.easing.easeInOut,
                    }),
                  })}
                >
                  {skill.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
};

export default Skills;
