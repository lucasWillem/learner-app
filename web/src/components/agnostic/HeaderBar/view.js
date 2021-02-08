import React from "react";
import PropTypes from "prop-types";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MuiBox from "@material-ui/core/Box";

import "./styles.css";

const useHeaderBarStyles = makeStyles({
  heading: {
    fontFamily: "'Caveat Brush', cursive;",
  },
});

let HeaderBarComponent = ({ visible, title }) => {
  const classes = useHeaderBarStyles();

  return (
    <div className={`header-bar-container ${visible ? "visible" : "hidden"}`}>
      {typeof title === "string" && (
        <MuiBox display="flex" justifyContent="center" mt={4}>
          <MuiTypography
            variant="h4"
            component="h1"
            className={classes.heading}
          >
            {title}
          </MuiTypography>
        </MuiBox>
      )}
    </div>
  );
};

HeaderBarComponent = React.memo(HeaderBarComponent);

HeaderBarComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export { HeaderBarComponent };
