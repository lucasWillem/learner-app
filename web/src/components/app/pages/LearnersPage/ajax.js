import { Ajax } from "../../../../ajax";

const getLearners = () => {
  return Ajax.getInstance().get("/learners");
};

export { getLearners };
