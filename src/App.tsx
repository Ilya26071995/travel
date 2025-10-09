import React from "react";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { Home } from "./pages/home/Index";
import { Login } from "./pages/login/Index";
import { Notes } from "./pages/notes/Index";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";

import { Trips } from "./pages/trips";
import { FormOk } from "./components/FormOk";
import Userfront from "@userfront/toolkit";

Userfront.init("demo1234");

function RequireAuth({ children }: any) {
  if (!Userfront.tokens.accessToken) {
    const history = useHistory();

    return history.push("/login");
  }

  return children;
}

function App() {
  return (
    <div>
      <Router>
        <Route path="/home">
          <RequireAuth>
            <Home />
          </RequireAuth>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/notes">
          <RequireAuth>
            <Notes />
          </RequireAuth>
        </Route>
        <Route path="/profile">
          <RequireAuth>
            <Profile />
          </RequireAuth>
        </Route>
        <Route path="/settings">
          <RequireAuth>
            <Settings />
          </RequireAuth>
        </Route>
        <Route path="/trips">
          <RequireAuth>
            <Trips />
          </RequireAuth>
        </Route>
        <Route path="/dashboard">
          <FormOk />
        </Route>
      </Router>
    </div>
  );
}

export default App;
