import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { characters, backgrounds } from "../../../tools/mockData";
import * as types from "./actionTypes";
import * as characterActions from "./characterActions";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Characters Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_CHARACTERS_SUCCESS when loading characters", () => {
      fetchMock.mock("*", {
        body: characters,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_CHARACTERS_SUCCESS, characters },
      ];

      const store = mockStore({ characters: [] });
      return store.dispatch(characterActions.loadCharacters()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe("Load Backgrounds Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_CHARACTER_BACKGROUNDS_SUCCESS when loading character backgrounds", () => {
      fetchMock.mock("*", {
        body: backgrounds,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_CHARACTER_BACKGROUNDS_SUCCESS, backgrounds },
      ];

      const store = mockStore({ backgrounds: [] });
      return store
        .dispatch(characterActions.loadCharacterBackgrounds())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});

describe("createCharacterSuccess", () => {
  it("should create a CREATE_CHARACTER_SUCCESS action", () => {
    // arrange
    const character = characters[0];
    const expectedAction = {
      type: types.CREATE_CHARACTER_SUCCESS,
      character,
    };

    // act
    const action = characterActions.createCharacterSuccess(character);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
