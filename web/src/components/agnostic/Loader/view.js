import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import PropTypes from "prop-types";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

let Loader = (props) => {
  const { visible, color, toggleLoader } = props;

  const classes = useStyles();

  React.useEffect(() => {
    return () => {
      toggleLoader({ visible: false });
    };
  }, [toggleLoader]);

  return (
    visible && (
      <div className={classes.root}>
        <CircularProgress color={color} />
      </div>
    )
  );
};

Loader = React.memo(Loader);

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  toggleLoader: PropTypes.func.isRequired,
};

export { Loader };
