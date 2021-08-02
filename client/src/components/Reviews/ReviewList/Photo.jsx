import React from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';

const Img = styled.img`
width: 193px;
height: 130px;
object-fit: scale-down;
`;

// var Photo = ({photo}) => {
//   console.log(photo);
//   return (
//     <ModalImage
//       small={photo.url}
//       medium={photo.url}
//     />
//   );
// };

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
  );
};


export default Photo;