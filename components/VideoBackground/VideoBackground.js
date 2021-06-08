import React from "react";
import styled from "styled-components";
import { Video, Transformation } from "cloudinary-react";

export const VideoBackground = () => (
  <Container>
    <VideoForeground>
      <Video
        playsInline
        loop
        autoPlay
        cloudName="drkj4pgrk"
        publicId="themagichouse/video_background"
      ></Video>
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
    width: 100%;
    object-fit: cover;
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
