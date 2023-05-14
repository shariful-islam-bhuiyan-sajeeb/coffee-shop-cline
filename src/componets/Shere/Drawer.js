import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { RxCross2 } from "react-icons/rx";

const Drawer = () => {
  const [remove, setRemove] = useState(true);
  const leftMenuItems = (
    <>
      <div className="flex items-start justify-start hover:bg-white hover:text-[#ffd000]  w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">HOME</button>
      </div>
      <div className="flex items-start justify-start hover:bg-white hover:text-[#ffd000]  w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">Menu</button>
      </div>
      <div className="flex items-start justify-start hover:bg-white hover:text-[#ffd000]  w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">Feature</button>
      </div>
      <div className="flex items-start justify-start hover:bg-white hover:text-[#ffd000]  w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">About</button>
      </div>
      <div className="flex items-start justify-start hover:bg-white hover:text-[#ffd000]  w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">Contact</button>
      </div>
    </>
  );

  const handleRemove = () => {
    setRemove(false);
  };
  return (
    <div>
      <div className="drawer relative ">
        <input
          id="coffeeShopDrawer "
          type="checkbox"
          className="drawer-toggle "
        />
        <div className="drawer-content h-full ">
          {/* <!-- Page content here --> */}
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
        <div className="drawer-side   ">
          <label
            htmlFor="coffeeShopDrawer "
            className="drawer-overlay "
          ></label>

          <ul className=" menu flex flex-col  items-center  sm:w-80 w-64 h-full  ">
            <li className=" flex flex-col  w-full bg-slate-800 font-serif py-20 ">
              <button
                className="absolute right-2 top-4 "
                onClick={handleRemove}
              >
                <RxCross2 className="text-3xl  " />
              </button>
              {leftMenuItems}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
