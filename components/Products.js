import React, { useContext } from "react";
import styled from "styled-components";
import { breakpoints } from "../utils";
import { AppContext } from "../context/state";
import { useProducts } from "../hooks";

const products = [
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    image: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    image: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    image: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Roja",
    image: "/products/gorra-roja.jpeg",
    price: 100.0,
    currency: "USD",
  },
  {
    name: "Gorra Negra",
    image: "/products/gorra-negra.jpeg",
    price: 100.0,
    currency: "USD",
  },
];

export const Products = ({ open }) => {
  const context = useContext(AppContext);
  // const { products } = useProducts();

  console.log("products:", products);
  return (
    <Container>
      {products &&
        products.map((product) => (
          <Product onClick={open}>
            <Image src={product.image} />
          </Product>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 0.5em;
`;
const Product = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transition: all 0.2s;
  }
`;
const Image = styled.img`
  width: 85%
  padding-bottom: 1em;
  ${breakpoints("width", "%", [{ 1200: 88 }, { 800: 98 }])};
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

const SizesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Size = styled.span`
  background: black;
  opacity: ${({ stock }) => (stock <= 0 ? ".4" : "1")};
  color: white;
  padding: 1em;
  width: 40%;
  text-align: center;
`;
