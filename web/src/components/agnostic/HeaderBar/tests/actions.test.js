import { store } from "../../../../redux/store";
import { toggleHeaderBar } from "../index";

describe("header bar component actions", () => {
  beforeEach(() => {
    store.dispatch(toggleHeaderBar({ visible: null, title: null }));
  });

  test("should show header", () => {
    const visible = true;
    const title = "example-child";
    store.dispatch(toggleHeaderBar({ visible, title }));
    const { HeaderBarReducer } = store.getState();

    expect(HeaderBarReducer).toEqual(
      expect.objectContaining({
        visible,
        title,
      })
    );
  });
});
