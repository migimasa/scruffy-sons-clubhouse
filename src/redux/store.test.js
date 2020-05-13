import { createStore } from "redux";
import initialState from "./reducers/initialState";
import * as characterActions from "./actions/characterActions";
import rootReducer from "./reducers";

it("Should handle creating characters", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const character = {
    name: "Boba Fett",
  };

  // act
  const action = characterActions.createCharacterSuccess(character);
  store.dispatch(action);

  // assert
  const createdCharacter = store.getState().characters[0];
  expect(createdCharacter).toEqual(character);
});
