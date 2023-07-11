import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>Créé par Angie DUHARD avec React</p>
      <p>©2023 - En cours de construction</p>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  margin-top: 100px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 32px;
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.04em;
`
