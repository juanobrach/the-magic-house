import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/state";

const products = [
  {
    name: "Gorra Negra",
    imageSrc: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    imageSrc: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    imageSrc: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    imageSrc: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
];

export const Products = () => {
  const context = useContext(AppContext);

  return (
    <Container>
      {products.map((product) => (
        <Product onClick={() => context.addProduct(product)}>
          <Image src={product.imageSrc} />
          <Name>{product.name}</Name>
          <Price>${product.price}</Price>
        </Product>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;
const Product = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  cursor: pointer;
  padding-bottom: 3em;
  :hover {
    opacity: 0.9;
    transition: all 0.2s;
  }
`;
const Image = styled.img`
  width: 85%;
  padding-bottom: 1em;
`;
const Name = styled.h3`
  font-size: 1em;
  font-family: arial;
  margin: 0;
  padding-bottom: 0.4em;
`;

const Price = styled.h4`
  font-size: 1em;
  font-family: fantasy;
  font-weight: bold;
  margin: 0;
`;
