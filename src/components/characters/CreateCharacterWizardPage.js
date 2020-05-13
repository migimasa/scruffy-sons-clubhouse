import React, { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import CharacterWizardNav from "./CharacterWizardNav";
import PropTypes from "prop-types";
import { newCharacter } from "../../../tools/mockData";
import { loadCharacterBackgrounds } from "../../redux/actions/characterActions";
import { connect } from "react-redux";

import styles from "./CreateCharacterWizardPage.less";
import transitions from "./CharacterWizardTransitions.less";

const CreateCharacterWizardPage = ({
  backgrounds,
  loadCharacterBackgrounds,
  ...props
}) => {
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
    if (backgrounds.length === 0) {
      loadCharacterBackgrounds().catch((error) => {
        alert("Loading character backgrounds failed" + error);
      });
    }
  }, [character]);

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {
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
            ></StepWizard>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateCharacterWizardPage.propTypes = {
  character: PropTypes.object.isRequired,
  backgrounds: PropTypes.array.isRequired,
  hooks: PropTypes.array.isRequired,
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
