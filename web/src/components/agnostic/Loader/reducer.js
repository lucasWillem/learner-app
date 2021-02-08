import produce from "immer";
import { LoaderDefaultState } from "./state";
import { LoaderActionTypes } from "./actionTypes";

const { TOGGLE_LOADER } = LoaderActionTypes;

export const LoaderReducer = function (state = LoaderDefaultState, action) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case TOGGLE_LOADER:
        draftState.visible = payload.visible;
        draftState.color = payload.color;
        break;
      default:
        break;
    }
  });
};
