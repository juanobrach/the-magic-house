import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Products, Cart } from "../components";
export default function Merchandise() {
  return (
    <>
      <Head>
        <title>The Magic House - Merchandise </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Logo src="/logo_square.png" />
        <Shop>
          <Cart />
          <Products />
        </Shop>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  height: 100%;
  padding: 2.5em;
  grid-template-rows: 1fr 1fr;
`;

const Logo = styled.img`
  width: 10%;
  padding-bottom: 2em;
`;

const Shop = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 5%;
`;
