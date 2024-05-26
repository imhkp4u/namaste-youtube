import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  getYouTubeSearchQueryApi,
} from "../utils/constants";
import {
  cacheResults,
  setVideoResultFromSuggestion,
} from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleClickSuggestion = async (searchQuery) => {
    setSearchQuery(searchQuery);
    const apiUrl = getYouTubeSearchQueryApi(searchQuery);
    const data = await fetch(apiUrl);
    const json = await data.json();
    dispatch(setVideoResultFromSuggestion(json.items));
    setShowSuggestions(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100); // Delay to allow suggestion click to be registered
  };

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
      <div className="col-span-10 py-2">
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={handleInputBlur}
          />
          {searchQuery && (
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
              alt="Clear"
              className="absolute inset-y-0 right-[697px] top-[28px] m-2 h-6 w-6 cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
          <button className="bg-gray-200 border border-gray-400 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-2 w-[34.5rem] shadow-lg rounded-lg border border-x-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  onMouseDown={() => handleClickSuggestion(suggestion)}
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
