import {
  Card,
  CardContent,
  Chip,
  Divider,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import { SettingsAccessibilityRounded } from "@mui/icons-material";
import { Cources, Edocation, Expriance } from "../pages/components/resume";

const Resume = () => {
  const trigger = useScrollTrigger();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "#294B29",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>Sohrab Jalali | My Resume</title>
      </Helmet>
      <Slide in={!trigger}>
        <CardContent>
          <Divider textAlign="center">
            <Chip
              color="info"
              icon={<SettingsAccessibilityRounded />}
              label={
                <Typography
                  variant="body1"
                  color="Foregrand"
                  sx={{ textAlign: "center" }}
                >
                  My Resume
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>
          <Grid container sx={{ mt: 5 }}>
            <Edocation />
            <Expriance />
            <Cources />
          </Grid>
        </CardContent>
      </Slide>
    </Card>
  );
};
export default Resume;
