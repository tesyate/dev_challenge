import React, { useState } from 'react';

const SongItem = ({
  options
}) => {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={'song_item'}>
      <span>{options.title}</span>
      <span className={like ? 'song_item-liked' : 'song_item-not'}>like it</span>
    </div>
  );
};

export default SongItem;