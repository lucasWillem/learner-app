import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LearnerPage } from "./view";
import { deleteLearner, getAndStoreLearnerProgress } from "./actions";
import { getAndStoreLearners } from "../LearnersPage";
import { storeCurrentLearner } from "../LearnerPage";

class LearnerPageRedux extends PureComponent {
  render() {
    return <LearnerPage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    learners: state.LearnersPageReducer.learners,
    progress: state.LearnerPageReducer.progress,
    learner: state.LearnerPageReducer.learner,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteLearner,
      getAndStoreLearners,
      getAndStoreLearnerProgress,
      storeCurrentLearner,
    },
    dispatch
  );
}

LearnerPageRedux.propTypes = {
  deleteLearner: PropTypes.func.isRequired,
  getAndStoreLearners: PropTypes.func.isRequired,
  getAndStoreLearnerProgress: PropTypes.func.isRequired,
  storeCurrentLearner: PropTypes.func.isRequired,
  learners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  learner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    lastSync: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnerPageRedux);
