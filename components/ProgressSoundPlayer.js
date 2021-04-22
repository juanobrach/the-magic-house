import React, { useEffect } from "react";
import styled from "styled-components";
import { withSoundCloudAudio } from "react-soundplayer/addons";

import {
  PlayButton as PlayButtonLibrary,
  Progress,
} from "react-soundplayer/components";

const prettyTime = (time) => {
  var hours = Math.floor(time / 3600);
  var mins = "0" + Math.floor((time % 3600) / 60);
  var secs = "0" + Math.floor(time % 60);

  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);

  if (!isNaN(secs)) {
    if (hours) {
      return hours + ":" + mins + ":" + secs;
    }
    return mins + ":" + secs;
  }
  return "00:00";
};

export const ProgressSoundPlayer = withSoundCloudAudio((props) => {
  const { track, currentTime, duration, soundCloudAudio } = props;

  useEffect(() => {
    soundCloudAudio.play();
  }, []);

  return (
    <Container>
      <PlayButtonContainer>
        <PlayButton {...props} />
      </PlayButtonContainer>
      <Timer>{prettyTime(currentTime)}</Timer>
      <ProgressBarContainer>
        <ProgressBar value={(currentTime / duration) * 100 || 0} {...props} />
      </ProgressBarContainer>
      <Timer>{prettyTime(duration)}</Timer>
    </Container>
  );
});

const Container = styled.div`
  width: 70%;
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 25px 25px 0.9fr 25px;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const ProgressBarContainer = styled.div``;

const ProgressBar = styled(Progress)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  height: 2px;
  cursor: pointer;
  border-radius: 10px;
  > div {
    background-color: white;
    transition: width 0.2s ease-in-out;
    height: 100%;
    height: 3px;
  }
`;

const PlayButtonContainer = styled.div``;
const PlayButton = styled(PlayButtonLibrary)`
  width: 100%;
  background: none;
  border: none;
  color: white;
  :focus {
    outline: none;
  }
`;

const Timer = styled.span`
  color: white;
  font-size: 0.7em;
`;
