import React from "react";
import styled from "styled-components";
import { Icon } from ".";

export const SocialMedia = () => (
  <Container>
    <Link href="https://www.instagram.com/themagichousesd/">
      <Icon name="instagram" width="16px" />
    </Link>
    <Link href="https://www.youtube.com/channel/UCZDhmZzErW3mKPbjp78mjQg">
      <Icon name="youtube" />
    </Link>
    <Link href="https://soundcloud.com/nelsoncuberli/sets/the-magic-house-podcast">
      <Icon name="soundcloud" />
    </Link>
  </Container>
);
const Container = styled.div`
  display: grid;
  flex-flow: row wrap;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  width: 25%;
  margin: 0;
`;

const Link = styled.a`
  margin: 0;
  justify-self: center;
  :hover {
    opacity: 0.5;
  }
`;
