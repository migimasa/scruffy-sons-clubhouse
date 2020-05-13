import * as types from "./actionTypes";
import { backgrounds } from "../../../tools/mockData";
import * as backgroundActions from "./backgroundActions";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Backgrounds Thunk", () => {
    it("should create BEGIN_API_CALL and LOAC_CHARACTER_BACKGROUNDS_SUCCESS when loading backgrounds", () => {
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
        .dispatch(backgroundActions.loadCharacterBackgrounds())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
