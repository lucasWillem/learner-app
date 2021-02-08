import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Loader } from "./view";
import { toggleLoader } from "./actions";

class LoaderRedux extends PureComponent {
  render() {
    return <Loader {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    visible: state.LoaderReducer.visible,
    color: state.LoaderReducer.color,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleLoader,
    },
    dispatch
  );
}

LoaderRedux.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  toggleLoader: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderRedux);
