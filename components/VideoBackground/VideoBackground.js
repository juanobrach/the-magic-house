import React from "react";
import styled from "styled-components";
import { Video, Transformation } from "cloudinary-react";

export const VideoBackground = () => (
  <Container>
    <VideoForeground>
      <video autoPlay loop playsinline>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop playsinline>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop playsinline>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
    </VideoForeground>
  </Container>
);

const Container = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -99;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const VideoForeground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  > video {
    height: 100%;
    object-fit: fill;
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
