import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Chip, Divider, Typography } from "@mui/material";
import { Certi } from "../../../../constans/detailsMe";
import { BookRounded, ModelTraining } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const Cources = () => {
  return (
    <Grid xs={12} sx={{ mt: 4 }}>
      <Divider
        textAlign="left"
        sx={{
          "&::before , &::after": { borderColor: "primary" },
        }}
      >
        <Chip
          color="error"
          icon={<BookRounded />}
          label={
            <Typography
              variant="body1"
              color="Foregrand"
              sx={{ textAlign: "center" }}
            >
              Courses Pro
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
      <Timeline position="alternate">
        {Certi.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="error" variant="filled">
                <ModelTraining />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="button" color="#0D9276">
                {item.TrainingCourse}
              </Typography>
              <Typography variant="body1" color="#BBE2EC">
                {item.ForTime}
              </Typography>
              <Typography variant="body2" color="#FFF6E9">
                {item.InDate}
              </Typography>
              <Typography variant="body2" color="#40A2E3">
                {item.TrainingBy}
              </Typography>
              <Typography variant="body2" color="#65B741">
                {item.Certificate}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
};
export default Cources;
