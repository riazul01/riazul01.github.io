import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import Image from "components/base/Image";
import { EXPERIENCE_DATA } from "data/about";
import Divider from "@mui/material/Divider";

const Experience = () => {
  return (
    <SectionWrapper>
      <Typography variant="h4" sx={{ mb: 4, letterSpacing: "-0.04em" }}>
        Experience
      </Typography>

      <Stack direction="column" spacing={8}>
        {EXPERIENCE_DATA.map((exp, idx) => (
          <Stack
            key={idx}
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 6 }}
          >
            <Box sx={{ width: { xs: 1, md: 220 }, flexShrink: 0 }}>
              <Stack
                spacing={1}
                sx={{
                  mt: 0.5,
                  alignItems: "center",
                  color: "text.secondary",
                  position: { md: "sticky" },
                  top: 40,
                }}
              >
                <Iconify icon="eva:calendar-outline" />
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: "-0.01em",
                    fontWeight: 600,
                  }}
                >
                  {exp.period}
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {exp.role}
              </Typography>

              <Stack
                spacing={1.5}
                sx={{ mb: 2.5, alignItems: "center", flexWrap: "wrap" }}
              >
                <Stack
                  component={Link}
                  href={exp.company.url}
                  spacing={1}
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={exp.company.logo}
                    sx={{ height: 18, width: 18, borderRadius: "50%" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company.name}
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    width: 3,
                    height: 3,
                    backgroundColor: "grey.800",
                    borderRadius: "50%",
                  }}
                />

                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{
                    color: "text.secondary",
                    alignItems: "center",
                  }}
                >
                  <Iconify
                    icon="weui:location-outlined"
                    sx={{ fontSize: 16 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {exp.location}
                  </Typography>
                </Stack>
              </Stack>

              {exp.responsibilities.map((item, index) => (
                <Stack
                  spacing={2}
                  sx={{
                    alignItems: "baseline",
                    mb: exp.responsibilities.length - 1 !== index ? 2 : 3,
                  }}
                  key={item?.toString()}
                >
                  <Iconify
                    icon="boxicons:finger-right"
                    sx={{
                      color: "success.main",
                      transform: "translateY(2px)",
                      flexShrink: 0,
                    }}
                  />

                  {item}
                </Stack>
              ))}

              {exp.technologies && exp.technologies.length > 0 && (
                <Stack sx={{ flexWrap: "wrap", gap: 1 }}>
                  {exp.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        backgroundColor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                        cursor: "default",
                      }}
                    />
                  ))}
                </Stack>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
      <Divider sx={{ my: 6 }} />
    </SectionWrapper>
  );
};

export default Experience;
