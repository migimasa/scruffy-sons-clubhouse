import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextTabPanel from "../common/TextTabPanel";
import CharacterWizardNavigation from "./CharacterWizardNavigation";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const SelectCharacterBackgroundPage = ({
  backgrounds,
  // onNext,
  // onCancel,
  // saving = false,
  // errors = {},
  ...props
}) => {
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
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Character Backgrounds"
            indicatorColor="primary"
            textColor="primary"
            scrollbuttons="auto"
            centered
          >
            {backgrounds
              .filter((bg) => bg.showInSelection)
              .map((bg, index) => {
                return (
                  <Tab
                    key={bg.id}
                    label={bg.description}
                    {...a11yProps(index)}
                  />
                );
              })}
          </Tabs>
        </AppBar>

        {backgrounds
          .filter((bg) => bg.showInSelection)
          .map((bg, index) => {
            return (
              <TextTabPanel
                key={bg.id}
                value={value}
                index={index}
                className={classes.card}
              >
                {bg.descriptionDetail}
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
  card: {
    height: 200,
  },
}));

function a11yProps(index) {
  return {
    id: `background-tab-${index}`,
    "aria-controls": `background-tabpanel-${index}`,
  };
}

SelectCharacterBackgroundPage.propTypes = {
  backgrounds: PropTypes.array.isRequired,
  onNext: PropTypes.func,
  onCancel: PropTypes.func,
  errors: PropTypes.object,
  saving: PropTypes.bool,
};

export default SelectCharacterBackgroundPage;
