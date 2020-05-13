import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const SelectCharacterBackgroundPage = ({
  character,
  backgrounds,
  onNext,
  onCancel,
  saving = false,
  errors = {},
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (backgrounds.length === 0) {
      loadCharacterBackgrounds().catch((err) => {
        alert("Loading character backgrounds failed" + err);
      });
    }
  }, character);

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
    ></Tabs>
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

export default SelectCharacterBackgroundPage;
