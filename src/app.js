import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./Home";

import { Private } from "./middleware/private";
import { Public } from "./middleware/public";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        />
      </Routes>
    </>
  );
};
export default App;
