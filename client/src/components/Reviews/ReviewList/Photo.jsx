import React, { Component } from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const images = [this.props.photo.url];
    console.log(this.props);
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          <img className="thumbnail"
            src={this.props.photo.url}
            alt={this.props.photo.id}
            width="193"
            height="130"
          />
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}
