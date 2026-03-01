import * as React from "react";
import { Outlet } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";

const LoginLayout = () => {

  return (
    <div className="h-screen">
      <div className="flex">
          <LoginHeader />
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-full">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;