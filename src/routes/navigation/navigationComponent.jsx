import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../../components/button/buttonComponent";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3 bg-white border border-black rounded-lg mx-auto sticky px-10  w-[1300px] top-6 z-10 ">
        <div to="/">
          <img src="" />
        </div>
        <div className="flex items-center space-x-2">
          <Button to="/">Contact us</Button>
          <Button to="/">Signup</Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
