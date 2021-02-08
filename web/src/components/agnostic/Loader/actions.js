import { LoaderActionTypes } from "./actionTypes";

const { TOGGLE_LOADER } = LoaderActionTypes;

const toggleLoader = ({ visible, color = "primary" }) => {
  return {
    type: TOGGLE_LOADER,
    payload: {
      visible,
      color,
    },
  };
};

export { toggleLoader };
