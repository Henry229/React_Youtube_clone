import React from 'react';
import { useParams } from 'react-router-dom';

const Videos = () => {
  const { keyword } = useParams();

  return <>Videos {keyword ? `🔎 ${keyword}` : '🔥'}</>;
};

export default Videos;
