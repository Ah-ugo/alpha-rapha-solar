import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Store from "./Pages/Store";

export default function AppMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/store" Component={Store} />
      </Routes>
    </BrowserRouter>
  );
}
