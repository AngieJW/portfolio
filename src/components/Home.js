import React from 'react'
import styled from "styled-components";
import Card from "./Card";

function Home() {
  return (
    <Container>
      <Card/>
      <Card/>

      <Card/>

    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  gap: 100px;
`
