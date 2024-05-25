import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className={`${isMenuOpen ? "h-8" : "h-10"} cursor-pointer`}
          alt="menuIcon"
          src={
            isMenuOpen
              ? "https://t3.ftcdn.net/jpg/01/09/45/80/360_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
              : "https://w7.pngwing.com/pngs/4/1018/png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol-thumbnail.png"
          }
        />
        <a href="">
          <img
            className="h-12 mx-2"
            alt="youtubeIcon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 text-center py-2">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="bg-gray-200 border border-gray-400 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-12"
          alt="userIcon"
          src="https://cdn-icons-png.flaticon.com/512/3893/3893176.png"
        />
      </div>
    </div>
  );
};

export default Head;
