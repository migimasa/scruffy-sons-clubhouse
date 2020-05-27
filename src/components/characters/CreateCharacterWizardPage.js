import React, { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import CharacterWizardProgress from "./CharacterWizardProgress";
import PropTypes from "prop-types";
import { newCharacter } from "../../../tools/mockData";
import { loadCharacterBackgrounds } from "../../redux/actions/backgroundActions";
import { loadCharacterHooks } from "../../redux/actions/hookActions";
import { saveCharacter } from "../../redux/actions/characterActions";
import { connect } from "react-redux";
import SelectCharacterBackgroundPage from "./SelectCharacterBackgroundPage";
import SelectCharacterHookPage from "./SelectCharacterHookPage";
import Container from "@material-ui/core/Container";
import ManageCharacterNameForm from "./ManageCharacterNameForm";
import Typography from "@material-ui/core/Typography";
import ReviewCharacterInformationPage from "./ReviewCharacterInformationPage";

import transitions from "./CharacterWizardTransitions.less";

const CreateCharacterWizardPage = ({ auth, backgrounds, hooks, ...props }) => {
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
    const { loadCharacterBackgrounds, loadCharacterHooks } = props;
    if (backgrounds.length === 0) {
      loadCharacterBackgrounds().catch((error) => {
        alert("Loading character backgrounds failed" + error);
      });
    }

    if (hooks.length === 0) {
      loadCharacterHooks().catch((error) => {
        alert("Loading character hooks failed" + error);
      });
    }
    const playerId = auth.getPlayerId();
    setCharacter((prevChar) => ({
      ...prevChar,
      playerId: playerId,
    }));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setCharacter((prevChar) => ({
      ...prevChar,
      [name]: value,
    }));
  }

  function characterIsValid() {
    const { name, playerId } = character;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!playerId) errors.playerId = "Player is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    if (!characterIsValid()) return;
    setSaving(true);
    props
      .saveCharacter(character)
      .then(() => {
        //TODO Alert User Success
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

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
    <>
      <Typography variant="h2">Create a New Character</Typography>
      <Container className="jumbotron">
        <StepWizard
          onStepChange={onStepChange}
          isHashEnabled
          transitions={state.transitions}
          nav={<CharacterWizardProgress />}
          instance={setInstance}
        >
          <ManageCharacterNameForm
            hashKey={"CharacterName"}
            onChange={handleChange}
            character={character}
            stepNumber={1}
          />
          {/* <SelectCharacterBackgroundPage
            hashKey={"CharacterBackground"}
            backgrounds={backgrounds}
            errors={errors}
            saving={saving}
            stepNumber={2}
          /> */}
          {/* <SelectCharacterHookPage
            hashKey={"CharacterHooks"}
            hooks={hooks}
            errors={errors}
            saving={saving}
            stepNumber={3}
          /> */}
          <ReviewCharacterInformationPage
            hashKey={"ReviewInformation"}
            character={character}
            errors={errors}
            saving={saving}
            stepNumber={2}
            onSave={handleSave}
          />
        </StepWizard>
      </Container>
    </>
  );
};

CreateCharacterWizardPage.propTypes = {
  auth: PropTypes.object.isRequired,
  character: PropTypes.object.isRequired,
  backgrounds: PropTypes.array.isRequired,
  hooks: PropTypes.array.isRequired,
  loadCharacterBackgrounds: PropTypes.func.isRequired,
  loadCharacterHooks: PropTypes.func.isRequired,
  saveCharacter: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  const character = newCharacter;

  return {
    character,
    backgrounds: state.backgrounds,
    hooks: state.hooks,
  };
}

const mapDispatchToProps = {
  loadCharacterBackgrounds,
  loadCharacterHooks,
  saveCharacter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacterWizardPage);
