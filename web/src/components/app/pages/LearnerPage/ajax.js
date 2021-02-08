import { Ajax } from "../../../../ajax";

const deleteLearner = ({ learnerId }) => {
  return Ajax.getInstance().delete(`/learners/${learnerId}`);
};

const getLearnerProgress = ({ learnerId }) => {
  return Ajax.getInstance().get(`/learners/${learnerId}/progress`);
};

export { deleteLearner, getLearnerProgress };
