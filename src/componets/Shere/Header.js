import React, { useEffect, useState } from "react";
import { HiDevicePhoneMobile, IconName } from "react-icons/hi2";

const Header = () => {
  const menuItem = (
    <>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#banner"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Home
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#projects"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Menu
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#skill"
          className="flex items-center px-4 -mb-1 border-b-2 md:text-inline "
        >
          Features
        </a>
      </li>
      <li className="flex">
        <a
          href="#aboutMe"
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          About
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div>
      <header className="  text-white">
        <div>
          {/* ================= md hidden  middle image  */}
          {/* <div className="md:hidden ">
            <div className=" flex flex-col items-center hover:text-yellow-600 transform-all">
              <img
                className="md:w-32 w-20   hover:text-red-700 "
                src="https://i.ibb.co/yg6qG5f/resturent-removebg-preview.png"
                alt=""
              />
              <h2 className="uppercase sm:text-2xl text-xl font-serif">
                Family Pizzeria
              </h2>
            </div>
          </div> */}
          {/* ======================= pizza image  section */}
          <div className=" flex items-center justify-around md:mt-0 mt-8 sm:px-0 px-2">
            <div className="hidden md:flex">
              <div className="flex md:flex-row flex-col  items-center hover:text-yellow-600 ">
                <HiDevicePhoneMobile className=" sm:text-6xl text-4xl "></HiDevicePhoneMobile>
                <ul className="sm:text-sm text-xs text-center ">
                  <li className="sm:font-semibold font-normal py-1">
                    01791514345
                  </li>
                  <li className="text-sm text-gray-400 hover:text-yellow-600 ">
                    08:00- 09:00 pm
                  </li>
                </ul>
              </div>
            </div>
            {/*============= pizza  image is here  */}
            <div className="">
              <div className=" flex flex-col items-center md: hover:text-yellow-600 transform-all">
                <img
                  className="md:w-32 sm:w-28 w-20  hover:text-red-700 "
                  src="https://i.ibb.co/yg6qG5f/resturent-removebg-preview.png"
                  alt=""
                />
                <h2 className="uppercase sm:text-2xl text-md font-serif">
                  Family Pizzeria
                </h2>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className=" flex md:flex-row flex-col items-center justify-center hover:text-yellow-600">
                <img
                  className="sm:w-20 w-12 text-white mx-auto"
                  src="https://i.ibb.co/61P1FsZ/fast-logo-removebg-preview.png"
                  alt=""
                />
                <ul className="text-center sm:text-sm text-xs">
                  <li className="md:font-semibold font-normal">$34.00</li>
                  <li className="text-sm text-gray-400 hover:text-yellow-600 transform-all">
                    3 items- view cart
                  </li>
                </ul>
              </div>
            </div>
            {/* =========================== svg botton (drawer side button) is here */}
            <label
              htmlFor="coffeeShopDrawer "
              title="Button"
              type="button"
              className="p-4 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="sm:w-10 w-6 sm:h-10 h-6 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/*========================= menu site */}
        <div className="container flex justify-center md:mt-4 mt-0 py-2 mx-auto">
          <ul className="items-stretch hidden space-x-3 md:flex">{menuItem}</ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
