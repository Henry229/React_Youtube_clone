import React from 'react';
import VideoDetail from '../pages/VideoDetail';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const moveVideoDetail = (video) => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li onClick={() => moveVideoDetail(video)}>
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
