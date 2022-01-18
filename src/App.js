import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import PropertyDetails from "./components/PropertyDetails";

const App = () => {
 
  return (
    <Routes>
      <Route
        path="/"
        element={<Main />}
      ></Route>
      <Route
        path="/:id"
        element={<PropertyDetails />}
      ></Route>
    </Routes>
  );
};

export default App;
