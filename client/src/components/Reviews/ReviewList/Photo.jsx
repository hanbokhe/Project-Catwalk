import React from 'react';

var Photo = ({photo}) => {
  return (
    <div>
      <a href={photo.url}>
        <img className="thumbnail"
          src={photo.url}
          alt={photo.id}
          width="193"
          height="130"
        />
      </a>

    </div>
  );
};

export default Photo;