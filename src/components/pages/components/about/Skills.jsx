import { Person } from "@mui/icons-material";
import { Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Skill from "./Skill";

const Skills = () => {
  return (
    <Grid container>
      <Grid sx={{ width: 1, mt: 1 }}>
        <Divider
          textAlign="center"
          sx={{
            "&::before , &::after": { borderColor: "primary" },
          }}
        >
          <Chip
            color="primary"
            icon={<Person />}
            label={
              <Typography
                variant="body1"
                color="Foregrand"
                sx={{ textAlign: "center" }}
              >
                My Skills{" "}
              </Typography>
            }
            sx={{ p: 3 }}
          />
        </Divider>
        <Skill />
      </Grid>
    </Grid>
  );
};
export default Skills;
