import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Store from "./Pages/Store";
import ProductOverView from "./Pages/ProductOverView";
import ContextProvider from "./Context/mainContext";
import { Toaster } from "react-hot-toast";
import QuickViewPage from "./Pages/QuickView";
import NewProductList from "./components/NewProductList";
import NotFound from "./components/NotFound";

export default function AppMain() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/detail/:id" Component={ProductOverView} />
          <Route path="/store" Component={NewProductList} />
          <Route path="/detail2" Component={QuickViewPage} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ContextProvider>
  );
}
