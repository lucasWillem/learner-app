import produce from "immer";
import { LearnerPageDefaultState } from "./state";
import { LearnerPageActionTypes } from "./actionTypes";

const { STORE_PROGRESS, STORE_CURRENT_LEARNER } = LearnerPageActionTypes;

export const LearnerPageReducer = function (
  state = LearnerPageDefaultState,
  action
) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case STORE_PROGRESS:
        draftState.progress = payload.progress;
        break;
      case STORE_CURRENT_LEARNER:
        draftState.learner = payload.learner;
        break;
      default:
        break;
    }
  });
};
