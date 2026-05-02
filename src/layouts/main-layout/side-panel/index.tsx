import { useState, type SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import ButtonBase from "@mui/material/ButtonBase";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Explorer from "./explorer/Explorer";
import Iconify from "components/base/Iconify";
import Search from "./search/Search";
import SourceControl from "./source-control/SourceControl";
import Debug from "./debug/Debug";

const a11yProps = (id: string) => ({
  id: `vertical-tab-${id}`,
  "aria-controls": `vertical-tabpanel-${id}`,
});

const SidePanel = () => {
  const [currentTab, setCurrentTab] = useState<string>("explorer");

  const handleChange = (_event: SyntheticEvent, newTab: string) => {
    setCurrentTab(newTab);
  };

  const tabs = [
    { id: "explorer", icon: "codicon:files" },
    { id: "search", icon: "codicon:search-large" },
    { id: "git", icon: "codicon:git-branch" },
    { id: "debug", icon: "codicon:debug-alt" },
  ];

  const actions = [
    { id: "account", icon: "codicon:account" },
    { id: "settings", icon: "codicon:settings-gear" },
  ];

  return (
    <Stack>
      <Tabs
        orientation="vertical"
        value={currentTab}
        onChange={handleChange}
        aria-label="sidebar rail tabs"
        sx={(theme) => ({
          width: 50,
          borderRight: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.default,

          [`& .${tabsClasses.vertical}`]: {
            height: 1,
          },
        })}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={
              <Iconify
                icon={tab.icon}
                sx={{
                  color: currentTab === tab.id ? "white" : "text.disabled",
                  fontSize: 24,
                }}
              />
            }
            sx={{ width: 1, height: 50 }}
            {...a11yProps(tab.id)}
          />
        ))}

        {actions.map((action, index) => (
          <ButtonBase
            key={action.id}
            sx={{ width: 1, height: 50, mt: index === 0 ? "auto" : undefined }}
          >
            <Iconify
              icon={action.icon}
              sx={{
                color: "text.disabled",
                fontSize: action.id === "account" ? 21 : 24,
              }}
            />
          </ButtonBase>
        ))}
      </Tabs>

      <TabPanel value={currentTab} index="explorer">
        <Explorer />
      </TabPanel>
      <TabPanel value={currentTab} index="search">
        <Search />
      </TabPanel>
      <TabPanel value={currentTab} index="git">
        <SourceControl />
      </TabPanel>
      <TabPanel value={currentTab} index="debug">
        <Debug />
      </TabPanel>
    </Stack>
  );
};

export default SidePanel;
