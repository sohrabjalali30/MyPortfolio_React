import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Avatart from "../assets/Img/IMG_3885.JPG";
import { Skills, SocialMedia, TypoMe } from "./components/about";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  Avatar,
  Slide,
  useScrollTrigger,
} from "@mui/material";

const About = () => {
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "#294B29",
          overflowY: "scroll",
        }}
      >
        <CardContent>
          <Helmet>
            <title>Sohrab Jalali | About me</title>
          </Helmet>
          <Grid container sx={{ mx: 3 }}>
            <TypoMe />
            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <Avatar
                variant="square"
                src={Avatart}
                sx={{
                  height: 200,
                  width: 200,
                  margin: "0 auto",
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              />
              <SocialMedia />
            </Grid>
          </Grid>
          <Skills />
        </CardContent>
      </Card>
    </Slide>
  );
};
export default About;
