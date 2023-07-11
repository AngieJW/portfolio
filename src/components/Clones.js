import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function Clones() {
  document.title = "Clones recréés avec React - Angie Duhard Porfolio ";
  return (
    <>
      <Header />
      <Content></Content>

      <Footer />
    </>
  )
}

export default Clones

const Content = styled.div`

`
