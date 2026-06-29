import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { badgeClasses } from "@mui/material/Badge";
import SectionWrapper from "components/sections/SectionWrapper";
import StyledBadge from "components/styled/StyledBadge";
import Iconify from "components/base/Iconify";
import ProfileBg from "assets/images/profile-bg.webp";
import ProfileImg from "assets/images/profile.webp";

const Profile = () => {
  return (
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
        component={Stack}
        sx={{
          position: "absolute",
          top: 140,
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          gap: 2,
          zIndex: 2,
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
          <IconButton
            component={Link}
            href="https://github.com/riazul01"
            target="_blank"
          >
            <Iconify icon="mdi:github" />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/riazul-islam-86653321b/"
            target="_blank"
          >
            <Iconify icon="mdi:linkedin" />
          </IconButton>

          <Button
            variant="contained"
            startIcon={<Iconify icon="material-symbols:download-rounded" />}
          >
            Download CV
          </Button>
        </Stack>
      </SectionWrapper>
    </Box>
  );
};

export default Profile;
