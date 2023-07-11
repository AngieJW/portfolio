import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Container>
      <p>Créé par Angie DUHARD avec React</p>
      <p>©2023 - En cours de construction - <Link to="https://github.com/AngieJW/portfolio">le Repo ici</Link></p>

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
  font-size: 24px;
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.04em;

  a{
    text-decoration: none;
    opacity: 0.8;
    cursor: pointer;
  }
`
