import { Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Expr } from "../../../../constans/detailsMe";
import { Work, WorkHistoryRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const Expriance = () => {
  return (
    <Grid xs={12} sx={{ mt: 4 }}>
      <Divider
        textAlign="center"
        sx={{
          "&::before , &::after": { borderColor: "primary" },
        }}
      >
        <Chip
          color="primary"
          icon={<WorkHistoryRounded />}
          label={
            <Typography
              variant="body1"
              color="Foregrand"
              sx={{ textAlign: "center" }}
            >
              Experience
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
      <Timeline position="alternate">
        {Expr.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="filled">
                <Work />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="button" color="#0D9276">
                {item.JobTitle}
              </Typography>
              <Typography variant="body1" color="#BBE2EC">
                {item.AreaOfExpertise}
              </Typography>
              <Typography variant="body2" color="#FFF6E9">
                {item.PeriodOfTime}
              </Typography>
              <Typography variant="body2" color="#40A2E3">
                {item.CompanyName}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
};
export default Expriance;
