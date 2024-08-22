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

const DevSkill = () => {
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
          <Chip color="error" label="Development" sx={{ p: 3 }} />
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
              <RandomReveal isPlaying duration={1} characters="HTML" />
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
              <RandomReveal isPlaying duration={2} characters="CSS" />
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
              <RandomReveal isPlaying duration={3} characters="JS" />
            </Typography>
            <Tooltip title="55 %" placement="bottom">
              <CircularProgress variant="determinate" value={55} />
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
              <RandomReveal isPlaying duration={4} characters="React" />
            </Typography>
            <Tooltip title="75 %" placement="bottom">
              <CircularProgress variant="determinate" value={75} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={5} characters="MUI" />
            </Typography>
            <Tooltip title="65 %" placement="bottom">
              <CircularProgress variant="determinate" value={65} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={6} characters="OOP" />
            </Typography>
            <Tooltip title="90 %" placement="bottom">
              <CircularProgress variant="determinate" value={90} />
            </Tooltip>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default DevSkill;
