import React from "react";
import styled from "styled-components";

import { Product } from "../../types";
import ProductDetailsCard from "../../src/components/ProductDetailsCard";

interface IProps {
  product: Product;
}

const ProductDetails = ({ product }: IProps) => {
  console.log(product, "product");

  return (
    <>
      <ProductDetailsCard product={product} />
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const request = await fetch(
    `http://localhost:3000/api/products/${params.id}`
  );
  const product = await request.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
