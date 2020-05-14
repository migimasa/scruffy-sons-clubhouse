import * as types from "./actionTypes";
import { hooks } from "../../../tools/mockData";
import * as hookActions from "./hookActions";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Hooks Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_CHARACTER_HOOKS_SUCCESS when loading hooks", () => {
      fetchMock.mock("*", {
        body: hooks,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_CHARACTER_HOOKS_SUCCESS, hooks },
      ];

      const store = mockStore({ hooks: [] });
      return store.dispatch(hookActions.loadCharacterHooks()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
