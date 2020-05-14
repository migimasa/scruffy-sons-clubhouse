import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import PropTypes from "prop-types";

const CharacterWizardNavigation = ({
  nextStep,
  previousStep,
  totalSteps,
  step,
}) => (
  <div>
    <hr />
    {step > 1 && (
      <IconButton onClick={previousStep}>
        <NavigateBeforeIcon />
      </IconButton>
    )}
    {step < totalSteps ? (
      <IconButton onClick={nextStep}>
        <NavigateNextIcon />
      </IconButton>
    ) : (
      <Button onClick={nextStep}>Save</Button>
    )}
  </div>
);

CharacterWizardNavigation.propTypes = {
  nextStep: PropTypes.any,
  previousStep: PropTypes.any,
  totalSteps: PropTypes.number,
  step: PropTypes.number,
};
export default CharacterWizardNavigation;
