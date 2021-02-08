import produce from "immer";
import { ModalComponentDefaultState } from "./state";
import { ModalComponentActionTypes } from "./actionTypes";

const { TOGGLE_MODAL } = ModalComponentActionTypes;

export const ModalComponentReducer = function (
  state = ModalComponentDefaultState,
  action
) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case TOGGLE_MODAL:
        draftState.visible = payload.visible;
        draftState.title = payload.title;
        draftState.content = payload.content;
        break;
      default:
        break;
    }
  });
};
