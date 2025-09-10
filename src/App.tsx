import React from "react";
import s from "./App.module.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/home/Index";
import { Login } from "./pages/login/Index";
import { Notes } from "./pages/notes/Index";
import { Profile } from "./pages/profile";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
