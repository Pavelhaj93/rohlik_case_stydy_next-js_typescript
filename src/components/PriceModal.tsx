import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
// import colors from "../../pages/_app";

interface IProps {
  quantity: number;
  price: {
    full: number;
    currency: string;
  };
}

const PriceModal: NextPage<IProps> = ({ quantity, price }: IProps) => {
  return (
    <>
      <ModalDiv>
        V košíku máte {quantity} ks za{" "}
        {Math.round(quantity * price.full * 100) / 100}
        {price.currency}
        <ArrowDown />
      </ModalDiv>
    </>
  );
};

export default PriceModal;

const ModalDiv = styled.div`
   {
    width: 300px;
    height: 50px;
    background-color: lightGreen;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ArrowDown = styled.div`
   {
    width: 0;
    height: 0;
    position: absolute;
    top: 45px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid lightGreen;
  }
`;
