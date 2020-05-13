import backgroundReducer from "./backgroundReducer";
import * as actions from "../actions/backgroundActions";

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
  const newState = backgroundReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
});
