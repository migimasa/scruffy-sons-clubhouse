import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import CharacterWizardNavigation from "./CharacterWizardNavigation";

const ManageCharacterNameForm = ({
  character,
  onChange,
  stepNumber,
  ...props
}) => {
  return (
    <>
      <TextField
        name="name"
        label="Name"
        value={character.name}
        onChange={onChange}
      />
      <CharacterWizardNavigation step={stepNumber} {...props} />
    </>
  );
};

ManageCharacterNameForm.propTypes = {
  character: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
  stepNumber: PropTypes.number.isRequired,
};

export default ManageCharacterNameForm;
// const ManageCharacterNamePage = ({
//   ...props
// }) => {
//   const [character, setCharacter] = useState({...props.character});
//   const [errors, setErrors] = useState({});

//   function handleChange(event) {
//     const {name, value} = event.target;

//   }
// }
