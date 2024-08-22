import { Box, Divider } from "@mui/material";
import { SaidbarHeader, SaidbarFooter, SaidbarTabs } from "./index";

const DrawerContent = () => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "#789461",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <SaidbarHeader />
        <SaidbarTabs />
        <Divider
          dark
          orientation="horizontal"
          variant="fullWidth"
          sx={{ borderColor: "#413543" }}
        />
        <SaidbarFooter />
      </Box>
    </>
  );
};
export default DrawerContent;
