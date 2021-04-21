import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const VideoBackground = () => {
  const videoRef = useRef();

  useEffect(() => {
    const player = videoRef.current;
    player.play();
  }, []);

  return (
    <Container>
      <VideoForeground>
        <video
          ref={(ref) => (videoRef.current = ref)}
          width="100%"
          height="100%"
          loop={true}
        >
          <source src={require("./video_background.mp4")} type="video/mp4" />
        </video>
      </VideoForeground>
    </Container>
  );
};

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
    width: auto;
    object-fit: fill;
    @media (max-width: 767px) {
      width: 300%;
    }
  }
`;

const Video = styled.video``;
