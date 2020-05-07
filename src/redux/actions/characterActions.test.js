import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { characters } from "../../../tools/mockData";
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
        status: 200,
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_CHARACTERS_SUCCESS, characters },
      ];

      const store = mockStore({ characters: [] });
      return store.dispatch(characterActions.loadCharacters(1)).then(() => {
        expectedActions(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
