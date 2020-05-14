import hookReducer from "./hookReducer";
import * as actions from "../actions/hookActions";

it("should load character hooks when passed LOAD_CHARACTER_HOOKS_SUCCESS", () => {
  //arrange
  const initialState = [
    {
      id: 1,
      description: "Hook One",
      descriptionDetail: "Detail",
    },
    {
      id: 2,
      description: "Hook Two",
      descriptionDetail: "Detail",
    },
    {
      id: 3,
      description: "Hook Three",
      descriptionDetail: "Detail",
    },
  ];

  const action = actions.loadCharacterHooksSuccess(initialState);

  // act
  const newState = hookReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
});
