import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import VideoCard from '../components/VideoCard';

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div> Videos {keyword ? `🔎 ${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Something is wrong 😳</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
