import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialMedia = () => {
  return (
    <Box
      component="div"
      sx={{
        m: "0 auto",
        textAlign: "center",
        display: {
          xl: "block",
          lg: "block",
          md: "block",
          sm: "none",
          xs: "none",
        },
      }}
    >
      <IconButton aria-label="Email">
        <a
          href="https://mail.google.com/mail/sohrab27sohrab@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </IconButton>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/sohrabjalali30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </IconButton>
      <IconButton aria-label="Linkedin">
        <a
          href="https://www.linkedin.com/in/sohrab-jalali-625582291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </IconButton>
    </Box>
  );
};
export default SocialMedia;
