import produce from "immer";

import { HeaderBarDefaultState } from "./state";
import { HeaderBarActionTypes } from "./actionTypes";
const { TOGGLE_HEADER_BAR } = HeaderBarActionTypes;

export const HeaderBarReducer = function (
  state = HeaderBarDefaultState,
  action
) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case TOGGLE_HEADER_BAR:
        draftState.visible = payload.visible;
        draftState.title = payload.title;
        break;
      default:
        break;
    }
  });
};
