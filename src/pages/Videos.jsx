import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));
  // const youtube = new FakeYoutube();
  // return youtube.search(keyword);
  // });

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
