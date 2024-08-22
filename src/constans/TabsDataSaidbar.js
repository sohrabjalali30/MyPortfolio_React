import {
   ContactPhoneRounded,
  HomeRounded,
  InfoRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";

const tabsProps = (index) => {
    return {
      id: `sidebar-tabs-${index}`,
      "aria-conterols": `tabPanel-${index}`,
    };
  };

  export const TabsData = ()=>{

 
  const tabs = [
    {
      label: "Home",
      icon: <HomeRounded sx={{ color: "#413543", fontSize: 20 }} />,
      ...tabsProps(0),
    },
    {
      label: "About me",
      icon: <InfoRounded sx={{ color: "#413543", fontSize: 20 }} />,
      ...tabsProps(1),
    },
    {
      label: "My Resume",
      icon: <TextSnippetRounded sx={{ color: "#413543", fontSize: 20 }} />,
      ...tabsProps(2),
    },
    {
      label: "Work Samples",
      icon: <TerminalRounded sx={{ color: "#413543", fontSize: 20 }} />,
      ...tabsProps(3),
    },
   
    {
      label: "Contact Me",
      icon: <ContactPhoneRounded sx={{ color: "#413543", fontSize: 20 }} />,
      ...tabsProps(4),
    },
  ];

  return tabs;
   }