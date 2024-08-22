import {
  Divider,
  Chip,
  Box,
  CircularProgress,
  Typography,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { RandomReveal } from "react-random-reveal";

const DesSkill = () => {
  return (
    <>
      <Grid xs={12} sm={12} md={6} lg={4} xl={4} alignItems="center">
        <Divider
          display="flex"
          sx={{
            "&::before , &::after": {
              borderColor: "#Foregrand",
            },
          }}
        >
          <Chip color="warning" label="Design" sx={{ p: 3 }} />
        </Divider>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#Foregrand",
            margin: 1,
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={1} characters="Wireframe" />
            </Typography>
            <Tooltip title="90 %" placement="bottom">
              <CircularProgress variant="determinate" value={90} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={2} characters="Prototype" />
            </Typography>
            <Tooltip title="95 %" placement="bottom">
              <CircularProgress variant="determinate" value={95} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={3} characters="Mockup" />
            </Typography>
            <Tooltip title="75 %" placement="bottom">
              <CircularProgress variant="determinate" value={75} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#Foregrand",
            margin: 1,
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={4} characters="IA" />
            </Typography>
            <Tooltip title="85 %" placement="bottom">
              <CircularProgress variant="determinate" value={85} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={5} characters="Sketch" />
            </Typography>
            <Tooltip title="68 %" placement="bottom">
              <CircularProgress variant="determinate" value={68} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={6} characters="Marketing" />
            </Typography>
            <Tooltip title="96 %" placement="bottom">
              <CircularProgress variant="determinate" value={96} />
            </Tooltip>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default DesSkill;
