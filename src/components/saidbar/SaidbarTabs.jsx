import { Tabs, Tab } from "@mui/material";
import { TabsData } from "../../constans/TabsDataSaidbar";
import { useContext } from "react";
import MainContext from "../../context";

const SaidbarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = TabsData();

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        indicatorColor="secondary"
        value={pageNumber}
        onChange={handlePageNumber}
      >
        {data.map((tabs, index) => (
          <Tab
            key={index}
            label={tabs.label}
            sx={{
              color: "#DBE7C9",
              fontSize: 16,
              "&.MuiTab-root": {
                backgroundColor: "#50623A",
                borderRadius: 1,
                my: 0.5,
                mx: 1,
                minHeight: 30,
              },
              "&.Mui-selected": {
                color: "black",
              },
            }}
            icon={tabs.icon}
            iconPosition="start"
            {...tabs}
            onClick={() => setDrawerOpen(false)}
          />
        ))}
      </Tabs>
    </>
  );
};
export default SaidbarTabs;
