import { LearnersPageActionTypes } from "./actionTypes";
import { getLearners as getLearnersPromise } from "./ajax";
import { toggleModal } from "../../../agnostic/ModalComponent";
import { toggleLoader } from "../../../agnostic/Loader";
import { getErrorMessage } from "../../../../helpers";

const { STORE_LEARNERS } = LearnersPageActionTypes;

const getAndStoreLearners = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader({ visible: true }));

      const serverResponse = await getLearnersPromise();

      dispatch(toggleLoader({ visible: false }));
      dispatch(storeLearners({ learners: serverResponse.data }));
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

const storeLearners = ({ learners }) => {
  return {
    type: STORE_LEARNERS,
    payload: { learners },
  };
};

export { getAndStoreLearners, storeLearners };
