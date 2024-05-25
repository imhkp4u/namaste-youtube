import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const formatViews = (viewCount) => {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M views`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}K views`;
    } else {
      return `${viewCount} views`;
    }
  };

  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffInMs = now - past;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const formattedViews = formatViews(statistics.viewCount);
  const timeAgoFormatted = timeAgo(snippet.publishedAt);

  return (
    <div className={`p-2 m-2 ${isMenuOpen ? "w-96" : "w-80"}`}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {formattedViews} • {timeAgoFormatted}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
