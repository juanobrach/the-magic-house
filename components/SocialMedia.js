import React from "react";
import styled from "styled-components";
import { Icon } from ".";

export const SocialMedia = () => (
  <Container>
    <div>
      <Icon name="soundcloud" />
    </div>
    <div>
      <Icon name="youtube" />
    </div>
    <div>
      <Icon name="instagram" width="16px" />
    </div>
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
