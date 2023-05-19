import React from "react";
import { Outlet } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/core/button/buttonComponent";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3 bg-white border border-black rounded-lg mx-auto sticky px-4  w-[1300px] top-6 z-10 ">
        <div to="/">
          <img src="" alt="" />
        </div>
        <div className="flex items-center space-x-3">
          <Button to="/">Contact us</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} to="/">
            Signup
          </Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
