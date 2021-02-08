import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import LearnersPage from "./components/app/pages/LearnersPage";
import LearnerPage from "./components/app/pages/LearnerPage";
import NotFoundPage from "./components/app/pages/NotFoundPage";
import { store, persistor } from "./redux/store";
import Header from "./components/agnostic/HeaderBar";
import ModalComponent from "./components/agnostic/ModalComponent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loader from "./components/agnostic/Loader";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <Header />
        <ModalComponent />
        <Loader />
        <Router>
          <Switch>
            <Route exact path="/">
              <LearnersPage />
            </Route>
            <Route path="/learners/:learnerId">
              <LearnerPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
