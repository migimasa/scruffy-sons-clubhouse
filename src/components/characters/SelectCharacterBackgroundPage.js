import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextTabPanel from "../common/TextTabPanel";

const SelectCharacterBackgroundPage = ({
  backgrounds,
  // onNext,
  // onCancel,
  // saving = false,
  // errors = {},
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Character Backgrounds"
      className={classes.tabs}
    >
      {backgrounds.map((bg, index) => {
        return <Tab key={bg.id} label={bg.description} {...a11yProps(index)} />;
      })}

      {backgrounds.map((bg, index) => {
        return (
          <TextTabPanel key={bg.id} value={value} index={index}>
            {bg.descriptionDetail}
          </TextTabPanel>
        );
      })}
    </Tabs>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
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
