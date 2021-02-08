import moxios from "moxios";
import { store } from "../../../../../redux/store";
import { storeLearners } from "../../LearnersPage";
import { deleteLearner, getAndStoreLearnerProgress } from "..";

const mockLearners = [
  {
    id: "2ab1fa1b-048a-4b50-8a25-2ff947bd612d",
    name: "Olivia Moore",
    username: "livvy18",
    lastSync: "2020-04-22T07:17:23.000Z"
  },
  {
    id: "e2ef8a4e-836e-4c3c-b0e4-67eee4b284e7",
    name: "Alice Moore",
    username: "RainbowPony3",
    lastSync: "2020-04-20T12:34:59.000Z"
  },
  {
    id: "164ac478-8c14-4e2f-a86f-a7f5ec49916b",
    name: "Oliver Watts",
    username: "dinosaurs_are_cool",
    lastSync: "2020-03-22T07:12:40.000Z"
  }
];

const mockProgress = [
  {
    learnerId: "2ab1fa1b-048a-4b50-8a25-2ff947bd612d",
    moduleId: 1,
    lessonId: 3,
    progress: 1,
    startDate: "2020-03-22T07:12:40.000Z",
    completionDate: "2020-03-22T07:12:40.000Z"
  }
];

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe("delete learner", () => {
  beforeEach(() => {
    store.dispatch(storeLearners({ learners: mockLearners }));
  });

  test("learner should be removed from store", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204
      });
    });

    await store.dispatch(deleteLearner({ learnerId: mockLearners[0].id,push:jest.fn()}));

    const {
      LearnersPageReducer: { learners: learnersInStore }
    } = store.getState();
    
    expect(learnersInStore).toEqual([mockLearners[1], mockLearners[2]]);
  });
});

describe("retrieve and store learner progress", () => {
  test("learner progress successfully retrieved and stored", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockProgress
      });
    });

    await store.dispatch(
      getAndStoreLearnerProgress({ learnerId: mockLearners[0].id })
    );

    const {
      LearnerPageReducer: { progress }
    } = store.getState();
    expect(progress).toEqual(mockProgress);
  });
});
