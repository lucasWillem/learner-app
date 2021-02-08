import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ModalComponent } from "./view";
import { toggleModal } from "./actions";

class ModalComponentRedux extends PureComponent {
  render() {
    return <ModalComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    visible: state.ModalComponentReducer.visible,
    title: state.ModalComponentReducer.title,
    content: state.ModalComponentReducer.content,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleModal,
    },
    dispatch
  );
}

ModalComponentRedux.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponentRedux);
