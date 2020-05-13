import characterReducer from "./characterReducer";
import * as actions from "../actions/characterActions";

it("should add character when passed CREATE_CHARACTER_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      name: "Han Solo",
    },
    {
      name: "Chewbacca",
    },
  ];

  const newCharacter = {
    name: "Boba Fett",
  };

  const action = actions.createCharacterSuccess(newCharacter);

  // act
  const newState = characterReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].name).toEqual("Han Solo");
  expect(newState[1].name).toEqual("Chewbacca");
  expect(newState[2].name).toEqual("Boba Fett");
});
