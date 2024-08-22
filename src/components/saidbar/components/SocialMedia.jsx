import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocailMedia = () => {
  return (
    <Box
      component="div"
      sx={{
        m: "0 auto",

        textAlign: "center",
      }}
    >
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
export default SocailMedia;
