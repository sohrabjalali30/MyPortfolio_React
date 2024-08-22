import Grid from "@mui/material/Unstable_Grid2/Grid2";

const SaidbarContainer = ({ children }) => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={3}
      sx={{
        backgroundColor: "#789461",
        color: "#2D2727",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Grid>
  );
};
export default SaidbarContainer;
