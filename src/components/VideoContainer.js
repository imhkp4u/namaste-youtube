import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  const videoItems = useSelector(
    (store) => store.search.videoItemsFromSuggestion
  );
  useEffect(() => {
    if (videoItems?.length === 0) {
      getVideos();
    } else {
      setVideos(videoItems);
    }
  }, [videoItems]);

  return (
    <div className="flex flex-wrap  justify-center">
      {videos.map((video, index) => (
        <Link
          key={index}
          to={`/watch?v=${
            video.id["videoId"] ? video.id["videoId"] : video.id
          }`}
        >
          <VideoCard
            key={video.id ? video.id : video.id.videoId}
            info={video}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
