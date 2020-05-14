import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TextTabPanel from "../common/TextTabPanel";
import PropTypes from "prop-types";
import CharacterWizardNavigation from "./CharacterWizardNavigation";

const SelectCharacterHookPage = ({ hooks, ...props }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            centered
          >
            {hooks
              .filter((h) => h.showInSelection)
              .map((h, index) => {
                return (
                  <Tab key={h.id} label={h.description} {...a11yProps(index)} />
                );
              })}
          </Tabs>
        </AppBar>
        {hooks
          .filter((h) => h.showInSelection)
          .map((h, index) => {
            return (
              <TextTabPanel key={h.id} value={value} index={index}>
                {h.descriptionDetail}
              </TextTabPanel>
            );
          })}
        <CharacterWizardNavigation step={2} {...props} />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `hook-tab-${index}`,
    "aria-controls": `hook-tabpanel-${index}`,
  };
}

SelectCharacterHookPage.propTypes = {
  hooks: PropTypes.array.isRequired,
};
export default SelectCharacterHookPage;
