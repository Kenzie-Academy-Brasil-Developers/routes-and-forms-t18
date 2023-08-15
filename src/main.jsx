import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";

// 1° passo - envolver o componente app, com o BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <App />
         </UserProvider>
      </BrowserRouter>
   </React.StrictMode>
);
