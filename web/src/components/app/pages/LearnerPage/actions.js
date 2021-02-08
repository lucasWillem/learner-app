import { LearnerPageActionTypes } from "./actionTypes";
import {
  deleteLearner as deleteLearnerPromise,
  getLearnerProgress as getAndStoreLearnerProgressPromise
} from "./ajax";
import { toggleModal } from "../../../agnostic/ModalComponent";
import { toggleLoader } from "../../../agnostic/Loader";
import { storeLearners } from "../LearnersPage";
import { getErrorMessage} from "../../../../helpers";

const { STORE_PROGRESS, STORE_CURRENT_LEARNER } = LearnerPageActionTypes;

const deleteLearner = ({ learnerId, push }) => {
  return async (dispatch, getState) => {
    try {
      const {
        LearnersPageReducer: { learners: learnersInStore }
      } = getState();
      dispatch(toggleLoader({ visible: true }));
      await deleteLearnerPromise({ learnerId });
      dispatch(
        storeLearners({
          learners: learnersInStore.filter(({ id }) => learnerId !== id)
        })
      );
      dispatch(toggleLoader({ visible: false }));
      push("/");
    } catch (error) {
      
      dispatch(
        toggleModal({
          visible: true,
          title: "Oops, something went wrong",
          content: getErrorMessage({error}) 
        })
      );
      dispatch(toggleLoader({ visible: false }));
    }
  };
};

const getAndStoreLearnerProgress = ({ learnerId }) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader({ visible: true }));

      const serverResponse = await getAndStoreLearnerProgressPromise({
        learnerId
      });


      dispatch(storeLearnerProgress({ progress: serverResponse.data }));

      dispatch(toggleLoader({ visible: false }));
    } catch (error) {
      dispatch(
        toggleModal({
          visible: true,
          title: "Oops, something went wrong",
          content:  getErrorMessage({error}) 
        })
      );
      dispatch(toggleLoader({ visible: false }));
    }
  };
};

const storeLearnerProgress = ({ progress }) => {
  return {
    type: STORE_PROGRESS,
    payload: { progress }
  };
};

const storeCurrentLearner = ({ learner }) => {
  return {
    type: STORE_CURRENT_LEARNER,
    payload: { learner }
  };
};

export {
  deleteLearner,
  getAndStoreLearnerProgress,
  storeLearnerProgress,
  storeCurrentLearner
};
