import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { SocialMedia, VideoBackground, Icon, Pixel } from "../components";

export default function Home() {
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
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <img src="/the_magic_house_blanco.png" width="250px" />
        </div>
        <SocialMedia />
        <EventTitle>
          17 July - The Magic House - SAKRO + Halo Varga + Cris Herrera + Nelson
          Cuberli
        </EventTitle>
        <TicketSection>
          <Title>Book Tickets On:</Title>

          <ButtonsRow>
            <ButtonFill
              as="a"
              href="https://www.eventbrite.com/e/the-magic-house-sakro-halo-varga-cris-herrera-nelson-cuberli-tickets-157854104877"
            >
              <Icon name="eventbrite" width="100px" height="15px" />
            </ButtonFill>
            <Separator>Or</Separator>
            <ButtonFill
              as="a"
              href="https://venmo.com/code?user_id=3220785472733184873"
              color="white"
            >
              <Icon name="venmo" width="100px" height="60px" />
            </ButtonFill>
            {/* <ButtonBorder>
            <Link href="/merchandise">MERCHANDISE</Link>
          </ButtonBorder> */}
          </ButtonsRow>
        </TicketSection>
        <VideoBackground />
      </main>
    </>
  );
}

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
