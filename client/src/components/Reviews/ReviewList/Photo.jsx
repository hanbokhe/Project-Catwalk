/* eslint-disable react/prop-types */
import React from 'react';


var Photo = ({photo}) => {
  return (
    <div>
      <img className="thumbnail"
        src={photo.url}
        alt={photo.id}
        width="193"
        height="130"
      />
    </div>
  )
};

export default Photo;