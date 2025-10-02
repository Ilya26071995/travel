import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/home/Index";
import { Login } from "./pages/login/Index";
import { Notes } from "./pages/notes/Index";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";

import { Trips } from "./pages/trips";
import { Reservations } from "./pages/reservations";

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
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/trips">
          <Trips />
        </Route>
      </Router>
    </div>
  );
}

export default App;
