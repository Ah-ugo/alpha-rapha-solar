import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Store from "./Pages/Store";
import ProductOverView from "./Pages/ProductOverView";

export default function AppMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/detail/:id" Component={ProductOverView} />
        <Route path="/store" Component={Store} />
      </Routes>
    </BrowserRouter>
  );
}
