import LoginLayout from "@/Layouts/LoginLauout/LoginLayout";
import Login from "@/pages/Auth/Login";
import * as React from "react"; 
import { Routes, Route } from "react-router-dom";

const RootRouters = () => {
  return (  
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
  );
};

export default RootRouters;