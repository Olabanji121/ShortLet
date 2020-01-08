import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

ReactDOM.render(
  <AuthState>
    <RoomProvider>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </RoomProvider>
  </AuthState>,
  document.getElementById("root")
);
