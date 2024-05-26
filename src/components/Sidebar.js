import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-56 bg-white">
      <Link to="/">
        <h1 className="mb-4 font-bold">Home</h1>
      </Link>
      <div className="border-t border-b py-4">
        <h1 className="font-bold mb-2">Subscriptions</h1>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-200 py-1">Music</li>
          <li className="border-b border-gray-200 py-1">Gaming</li>
          <li className="border-b border-gray-200 py-1">Sports</li>
          <li className="py-1">Movies</li>
        </ul>
      </div>
      <div className="border-t border-b py-4">
        <h1 className="font-bold mb-2">Explore</h1>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-200 py-1">Trending</li>
          <li className="border-b border-gray-200 py-1">Shopping</li>
          <li className="border-b border-gray-200 py-1">Music</li>
          <li className="py-1">Live</li>
        </ul>
      </div>
      <div className="border-t border-b py-4">
        <h1 className="font-bold mb-2">More from YouTube</h1>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-200 py-1">YouTube Premium</li>
          <li className="border-b border-gray-200 py-1">YouTube Studio</li>
          <li className="border-b border-gray-200 py-1">YouTube Music</li>
          <li className="py-1">YouTube Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
