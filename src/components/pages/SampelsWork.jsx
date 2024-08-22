import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FavoriteRounded, WorkHistoryRounded } from "@mui/icons-material";
import { DesignWeb } from "../../constans/myProjects";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";

const SampelsWork = () => {
  const trigger = useScrollTrigger();
  const [count, setCount] = useState(0);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "#294B29",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>Sohrab Jalali | Work Samples </title>
      </Helmet>
      <Slide in={!trigger}>
        <CardContent>
          <Divider textAlign="center">
            <Chip
              color="info"
              icon={<WorkHistoryRounded />}
              label={
                <Typography
                  variant="body1"
                  color="Foregrand"
                  sx={{ textAlign: "center" }}
                >
                  Work Samples
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>

          <Grid container sx={{ mt: 3 }}>
            {DesignWeb.map((DesignWeb, index) => (
              <Grid xs={12} sm={6} md={6} lg={4} xl={3} sx={{ px: 2, mb: 2 }}>
                <Card sx={{ maxWidth: 345, backgroundColor: "#789461" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      width="250"
                      image={DesignWeb.img}
                      alt={DesignWeb.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="overline"
                        component="div"
                        color="#DBE7C9"
                      >
                        {DesignWeb.title}
                      </Typography>
                      <Typography variant="body2" color="black">
                        <EllipsisText text={DesignWeb.info} length={100} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      sx={{
                        color: "whitesmoke",
                        borderColor: "black",
                        border: "1px solid black",
                        mx: 1,
                      }}
                      size="small"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                  <CardActions>
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() => setCount((count) => count + 1)}
                    >
                      <FavoriteRounded
                        sx={{ color: "#7D0A0A", mx: 1, size: "small" }}
                      />
                      <Typography sx={{ size: "small", color: "yellowgreen" }}>
                        {count}
                      </Typography>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Slide>
    </Card>
  );
};
export default SampelsWork;
