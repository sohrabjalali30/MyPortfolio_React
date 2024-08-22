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

const NetSkill = () => {
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
          <Chip
            color="success"
            label="Network"
            sx={{ color: "#DBE7C9", p: 3 }}
          />
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
              <RandomReveal isPlaying duration={1} characters="Network+" />
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
              <RandomReveal isPlaying duration={2} characters="CCNA" />
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
              <RandomReveal isPlaying duration={3} characters="Windows" />
            </Typography>
            <Tooltip title="80 %" placement="bottom">
              <CircularProgress variant="determinate" value={80} />
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
              <RandomReveal isPlaying duration={4} characters="Linux" />
            </Typography>
            <Tooltip title="50 %" placement="bottom">
              <CircularProgress variant="determinate" value={50} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={5} characters="MikroTik" />
            </Typography>
            <Tooltip title="40 %" placement="bottom">
              <CircularProgress variant="determinate" value={40} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "grid",
              p: 1,
              alignContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 20, fontFamily: "Roboto" }}>
              <RandomReveal isPlaying duration={6} characters="Internet" />
            </Typography>
            <Tooltip title="80 %" placement="bottom">
              <CircularProgress variant="determinate" value={80} />
            </Tooltip>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default NetSkill;
