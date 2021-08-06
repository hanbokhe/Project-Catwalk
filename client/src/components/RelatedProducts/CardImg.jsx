import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
height: 315px;
width: 250px;
z-index: -1;
overflow: hidden;
object-fit: cover;
`

const CardImg = ({photo, imgClick, description}) => (
  <Img src={photo} onClick={imgClick} alt={description}/>
)

export default CardImg;