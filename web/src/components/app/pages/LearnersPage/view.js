import React from "react";
import PropTypes from "prop-types";
import MuiBox from "@material-ui/core/Box";
import MuiContainer from "@material-ui/core/Container";

import LearnersTable from "../../learner/LearnersTable";

let LearnersPage = ({ toggleHeaderBar, getAndStoreLearners, learners }) => {
  React.useEffect(() => {
    toggleHeaderBar({ visible: true, title: "Learner Dashboard" });
    getAndStoreLearners();

    return () => {
      toggleHeaderBar({ visible: false });
    };
  }, [toggleHeaderBar, getAndStoreLearners]);

  return (
    <MuiContainer component="main" mt={4}>
      <MuiBox mt={4}>
        <LearnersTable learners={learners} />
      </MuiBox>
    </MuiContainer>
  );
};

LearnersPage = React.memo(LearnersPage);

LearnersPage.propTypes = {
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

export { LearnersPage };
