import React from "react";
import { UseAuthContext } from "./context/AuthContext";

const Home = () => {
  const context = UseAuthContext();
  const { GoogleLogin, FacebookLogin } = context;

  const Google = () => {
    GoogleLogin();
  };
  const Facebook = () => {
    FacebookLogin();
  };

  return (
    <div className="home">
      <div className="authentication">
        <div className="title">
          <h1>Social Login</h1>
        </div>
        <div className="socials">
          <div className="social">
            <div className="social">
              <button onClick={Google}>Google</button>
            </div>

            <div className="social">
              <button onClick={Facebook}>Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
