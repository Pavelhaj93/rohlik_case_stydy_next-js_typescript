import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../assets/rohlik-cz-logo-vector.png";
import Filter from "./Filter";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <ImageContainer>
          <Image src={logo} alt="logo" width={100} height={50} />
        </ImageContainer>
        <Filter />
        <CartButtonContainer type="button">
          <ShoppingCartIcon />
          <span></span>
        </CartButtonContainer>

      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.div`
   {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
    position: fixed;
    background-color: white;
    width: 100vw;
    z-index: 3;
    border-bottom: 2px solid blue;
  }
`;

const ImageContainer = styled.div`
   {
    height: 10vh;
    width: 100px;
  }
`;

const CartButtonContainer = styled.button`
   {
    background-color: transparent;
    height: 3em;
    width: 3em;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
  }
`;
