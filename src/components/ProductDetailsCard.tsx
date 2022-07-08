import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { Product } from "../../types";
import Buttons from '../../src/components/Buttons';

interface IProps {
  product: Product;
}

const ProductDetailsCard = ({ product }: IProps) => {
  return (
    <>
      <ProductDetailsDiv>
        <ImageDetailDiv>
          <Image
            src={product.image}
            alt="product_detail_image"
            width={400}
            height={400}
          />
        </ImageDetailDiv>
        <DescDetailDiv>
          <h2>{product.name}</h2>
          <h3>{product.price.full} {product.price.currency}</h3>
        </DescDetailDiv>
      </ProductDetailsDiv>
    </>
  );
};

export default ProductDetailsCard;

const ProductDetailsDiv = styled.div`
   {
    width: 100%;
    height: 90vh;
    border: 2px solid red;
    padding-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageDetailDiv = styled.div`{
  width: 50%;
  padding: 150px;
  border: 2px solid blue;
  height: 100%;
}`

const DescDetailDiv = styled.div`{
width: 50%;
border: 2px solid green;
padding: 50px;
height: 100%;
}`
