import characterReducer from "./characterReducer";
import * as actions from "../actions/characterActions";

it("should load character backgrounds when passed LOAD_CHARACTER_BACKGROUNDS_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      id: 1,
      description: "Background One",
      descriptionDetail: "Detail",
    },
    {
      id: 2,
      description: "Background Two",
      descriptionDetail: "Detail",
    },
    {
      id: 3,
      description: "Background Three",
      descriptionDetail: "Detail",
    },
  ];

  const action = actions.loadCharacterBackgroundsSuccess(initialState);

  // act
  const newState = characterReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
});
