import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButten = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          color="primary"
          aria-label="Meno"
          size="small"
          sx={{ m: 2, backgroundColor: "secondary" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
    </>
  );
};
export default DrawerActionButten;
