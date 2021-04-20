import { useRef, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import "../styles/Home.module.scss";
import { SocialMedia } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Magic House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="logo-container">
          <img src="/the_magic_house_blanco.png" width="250px" />
        </div>
        <SocialMedia />
        <ButtonsRow>
          <ButtonFill>BOOK TICKETS</ButtonFill>
          <ButtonBorder>
            <Link href="/merchandise">MERCHANDISE</Link>
          </ButtonBorder>
        </ButtonsRow>
        <VideoBackground>
          <VideoForeground>
            <video className="videoTag" autoPlay loop>
              <source src={"/video_background.mp4"} type="video/mp4" />
            </video>
          </VideoForeground>
        </VideoBackground>
      </main>
    </>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: rgb(0 0 0 / 28%);
  height: 50px;
`;

const Button = styled.button`
  padding: 1em 2em;
  border-radius: 3px;
  font-family: "Poppins";
  font-weight: bolder;
  margin-right: 0.8em;
  cursor: pointer;
`;

const ButtonFill = styled(Button)`
  border: 1px solid transparent;

  background: white;
  color: black;
  :hover {
    background: transparent;
    border: 1px solid white;
    color: white;
  }
`;

const ButtonBorder = styled(Button)`
  background: transparent;
  border: 1px solid white;
  color: white;
  :hover {
    background: white;
    color: black;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const VideoBackground = styled.div`
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
  }
`;