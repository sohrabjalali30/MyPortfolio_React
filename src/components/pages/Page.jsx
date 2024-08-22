import { Box } from "@mui/material";

const Page = (props) => {
  const { children, index, pageNumber, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabPanel-${index}`}
      aria-labelledby={`sidebar-tabs-${index}`}
      {...other}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};
export default Page;
