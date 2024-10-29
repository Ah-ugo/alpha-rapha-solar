import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Store from "./Pages/Store";
import ProductOverView from "./Pages/ProductOverView";
import ContextProvider from "./Context/mainContext";
import { Toaster } from "react-hot-toast";

export default function AppMain() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/detail/:id" Component={ProductOverView} />
          <Route path="/store" Component={Store} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ContextProvider>
  );
}
