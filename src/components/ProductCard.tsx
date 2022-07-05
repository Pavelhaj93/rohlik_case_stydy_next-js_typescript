import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

import { Product } from "../../types";

interface IProps {
  product: Product;
}

const ProductCard: NextPage<IProps> = ({ product }: IProps) => {
  return (
    <>
      <CardDiv>
        <ImgDiv>
          <Image
            src={product.image}
            height={150}
            width={150}
            alt="product-img"
          />
        </ImgDiv>
        <div> {product.name} </div>
        <div>
          {product.price.full} {product.price.currency}
        </div>
      </CardDiv>
    </>
  );
};

export default ProductCard;

const CardDiv = styled.div`
   {
    width: 300px;
    height: 450px;
    border: 2px solid red;
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
