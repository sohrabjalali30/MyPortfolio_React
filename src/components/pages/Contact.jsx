import { ContactPage } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Slide,
  TextField,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Contact = () => {
  const trigger = useScrollTrigger();
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "#294B29",
        overflowY: "auto",
        disply: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>Sohrab Jalali | Cuntact Me</title>
      </Helmet>
      <Slide in={!trigger}>
        <CardContent>
          {" "}
          <Divider textAlign="center">
            <Chip
              color="info"
              icon={<ContactPage />}
              label={
                <Typography
                  variant="body1"
                  color="Foregrand"
                  sx={{ textAlign: "center" }}
                >
                  Contact Me
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>
          <form>
            <Grid container sx={{ mt: 3 }} spacing={1}>
              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  maxWidth: "450",
                  margin: "0 auto",
                  padding: "20px 5 px",
                }}
              >
                {" "}
                <Typography variant="h5" color={"white"} sx={{ my: 1 }}>
                  Contact Me
                </Typography>
                <hr color="gray" />
                <Typography variant="body2" color={"whitesmoke"} sx={{ my: 3 }}>
                  You could complete this form be connected with me.
                </Typography>
                <TextField
                  label="Fuul Name"
                  placeholder="Full Naame"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Phone"
                  type="number"
                  placeholder="Phone Number"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Issue"
                  type="text"
                  placeholder="Issue"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Message"
                  placeholder="Message"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="info" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Slide>
    </Card>
  );
};
export default Contact;
