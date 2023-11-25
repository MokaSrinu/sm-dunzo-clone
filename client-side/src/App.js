import React from "react";
import classes from "./App.module.scss";
import "./styles/scss/global.scss";
import { LandingPage, ShopByCategory } from "./pages";
import { Layout } from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Navigate to="/mumbai" replace={true} />}/>
          <Route path="/:city" element={<LandingPage />} />
          <Route path='/:city/:shopCategory' element={<ShopByCategory />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
