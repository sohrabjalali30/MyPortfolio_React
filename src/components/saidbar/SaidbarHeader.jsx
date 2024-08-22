import { Avatar, Typography, Divider } from "@mui/material";
import Logo1 from "../assets/Img/self3.png";

const SaidbarHeader = () => {
  return (
    <>
      <Avatar
        alt="Logo"
        src={Logo1}
        sx={{
          width: 120,
          height: 120,
          border: "1px solid black",
          margin: "0 auto",
          mt: "15px",
          mb: "20px",
        }}
      />

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ color: "white", mb: 1 }}
      >
        Sohrab Jalali
      </Typography>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        sx={{ borderColor: "#413543" }}
      />
      <Typography variant="caption">I'm Web Disgner</Typography>
    </>
  );
};
export default SaidbarHeader;
