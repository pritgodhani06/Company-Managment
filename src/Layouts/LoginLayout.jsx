import * as React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {

  return (
    <div className="h-screen">
      <div className="flex">
        <p className="m-auto text-3xl font-bold">Login Layout</p>
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-full">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;