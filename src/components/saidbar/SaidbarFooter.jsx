import { CopyrightRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import SocailMedia from "./components/SocialMedia";

const SaidbarFooter = () => {
  return (
    <>
      <SocailMedia />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "botten",
          textAlign: "center",
          alignItems: "center",
          fontSize: 12,
          color: "#8F43EE",
          mt: 5,
        }}
      >
        <Typography variant="caption" sx={{ color: "#413543", fontSize: 14 }}>
          Designed By Sohrab Jalali
        </Typography>
        <Typography variant="caption" sx={{ color: "#413543", fontSize: 14 }}>
          CopyRight 2024{" "}
          <CopyrightRounded sx={{ color: "#413543", fontSize: 14 }} s />
        </Typography>
      </Box>
    </>
  );
};
export default SaidbarFooter;
