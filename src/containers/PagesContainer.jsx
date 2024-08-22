import Grid from "@mui/material/Unstable_Grid2/Grid2";

const PagesContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={9}
      sx={{ backgroundColor: "#294B29", height: "100hv", color: "#DBE7C9" }}
    >
      {children}
    </Grid>
  );
};
export default PagesContainer;
