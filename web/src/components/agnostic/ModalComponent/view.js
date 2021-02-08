import React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  makeStyles,
} from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles({
  text: {
    textAlign: "center",
  },
});

let ModalComponent = (props) => {
  const { visible, title, content, toggleModal } = props;
  const classes = useStyles();

  React.useEffect(() => {
    return () => {
      toggleModal({ visible: false });
    };
  }, [toggleModal]);

  return (
    <Dialog aria-labelledby="text" open={visible}>
      <DialogTitle className={classes.text}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.text}>
          {content}
        </DialogContentText>
      </DialogContent>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => toggleModal({ visible: false })}
      >
        okay
      </Button>
    </Dialog>
  );
};

ModalComponent = React.memo(ModalComponent);

ModalComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export { ModalComponent };
