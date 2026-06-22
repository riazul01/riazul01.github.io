import Typography from "@mui/material/Typography";
import SectionWrapper from "components/sections/SectionWrapper";

const Footer = () => {
  return (
    <SectionWrapper>
      <Typography sx={{ py: 2, color: 'warning.main', textAlign: 'center' }}>
        🚧 This site is under development. More updates coming soon.
      </Typography>
    </SectionWrapper>
  );
};

export default Footer;
