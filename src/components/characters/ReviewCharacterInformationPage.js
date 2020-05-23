import React from "react";
import PropTypes from "prop-types";
import Typograpy from "@material-ui/core/Typography";
import CharacterWizardNavigation from "./CharacterWizardNavigation";

const ReviewCharacterInformationPage = ({
  character,
  stepNumber,
  onSave,
  saving,
  ...props
}) => {
  return (
    <>
      <Typograpy variant="h3">{character.name}</Typograpy>
      <CharacterWizardNavigation
        {...props}
        stepNumber={stepNumber}
        nextStep={onSave}
        saving={saving}
      />
    </>
  );
};

ReviewCharacterInformationPage.propTypes = {
  character: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default ReviewCharacterInformationPage;
