import { Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Edo } from "../../../../constans/detailsMe";
import { CastForEducationRounded, School } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const Edocation = () => {
  return (
    <Grid xs={12}>
      <Divider
        textAlign="right"
        sx={{
          "&::before , &::after": { borderColor: "primary" },
        }}
      >
        <Chip
          color="warning"
          icon={<CastForEducationRounded />}
          label={
            <Typography
              variant="body1"
              color="Foregrand"
              sx={{ textAlign: "center" }}
            >
              Education
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
      <Timeline position="alternate">
        {Edo.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="filled">
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="button" color="#0D9276">
                {item.cert}
              </Typography>
              <Typography variant="body1" color="#BBE2EC">
                {item.major}
              </Typography>
              <Typography variant="body2" color="#FFF6E9">
                {item.of}
              </Typography>
              <Typography variant="body2" color="#40A2E3">
                {item.years}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
};
export default Edocation;
