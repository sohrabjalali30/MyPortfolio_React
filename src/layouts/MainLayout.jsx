import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./thems/theme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const cacheLTR = createCache({
  key: "muiltr",
  stylisPlugins: [prefixer],
});

const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheLTR}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
