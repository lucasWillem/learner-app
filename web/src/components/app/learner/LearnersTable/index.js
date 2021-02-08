import React from "react";
import PropTypes from "prop-types";

import MuiButton from "@material-ui/core/Button";
import MuiPaper from "@material-ui/core/Paper";
import MuiTable from "@material-ui/core/Table";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableContainer from "@material-ui/core/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

function LearnersTable({ learners }) {
  return (
    <MuiTableContainer component={MuiPaper}>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>Name</MuiTableCell>
            <MuiTableCell>Username</MuiTableCell>
            <MuiTableCell>Last Sync</MuiTableCell>
            <MuiTableCell>Progress</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {learners.map((learner) => (
            <MuiTableRow key={learner.id}>
              <MuiTableCell>{learner.name}</MuiTableCell>
              <MuiTableCell>{learner.username}</MuiTableCell>
              <MuiTableCell>{learner.lastSync}</MuiTableCell>
              <MuiTableCell>
                <MuiButton
                  component={Link}
                  to={`/learners/${learner.id}`}
                  color="primary"
                >
                  View
                </MuiButton>
              </MuiTableCell>
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
}

LearnersTable.propTypes = {
  learners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string,
      lastSync: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LearnersTable;
