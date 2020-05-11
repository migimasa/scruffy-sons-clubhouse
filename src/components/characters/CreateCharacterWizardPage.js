import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import CharacterWizardNav from "./CharacterWizardNav";
import PropTypes from "prop-types";

import styles from "./CreateCharacterWizardPage.less";
import transitions from "./CharacterWizardTransitions.less";

const CreateCharacterWizardPage = ({
  character,
  backgrounds,
  hooks,
  errors = {},
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
  errors: PropTypes.object,
};

export default CreateCharacterWizardPage;
