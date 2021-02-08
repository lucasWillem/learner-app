import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//app-agnostic component reducers
import { HeaderBarReducer } from "../components/agnostic/HeaderBar";
import { ModalComponentReducer } from "../components/agnostic/ModalComponent";
import { LoaderReducer } from "../components/agnostic/Loader";

//app-specific component reducers
import { LearnersPageReducer } from "../components/app/pages/LearnersPage";
import { LearnerPageReducer } from "../components/app/pages/LearnerPage";

export const createMyStore = function (initialState = {}) {
  const middleware = [ReduxThunk];

  const rootReducer = combineReducers({
    //app-agnostic component reducers
    HeaderBarReducer,
    ModalComponentReducer,
    LoaderReducer,
    //app-specific component reducers
    LearnersPageReducer,
    LearnerPageReducer,
  });
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["learners", "progress", "learner"],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};
export const store = createMyStore();
export const persistor = persistStore(store);
