import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiBox from "@material-ui/core/Box";
import MuiButton from "@material-ui/core/Button";

import Heading from "../../../agnostic/Heading";

function LearnerDetails({ learner, onDeletePressed }) {
  return (
    <MuiBox
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <MuiBox p={2}>
        <Heading data-test="learner-name">{learner.name}</Heading>
        <div data-test='learner-username'>{learner.username}</div>
      </MuiBox>
      <MuiBox p={2}>
        <LearnerActions data-test='comp-learner-actions' onDeletePressed={onDeletePressed} />
      </MuiBox>
    </MuiBox>
  );
}

function LearnerActions({ onDeletePressed }) {
  return (
    <MuiBox display="flex" flexDirection="column">
      <MuiButton
        data-test="btn-delete-learner"
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => onDeletePressed()}
      >
        Delete
      </MuiButton>
    </MuiBox>
  );
}

LearnerDetails.propTypes = {
  learner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    lastSync: PropTypes.string.isRequired,
  }).isRequired,
  onDeletePressed: PropTypes.func.isRequired,
};

LearnerActions.propTypes = {
  onDeletePressed: PropTypes.func.isRequired,
};

const PureLearnerDetails = React.memo(LearnerDetails);

export {
  LearnerActions,
  LearnerDetails,
  PureLearnerDetails as default
}
