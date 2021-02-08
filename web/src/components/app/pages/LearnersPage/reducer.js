import produce from "immer";
import { LearnersPageDefaultState } from "./state";
import { LearnersPageActionTypes } from "./actionTypes";

const { STORE_LEARNERS } = LearnersPageActionTypes;

export const LearnersPageReducer = function (
  state = LearnersPageDefaultState,
  action
) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case STORE_LEARNERS:
        draftState.learners = payload.learners;
        break;

      default:
        break;
    }
  });
};
