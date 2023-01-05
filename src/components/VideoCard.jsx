import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, type }) => {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === 'list';

  const moveVideoDetail = (video) => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => moveVideoDetail(video)}
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
