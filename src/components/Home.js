import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";

function Home() {
  document.title = "Angie Duhard Porfolio - Fullstack Developpeuse";
  return (
    <>
      <Header />

      <Cards />

      <Footer />
    </>
  )
}

export default Home
