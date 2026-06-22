import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography, { typographyClasses } from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import { SKILLS_DATA } from "data/about";

const Skills = () => {
  return (
    <SectionWrapper>
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
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  transition: theme.transitions.create("all", {
                    duration: 200,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  cursor: "default",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                    transform: "translateY(-2px)",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    [`& > .${typographyClasses.root}`]: {
                      color: "text.primary",
                    },
                  },
                })}
              >
                <Iconify icon={skill.icon} sx={{ fontSize: 18 }} />
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
      <Divider sx={{ my: 6 }} />
    </SectionWrapper>
  );
};

export default Skills;
