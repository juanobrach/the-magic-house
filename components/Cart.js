import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PaypalExpressBtn from "react-paypal-express-checkout";
import styled from "styled-components";
import { AppContext } from "../context/state";

export const Cart = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const context = useContext(AppContext);
  const client = {
    sandbox:
      "AR4q1C5_L7o5REswaV_o1JOr2cJBZWEtJ9pubxQoO5B_Lri8lSJohSBiYe8Dp-ZL2V9oUCU-U2-j6iid",
    production:
      "Ae8bzel_CKYsb4OxPKz5WO3ABxzGBYP8x3Yya93A03Sf4zmhhX1ptSULaY44JrAKBvU-JmWE5F0NRxpZ",
  };

  const onSuccess = (payment) => {
    // 1, 2, and ... Poof! You made it, everything's fine and dandy!
    console.log("Payment successful!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onCancel = (data) => {
    // The user pressed "cancel" or closed the PayPal popup
    console.log("Payment cancelled!", data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = (err) => {
    // The main Paypal script could not be loaded or something blocked the script from loading
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  useEffect(() => {
    setIsEnabled(true);
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log("data:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <CartContainer>
        <Title>Cart</Title>
        <Items>
          {context.cartItems.map((item, index) => (
            <Item key={index} onClick={() => context.removeProduct(index)}>
              <Name>{item.name}</Name>
              <Price>${item.price}</Price>
            </Item>
          ))}
        </Items>
        <Total>
          <Title>Total</Title>
          <Price>${context.cartTotal}</Price>
        </Total>
        {isEnabled && (
          <PaypalExpressBtn
            env={"sandbox"}
            client={client}
            currency={"MXN"}
            total={context.cartTotal}
            cart={context.cartItems || []}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
            disable={context.cartTotal <= 0}
          />
        )}
      </CartContainer>
    </Container>
  );
};

const Container = styled.div``;

const CartContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const Title = styled.span`
  margin: 0;
  padding-bottom: 0.3em;
  display: block;
  font-weight: bold;
`;

const Items = styled.ul`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  min-height: 5em;
  margin: 0;
  padding: 0.5em 0;
  list-style-type: none;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  padding: 0.5em 0;

  :hover {
    color: gray;
  }
  :hover :before {
    content: "x";
    position: absolute;
    width: 10px;
    height: 10px;
    left: -15px;
    color: gray;
  }
`;
const Name = styled.span``;
const Price = styled.span`
  font-weight: bold;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BuyNow = styled.button`
  background: white;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  padding: 1em;
  margin-top: 1em;
  opacity: ${({ disable }) => (disable ? ".5" : 1)};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
`;
