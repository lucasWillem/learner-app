import { ModalComponentActionTypes } from "./actionTypes";

const { TOGGLE_MODAL } = ModalComponentActionTypes;

const toggleModal = ({ visible, title = "", content = "" }) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      visible,
      title,
      content,
    },
  };
};

export { toggleModal };
