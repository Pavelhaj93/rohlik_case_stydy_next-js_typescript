import React from "react";
import styled from 'styled-components';

import { Product } from "../../types";

interface IProps {
    quantity: number,
    product: Product,
    handleIncrease: any,
    handleDecrease: any
}

const Buttons = ({quantity, product, handleIncrease, handleDecrease}: IProps) => {
  return (
    <>
      {quantity === 0 ? (
        <BigButton type="button" onClick={() => handleIncrease({ product })}>
          Do košíku
        </BigButton>
      ) : (
        <SmallButtonsContainer>
          <SmallButton type="button" onClick={() => handleDecrease({ product })}>
            -
          </SmallButton>
          <QuantitySpan>{quantity}</QuantitySpan>
          <SmallButton type="button" onClick={() => handleIncrease({ product })}>
            +
          </SmallButton>
        </SmallButtonsContainer>
      )}
    </>
  );
};

export default Buttons;

const BigButton = styled.button`
   {
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
`;

const SmallButton = styled.button`
   {
    width: 40px;
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
`;

const SmallButtonsContainer = styled.div`
   {
    display: flex;
    justify-content: space-betweeen;
  }
`;

const QuantitySpan = styled.span`
   {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
