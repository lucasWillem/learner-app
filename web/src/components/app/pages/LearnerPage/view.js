import React from "react";
import PropTypes from "prop-types";

import LearnerDetails from "../../learner/LearnerDetails";
import LearnerProgress from "../../learner/LearnerProgress";
import MuiBox from "@material-ui/core/Box";
import MuiContainer from "@material-ui/core/Container";
import MuiDivider from "@material-ui/core/Divider";
import MuiPaper from "@material-ui/core/Paper";
import { useParams, withRouter } from "react-router-dom";
import _ from "lodash/core";

let LearnerPage = (props) => {
  const {
    learner,
    learners,
    getAndStoreLearners,
    deleteLearner,
    getAndStoreLearnerProgress,
    storeCurrentLearner,
    progress,
    history
  } = props;

  const { learnerId } = useParams();

  React.useEffect(() => {
    getAndStoreLearners();
    getAndStoreLearnerProgress({ learnerId });
  }, [getAndStoreLearners, getAndStoreLearnerProgress, learnerId]);

  React.useEffect(() => {
    const currentLearner = learners.find((learner) => learner.id === learnerId);
    storeCurrentLearner({ learner: currentLearner });
  }, [storeCurrentLearner, learnerId, learners]);

  const onDeletePressed = React.useCallback(() => {
    deleteLearner({ learnerId, push: history.push });
  }, [deleteLearner, learnerId, history.push]);

  return (
    _.size(learner) > 0 && (
      <MuiContainer component="main" mt={4}>
        <MuiPaper>
          <MuiBox mt={4}>
            <LearnerDetails
              learner={learner}
              onDeletePressed={onDeletePressed}
            />
            <MuiDivider light />
            <LearnerProgress progress={progress} />
          </MuiBox>
        </MuiPaper>
      </MuiContainer>
    )
  );
};

LearnerPage = React.memo(LearnerPage);

LearnerPage.propTypes = {
  deleteLearner: PropTypes.func.isRequired,
  getAndStoreLearners: PropTypes.func.isRequired,
  getAndStoreLearnerProgress: PropTypes.func.isRequired,
  learners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  ).isRequired,
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      learnerId: PropTypes.string.isRequired,
      moduleId: PropTypes.number.isRequired,
      lessonId: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      completionDate: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  storeCurrentLearner: PropTypes.func.isRequired,
  learner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    lastSync: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired
};

LearnerPage = withRouter(LearnerPage);

export { LearnerPage };
