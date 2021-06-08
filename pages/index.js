import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { SocialMedia, VideoBackground } from "../components";

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
          <Title>Get tickets on:</Title>

          <ButtonsRow>
            <ButtonFill
              as="a"
              href="https://www.eventbrite.com/e/the-magic-house-sakro-halo-varga-cris-herrera-nelson-cuberli-tickets-157854104877"
            >
              Eventbrite
            </ButtonFill>
            <Separator>Or</Separator>
            <Qr src="/qr.png" />
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
  padding: 1em 2em;
  border-radius: 3px;
  font-family: "Poppins";
  font-weight: bolder;
  cursor: pointer;
`;

const ButtonFill = styled(Button)`
  border: 1px solid transparent;
  font-family: "Arial";
  background: #f05537;
  color: white;
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
