import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextHirdetesProvider } from "./contexts/AuthContextHirdetes";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProviderIngatlan } from "./contexts/AuthContextIngatlan";
import { ContextUserProvider } from "./contexts/AuthContextUserList";
import { ContextIngatlanProvider } from "./contexts/ContextIngatlan";
import { ContextIngatlanAdminProvider } from "./contexts/AuthContextIngatlanAdmin";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextHirdetesProvider>
      <ContextIngatlanProvider>
        <AuthProviderIngatlan>
          <AuthProvider>
            <ContextUserProvider>
              <ContextIngatlanAdminProvider>
                <App />
              </ContextIngatlanAdminProvider>
            </ContextUserProvider>
          </AuthProvider>
        </AuthProviderIngatlan>
      </ContextIngatlanProvider>
      </ContextHirdetesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
