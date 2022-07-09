import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../assets/rohlik-cz-logo-vector.png";
import Link from "next/link";

const Navbar = () => {

  return (
    <>
      <NavContainer>
        <Link href="/">
          <ImageContainer>
            <Image src={logo} alt="logo" width={100} height={50} />
          </ImageContainer>
        </Link>
       <Link href="/cart">
          <CartButtonContainer type="button">
            <ShoppingCartIcon />
            <span></span>
          </CartButtonContainer>
       </Link>

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
    border-bottom: 2px solid darkGreen;
  }
`;

const ImageContainer = styled.div`
   {
    height: 10vh;
    width: 100px;
    cursor: pointer;
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
