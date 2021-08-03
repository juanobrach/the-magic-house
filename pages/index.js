import styled from "styled-components";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { SocialMedia, VideoBackground, Pixel } from "../components";
import { useEvents, useSettings } from "../hooks";
import { breakpoints } from "../utils";

export default function Home() {
  const { activeEvent } = useEvents();
  const { settings } = useSettings();

  const venoLink = activeEvent.links.veno;
  const eventBriteLink = activeEvent.links.eventBrite;

  return (
    <>
      <Head>
        <title>The Magic House</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#232323" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Underground House Music Party" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themagic.house/" />
        <meta property="og:title" content="The Magic House " />
        <meta
          property="og:description"
          content={
            settings
              ? settings.facebook.share.text
              : "Underground House Music Party"
          }
        />
        <meta
          property="og:image"
          content={
            settings
              ? settings.facebook.share.img
              : "https://images.ctfassets.net/nezh43dj970l/3UZaoABR8rsXtzzz0NYGnh/3515c74ce74a19096f3d47556ac5e781/TMH.png"
          }
        />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />

      <main className={styles.main}>
        <LogoContainer>
          <img src="/the_magic_house_blanco.png" />
        </LogoContainer>

        {activeEvent && (
          <>
            <FlyerContainer>
              <img src={activeEvent.flyer} />
            </FlyerContainer>

            <EventTitle as="a" href={venoLink || eventBriteLink}>
              GET YOUR TICKETS
            </EventTitle>
          </>
        )}
        <SocialMedia />
        <VideoBackground />
      </main>
    </>
  );
}

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 2em;

  > img {
    width: 300px;
    ${breakpoints("width", "%", [{ 800: 60 }])};
  }
`;

const Separator = styled.span`
  font-weight: bold;
  margin: 0 1em;
  color: white;
`;

const Qr = styled.img`
  height: 80px;
`;
const TicketSection = styled.div``;
const Title = styled.h2`
  color: white;
  text-align: center;
`;
const EventTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.1em;
  text-transform: uppercase;
  background: RED;
  padding: 1em;
  border-radius: 25px;
  margin-bottom: 3em;
  font-weight: bold;
  opacity: 0.9;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: rgb(0 0 0 / 28%);
  height: 50px;
`;

const Button = styled.button`
  border-radius: 3px;
  font-family: "Poppins";
  font-weight: bolder;
  cursor: pointer;
  align-items: center;
  display: flex;
  padding: 0 1em;
`;

const ButtonFill = styled(Button)`
  border: 1px solid transparent;
  font-family: "Arial";
  background: ${({ color }) => color ?? "#f05537"};
  color: white;
  height: 50px;
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
  align-items: center;
`;

const FlyerContainer = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 0 20%;
  ${breakpoints("padding-left", "%", [{ 800: 0 }])};
  ${breakpoints("padding-right", "%", [{ 800: 0 }])};
  margin-bottom: 1em;
  img {
    opacity: 0.9;
    width: 50%;
    max-width: 100%;
    ${breakpoints("width", "%", [{ 800: 95 }])};
  }
  :hover {
    img {
      opacity: 1;
    }
  }
`;
