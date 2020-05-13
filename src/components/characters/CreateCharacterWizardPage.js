import React, { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import CharacterWizardNav from "./CharacterWizardNav";
import PropTypes from "prop-types";
import { newCharacter } from "../../../tools/mockData";
import { loadCharacterBackgrounds } from "../../redux/actions/backgroundActions";
import { connect } from "react-redux";
import SelectCharacterBackgroundPage from "./SelectCharacterBackgroundPage";

import styles from "./CreateCharacterWizardPage.less";
import transitions from "./CharacterWizardTransitions.less";

const CreateCharacterWizardPage = ({ backgrounds, ...props }) => {
  const [state, updateState] = useState({
    form: {},
    transitions: {
      enterRight: `${transitions.animated} ${transitions.enterRight}`,
      enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
      exitRight: `${transitions.animated} ${transitions.exitRight}`,
      exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
      intro: `${transitions.animated} ${transitions.intro}`,
    },
  });
  const [character, setCharacter] = useState({ ...props.character });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const { loadCharacterBackgrounds } = props;
    debugger;
    if (backgrounds.length === 0) {
      loadCharacterBackgrounds().catch((error) => {
        alert("Loading character backgrounds failed" + error);
      });
    }
  }, [character]);

  // function characterIsValid() {
  //   const { characterBackgroundId } = character;
  //   const errors = {};

  //   if (!characterBackgroundId)
  //     errors.characterBackground = "Character Background is required.";

  //   setErrors(errors);

  //   // Character is valid if the errors object still has no properties
  //   return Object.keys(errors).length === 0;
  // }

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setCharacter((prevChar) => ({
  //     ...prevChar,
  //     [name]: value,
  //   }));
  // }

  // function handleSave(event) {
  //   event.preventDefault();
  //   if (!characterIsValid()) return;

  //   setSaving(true);
  //   //TODO Save Character
  //   saveCharacter(character)
  //     .then(() => {})
  //     .catch((error) => {
  //       setSaving(false);
  //       setErrors({ onSave: error.message });
  //     });
  // }

  // const updateForm = (key, value) => {
  //   const { form } = state;

  //   form[key] = value;
  //   updateState({
  //     ...state,
  //     form,
  //   });
  // };

  // Do something on step change
  const onStepChange = () => {
    //console.log(stats);
  };

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  return (
    <div className="container">
      <h3>Create a New Character</h3>
      <div className={"jumbotron"}>
        <div className="row">
          <div
            className={`col-12 col-sm-6 offset-sm-31 ${styles["rsw-wrapper"]}`}
          >
            <StepWizard
              onStepChange={onStepChange}
              isHashEnabled
              transitions={state.transitions}
              nav={<CharacterWizardNav />}
              instance={setInstance}
            >
              <SelectCharacterBackgroundPage
                hashKey={"FirstStep"}
                backgrounds={backgrounds}
                errors={errors}
                saving={saving}
              />
              <Last hashKey={"TheEnd!"} />
            </StepWizard>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateCharacterWizardPage.propTypes = {
  character: PropTypes.object.isRequired,
  backgrounds: PropTypes.array.isRequired,
  loadCharacterBackgrounds: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  const character = newCharacter;

  return {
    character,
    backgrounds: state.backgrounds,
  };
}

const mapDispatchToProps = {
  loadCharacterBackgrounds,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacterWizardPage);

const Last = () => {
  // const submit = () => {
  //   alert("You did it! Yay!"); //eslint-disable-line
  // };

  return (
    <div>
      <div className={"text-center"}>
        <h3>This is the last step in the example!</h3>
        <hr />
      </div>
    </div>
  );
};
