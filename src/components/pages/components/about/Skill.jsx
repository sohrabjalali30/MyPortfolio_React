import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DesSkill, DevSkill, NetSkill } from "./";

const Skill = () => {
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 5,
        }}
      >
        <DesSkill />
        <DevSkill />
        <NetSkill />
      </Grid>
    </>
  );
};
export default Skill;
