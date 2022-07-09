import { CommentsDisabledOutlined } from "@mui/icons-material";
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductCard from "../src/components/ProductCard";
import { Product } from "../types";
import Filter from "../src/components/Filter";

interface IProps {
  items: Product[];
}

const Home = ({ items }: IProps, test: any) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState(items);

  console.log(test)

  useEffect(() => {
    if (searchTerm === "") {
      setProducts(items);
    } else {
      const filteredData = items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setProducts(filteredData);
      console.log(searchTerm);
    }
  }, [searchTerm, items]);

  return (
    <>
      <Head>
        <title>Rohlik Eshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Filter setSearchTerm={setSearchTerm} />
        <ProductsContainer>
          {products?.map((product: Product) => {
            return (
              <ProductCard product={product} key={product.id}></ProductCard>
            );
          })}
        </ProductsContainer>
      </main>

      <footer></footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return { props: { items: data } };
};

export default Home;

const ProductsContainer = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 12vh;
  }
`;
