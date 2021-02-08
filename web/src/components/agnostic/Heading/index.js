import React from "react";
import PropTypes from "prop-types";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useHeaderBarStyles = makeStyles({
  heading: {
    fontFamily: "'Caveat Brush', cursive;",
  },
});

function Heading({ children }) {
  const classes = useHeaderBarStyles();
  return (
    <MuiTypography variant="h4" component="h1" className={classes.heading}>
      {children}
    </MuiTypography>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
