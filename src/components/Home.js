import React from 'react'
import styled from "styled-components";
import Cards from "./Cards";

function Home() {
  return (
    <Container>
      <Cards/>

    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
