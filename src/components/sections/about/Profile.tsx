import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { badgeClasses } from "@mui/material/Badge";
import StyledBadge from "components/styled/StyledBadge";
import SectionWrapper from "components/sections/SectionWrapper";
import Iconify from "components/base/Iconify";
import ProfileBg from "assets/images/profile-bg.webp";
import ProfileImg from "assets/images/profile.webp";
import { Link } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          width: 1,
          height: 270,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${ProfileBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          mb: 3,
        }}
      >
        <SectionWrapper
          sx={{
            position: "absolute",
            top: 140,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: 1,
              alignItems: "center",
            }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                mb: 1,
                [`& .${badgeClasses.badge}`]: {
                  height: 14,
                  width: 14,
                  bottom: 18,
                  right: 18,
                },
              }}
            >
              <Avatar
                alt="Riazul Islam"
                src={ProfileImg}
                sx={{
                  width: 130,
                  height: 130,
                }}
              />
            </StyledBadge>

            <div>
              <Typography
                variant="h4"
                sx={{
                  letterSpacing: "-0.02em",
                  mb: 0.5,
                }}
              >
                Riazul Islam
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "text.secondary",
                  letterSpacing: "0.01em",
                }}
              >
                Software Engineer
              </Typography>
            </div>

            <Stack spacing={1.5} sx={{ ml: "auto", alignItems: "center" }}>
              <IconButton component={Link} href="https://github.com/riazul01" target="_blank">
                <Iconify icon="mdi:github" />
              </IconButton>

              <IconButton component={Link} href="https://www.linkedin.com/in/riazul-islam-86653321b/" target="_blank">
                <Iconify icon="mdi:linkedin" />
              </IconButton>

              <Button
                variant="contained"
                startIcon={<Iconify icon="material-symbols:download-rounded" />}
              >
                Download CV
              </Button>
            </Stack>
          </Stack>
        </SectionWrapper>
      </Box>

      <SectionWrapper>
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
        <Divider sx={{ my: 6 }} />
      </SectionWrapper>
    </>
  );
};

export default Profile;
