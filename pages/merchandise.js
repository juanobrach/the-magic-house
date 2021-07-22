import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Products, Cart } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "37%",
    borderTopLeftRadius: "12%",
    borderTopRightRadius: "12%",
    padding: "1em",
  },
  fullList: {
    width: "auto",
  },
});

export default function Merchandise() {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };
  return (
    <>
      <Head>
        <title>The Magic House - Merchandise </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          {"<"}
          <Logo src="/logo_square.png" />
        </Header>
        <Products open={open} />
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={show}
          onClose={hide}
          transitionDuration={50}
        >
          <Grid container spacing={1}>
            <Grid container item xs={12}>
              Product name
            </Grid>
            <Grid container item xs={12}>
              <Button variant="contained" color="secondary">
                ADD TO CART
              </Button>
            </Grid>
          </Grid>
        </Drawer>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 2.5em;
  ${breakpoints("padding", "em", [{ 1200: 80 }, { 800: 0.3 }])};
`;

const Logo = styled.img`
  width: 20%;
  justify-self: flex-end;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  padding: 0.5em;
`;

const Shop = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 5%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
