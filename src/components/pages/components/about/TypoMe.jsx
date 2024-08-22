import { CodeRounded } from "@mui/icons-material";
import { Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const TypoMe = () => {
  return (
    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
      <Divider textAlign="center">
        <Chip
          color="info"
          icon={<CodeRounded />}
          label={
            <Typography
              variant="body1"
              color="Foregrand"
              sx={{ textAlign: "center" }}
            >
              Who is me?
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
      <Typography
        variant="body1"
        color="Foregrand"
        textAlign="center"
        sx={{ mt: 2 }}
      >
        I was born in 1993 in Iran. I am very interested in working in the field
        of information technology, that's why I followed my studies in the field
        of graphics and then internet and network in the university. Due to my
        interest in social communication and gaining new experiences and
        interacting with people while working, I followed the field of marketing
        and sales.{" "}
      </Typography>
    </Grid>
  );
};
export default TypoMe;
