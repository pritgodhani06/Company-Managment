import * as React from "react"; 
import { Routes, Route } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import { HomeScreen } from "../pages/home-screen";

const RootRouters = () => {
  return (  
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<HomeScreen />} />
        </Route>
      </Routes>
  );
};

export default RootRouters;