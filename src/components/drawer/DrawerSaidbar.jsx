import { DrawerContent } from "../saidbar/index";
import { Drawer } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerSaidbar = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,

            backgroundColor: "#789461",
          },

          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};
export default DrawerSaidbar;
