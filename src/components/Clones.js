import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom'

function Clones() {
  document.title = "Clones recréés avec React - Angie Duhard Porfolio ";
  return (
    <>
      <Header />
      <Content>
          <Wrap>
            <Link to="https://tesla.angieduhard.com">
              <img src="/images/tesla.jpg" alt="desktop view of tesla clone"/></Link>
            <Link to="https://github.com/AngieJW/tesla-clone"><p>TESLA Clone - Repo GitHub</p></Link>
          </Wrap>
          <Wrap>
            <Link to="https://gpt3.angieduhard.com">
              <img src="/images/gpt3.jpg" alt="desktop view of gpt3 clone" /></Link>
            <Link to="https://github.com/AngieJW/gpt3"><p>GPT3 Clone - Repo GitHub</p></Link>
          </Wrap>

      </Content>

      <Footer />
    </>
  )
}

export default Clones

const Content = styled.div`
margin-top: 30px;
padding: 30px 0px;
display: flex;
justify-content: space-around;

@media(max-width: 1000px) {
  flex-direction: column;
}
`

const Wrap = styled.div`

  width: 400px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  a {
    text-decoration: none;
  }

  img{
    width: 400px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  p{
    color: white;
    letter-spacing: 1.2;
    border-radius: 40px;
    height: 50px;
    line-height: 50px;
    background-color: #3e92cc;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 10px 20px -10px, rgb(0 0 0 / 40%) 0px 16px 10px -10px;
    text-align: center;

  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media(max-width: 1000px) {
    width: 200px;
    margin: 0 auto;

    img{
      width:200px;
    }
  }
`
