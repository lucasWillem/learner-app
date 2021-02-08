import moxios from "moxios";
import { store } from "../../../../../redux/store";
import { getAndStoreLearners, storeLearners } from "../actions";

const mockLearners = [
  {
    id: "2ab1fa1b-048a-4b50-8a25-2ff947bd612d",
    name: "Olivia Moore",
    username: "livvy18",
    lastSync: "2020-04-22T07:17:23.000Z",
  },
  {
    id: "e2ef8a4e-836e-4c3c-b0e4-67eee4b284e7",
    name: "Alice Moore",
    username: "RainbowPony3",
    lastSync: "2020-04-20T12:34:59.000Z",
  },
  {
    id: "164ac478-8c14-4e2f-a86f-a7f5ec49916b",
    name: "Oliver Watts",
    username: "dinosaurs_are_cool",
    lastSync: "2020-03-22T07:12:40.000Z",
  },
];

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe("retrieving learners", () => {
  beforeEach(() => {
    store.dispatch(storeLearners({ learners: [] }));
  });

  test("learners successfully retrieved and stored", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockLearners,
      });
    });

    await store.dispatch(getAndStoreLearners());
    const {
      LearnersPageReducer: { learners: learnersInStore },
    } = store.getState();
    expect(learnersInStore).toEqual(mockLearners);
  });
});
