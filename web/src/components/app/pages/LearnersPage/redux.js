import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LearnersPage } from "./view";
import { toggleHeaderBar } from "../../../agnostic/HeaderBar";
import { getAndStoreLearners } from "./actions";

class LearnersPageRedux extends PureComponent {
  render() {
    return <LearnersPage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    learners: state.LearnersPageReducer.learners,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleHeaderBar,
      getAndStoreLearners,
    },
    dispatch
  );
}

LearnersPageRedux.propTypes = {
  toggleHeaderBar: PropTypes.func.isRequired,
  getAndStoreLearners: PropTypes.func.isRequired,
  learners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnersPageRedux);
