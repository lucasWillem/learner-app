import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HeaderBarComponent } from "./view";

class HeaderBarComponentRedux extends PureComponent {
  render() {
    return <HeaderBarComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    visible: state.HeaderBarReducer.visible,
    title: state.HeaderBarReducer.title,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

HeaderBarComponentRedux.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBarComponentRedux);
