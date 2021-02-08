import { HeaderBarActionTypes } from "./actionTypes";

const { TOGGLE_HEADER_BAR } = HeaderBarActionTypes;

const toggleHeaderBar = ({ visible, title = null }) => {
  return {
    type: TOGGLE_HEADER_BAR,
    payload: {
      visible,
      title,
    },
  };
};

export { toggleHeaderBar };
