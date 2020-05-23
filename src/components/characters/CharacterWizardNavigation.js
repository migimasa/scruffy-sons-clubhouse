import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const CharacterWizardNavigation = ({
  nextStep,
  previousStep,
  totalSteps,
  step,
  saving,
}) => {
  return (
    <Grid container spacing={3}>
      <Divider />
      <Grid item xs={11}>
        {step > 1 && (
          <IconButton onClick={previousStep}>
            <NavigateBeforeIcon />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={1}>
        {step < totalSteps ? (
          <IconButton onClick={nextStep}>
            <NavigateNextIcon />
          </IconButton>
        ) : (
          <Button onClick={nextStep} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

CharacterWizardNavigation.propTypes = {
  nextStep: PropTypes.any,
  previousStep: PropTypes.any,
  totalSteps: PropTypes.number,
  step: PropTypes.number,
  saving: PropTypes.bool,
};
export default CharacterWizardNavigation;
