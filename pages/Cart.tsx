import React from "react";
import styled from "styled-components";

const Cart = () => {
  return (
    <>
      <CartContainer>
        <TitleDiv>
          <h2>Přehled objednávky</h2>
          <RemoveButton>Vysypat koš</RemoveButton>
        </TitleDiv>
      </CartContainer>
    </>
  );
};

export default Cart;

const CartContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    align-items: center;
    text-align: center;
  }
`;

const TitleDiv = styled.div`{
  width: 80%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}`;

const RemoveButton = styled.button`{
  {
    position: absolute;
    right: 20%;
    top: 12vh;
    width: 150px;
    height: 40px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: green;
    }
  }
}`
