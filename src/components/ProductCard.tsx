import React, { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

import { Product } from "../../types";
import PriceModal from "./PriceModal";

interface IProps {
  product: Product;
}

const ProductCard: NextPage<IProps> = ({ product }: IProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((quantity) => quantity + 1);
    console.log(quantity, product.name);
  };

  const onIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  }

  const onDecrease = () => {
    setQuantity((quantity) => quantity - 1)
    if (quantity === 1) {
      return
    }
  }
  return (
    <>
      <CardDiv>
        {quantity >= 1 && <PriceModal quantity={quantity} price={product.price} />}
        <ImgDiv>
          <Image
            src={product.image}
            height={150}
            width={200}
            alt="product-img"
          />
        </ImgDiv>
        <h3 style={{ maxWidth: "80%", textAlign: "center" }}>
          {" "}
          {product.name}{" "}
        </h3>
        <h4>
          {product.price.full} {product.price.currency}
        </h4>
        {quantity === 0 ? (
          <BigButton type="button" onClick={() => handleAdd()}>
            Do košíku
          </BigButton>
        ) : (
          <SmallButtonsContainer>
            <SmallButton type="button" onClick={() => onDecrease()}>-</SmallButton>
            <QuantitySpan>{quantity}</QuantitySpan>
            <SmallButton type="button" onClick={() => onIncrease()}>+</SmallButton>
          </SmallButtonsContainer>
        )}
      </CardDiv>
    </>
  );
};

export default ProductCard;

const CardDiv = styled.div`
   {
    width: 300px;
    height: 350px;
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgDiv = styled.div`
   {
    width: 50%;
  }
`;

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

const SmallButtonsContainer = styled.div`{
  display: flex;
  justify-content: space-betweeen;
}`

const QuantitySpan = styled.span`{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}`