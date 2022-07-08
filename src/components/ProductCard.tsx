import React, { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

import { Product } from "../../types";
import PriceModal from "./PriceModal";
import Link from "next/link";
import Buttons from "./Buttons";

interface IProps {
  product: Product;
}

const ProductCard: NextPage<IProps> = ({ product }: IProps, cart) => {
  const [quantity, setQuantity] = useState<number>(0);

  let productId = product.id;
  let qty = quantity;

  const handleIncrease = ({ product }: IProps) => {
    setQuantity((quantity) => quantity + 1);
    console.log(quantity);

    let cart: any = window.localStorage.getItem("cart");

    if (!cart) {
      window.localStorage.setItem(
        "cart",
        JSON.stringify({ productId, qty: 1 })
      );
      console.log(cart);
    }
  };

  const handleDecrease = () => {
    setQuantity((quantity) => quantity - 1);
  };

  return (
    <>
      <CardDiv>
        {quantity >= 1 && (
          <PriceModal quantity={quantity} price={product.price} />
        )}
        <Link href={`/products/${product.id}`}>
          <ImgDiv>
            <Image
              src={product.image}
              height={150}
              width={150}
              layout="fixed"
              objectFit="contain"
              alt="product-img"
            />
          </ImgDiv>
        </Link>
        <h4 style={{ maxWidth: "80%", textAlign: "center" }}>{product.name}</h4>
        <h4>
          {product.price.full} {product.price.currency}
        </h4>
        <Buttons
          quantity={quantity}
          product={product}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
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
    width: 150px;
    height: 200px;
    cursor: pointer;
  }
`;
