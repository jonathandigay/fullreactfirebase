import React, { useState } from "react";
import Gallery from "./Gallery";

import Todolist from "./Todolist";
const Dashboard = () => {
  return (
    <div>
      <Todolist />
      <Gallery />
    </div>
  );
};

export default Dashboard;
