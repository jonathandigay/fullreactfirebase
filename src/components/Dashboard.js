import React from "react";
import { UseAuthContext } from "../context/AuthContext";
const Dashboard = () => {
  const { SignoutUser } = UseAuthContext();
  return (
    <div>
      <div className="logout">
        <button onClick={() => SignoutUser()}>Signout</button>
      </div>
    </div>
  );
};

export default Dashboard;
