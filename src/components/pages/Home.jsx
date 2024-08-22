import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import logoWorking from "../assets/Img/logoWorking.png";
import DataHome from "./components/DataHome";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${logoWorking})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Helmet>
          <title>Sohrab Jalali | Home</title>
        </Helmet>
        <DataHome />
      </Box>
    </>
  );
};

export default Home;
